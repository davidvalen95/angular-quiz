
import {Injectable} from "@angular/core";

@Injectable()
export class BaseForm {

  public rules:{} = {};
  public value;

  constructor(
    public labelValue:string,
    public placeholder:string,
    public name:string,
    public type:string,
    ){

  }



}
