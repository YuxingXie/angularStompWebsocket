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


#### 3.3.3.1.主组件

生成组件：
```text
ng g component components/connect_ws
```

导入stompjs:

src/app/components/connect-ws/connect-ws.component.ts:
```typescript
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import {Observable} from 'rxjs/Observable';
import {Message} from '@stomp/stompjs';
```
