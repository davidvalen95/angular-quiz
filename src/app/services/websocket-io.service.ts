import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class WebsocketIoService {
  private subject: Rx.Subject<MessageEvent>;
  constructor() { }

  public connect(url:string){
    if(!this.subject){
      this.connectHelper(url);
    }

    return this.subject;
  }



  private connectHelper(url:string){
    var webSocket = new WebSocket(url);

    let observable = Rx.Observable.create((observer:Rx.Observer<MessageEvent>)=>{
      webSocket.onmessage = observer.next.bind(observer);
    })
  }
}
