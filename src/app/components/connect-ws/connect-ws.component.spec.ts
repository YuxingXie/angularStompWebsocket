import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWsComponent } from './connect-ws.component';

describe('ConnectWsComponent', () => {
  let component: ConnectWsComponent;
  let fixture: ComponentFixture<ConnectWsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectWsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
