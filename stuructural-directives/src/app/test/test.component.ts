import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <!--ngIf-->
  <div *ngIf="Displayname;then ifBlock;else elseBlock"></div>

  <ng-template #ifBlock>
    <h2>Prabhas Saaho</h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>Hidden</h2>  
  </ng-template>  

  <!--ngSwitch-->
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked Red color</div>
    <div *ngSwitchDefault>Pick Again</div>
    <div *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
  </div>

  <!--ngFor-->
  <div *ngFor="let x of colors;index as i">
  <h2>{{i}} {{x}}</h2>
  </div>
  <h2>{{parentData+ "  hello"}}</h2>
  <button (click)="clickevent()">sendevent</button>

  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public colors=["red","orange","purple","green"];
  public color="purple";
  public Displayname=false;
  @Input() public parentData;

  @Output() public childevent=new EventEmitter();


  clickevent(){
    this.childevent.emit('hey watsupp');
  }
  constructor() { }

  ngOnInit() {
  }

}
