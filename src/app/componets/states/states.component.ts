import {Component, OnInit} from '@angular/core';
import {SubjectEventService} from "../../state/Subject EventService";
import {ActionEventType} from "../../state/prouct.state";

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent  implements  OnInit{
  counter :number =0;
constructor(private    EventService:SubjectEventService) {
}

  ngOnInit(): void {
  this.EventService.sourceEventSubjectObservable.subscribe((actionEvent :ActionEventType)=>{
    ++this.counter;
  })
  }
}
