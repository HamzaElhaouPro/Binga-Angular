import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {ActionEventType} from "./prouct.state";

@Injectable({providedIn:"root"})
export  class  SubjectEventService{
sourceEventSubject : Subject<ActionEventType>= new  Subject<ActionEventType>() ;
sourceEventSubjectObservable=this.sourceEventSubject.asObservable();

publishEvent(event: ActionEventType) {
  this.sourceEventSubject.next(event);
}

}
