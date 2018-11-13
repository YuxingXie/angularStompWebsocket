# AngularStompWebsocket

angular使用websocket。将研究原始ES6方式和ng2-stompjs两种方式。

## 1.创建项目

```text
ng new angularStompWebsocket
```
在WebStorm中打开项目。

## 2.stompjs方式

### 2.1.安装stompjs
package.json中加入：
```text
npm i @stomp/ng2-stompjs --save
```
当前版本是7.0.0。

如果您使用了老版本，请务必阅读：https://stomp-js.github.io/guide/ng2-stompjs/2018/11/05/migrate-ng2-stompjs-v7.html

### 3.2.服务端程序

服务端使用一个java web项目：https://github.com/YuxingXie/stomp-websocket

服务器连接端点为：/gs-guide-websocket

### 3.3.3.angular组件

程序设计得稍微复杂一点，主组件连接websocket服务器，从组件推送数据到服务器并返回响应。

参考资料：https://stomp-js.github.io/guide/ng2-stompjs/2018/11/04/ng2-stomp-with-angular7.html

实际上，跟着上面参考资料上的步骤就可以实现websocket从页面推送消息到服务器，并接收服务器返回的消息的功能。所以我不再
贴出这些步骤，只讲一讲资料上没有的东西。

客户端向服务端推送：
```javascript
  onSendMessage() {
    this.rxStompService.publish({destination: '/app/hello', body: `{"name":"${Math.random()}"}`});
  }
```

服务端接收推送后返回消息：
```javascript
this.rxStompService.watch('/app/hello').subscribe((message: Message) => {
      console.log('web socket get message:', message.body);
      ...
    });
```
这里有一个细节，rxStompService的watch和publish的目的地相同，这表示什么呢？这表示客户端推送消息到服务端，如果服务端不指定发送到哪个客户端端点，
那么客户端其实也使用和服务端相同的端点。

如果服务端指定了推送到服务端的端点，比如服务端指定推送到"/topic/greetings"这个端点，客户端如何接收服务端的推送呢？方法如下：
```javascript
    this.rxStompService.watch('/topic/greetings').subscribe((message: Message) => {
      console.log('web socket get message:', message.body);
      this.receivedMessages.push(message.body);
    });
```

客户端直接使用rxStompService.watch来监听这个端点就好了。
