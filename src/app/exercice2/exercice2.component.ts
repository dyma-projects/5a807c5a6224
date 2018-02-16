import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
   public value: string;
   @ViewChild('v') public v: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  
  public update(): void
  {
	  this.value=this.v.nativeElement.value;
  }

}
