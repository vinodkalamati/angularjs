import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`<h2>Welcome {{name}} </h2>
            <h2>{{"welcome"+ name}}
            {{7384+64793}}</h2>
            <input [disabled]="false" type="text" value="vinod" [id]="myId">
            <input disabled={{false}} type="text" value="kalam" id={{myId}}>
            <!--class binding-->
            <h2 [class]="successclass">Life of pi</h2>
            <h2 [ngClass]="multiclass">Titanic</h2>
            <h2 [style.color]="'orange'">kalam</h2>
            <h2 [style.color]="isSpecial ? 'red' :'blue'">stackroute</h2>
            
            `,

  styles: [`
  
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name="vinod";
  public myId="testId";
  public successclass="text-success";
  public hasError="false";
  public isSpecial="true";
  public multiclass={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial

  }
  constructor() { }

  ngOnInit() {
  }

}
