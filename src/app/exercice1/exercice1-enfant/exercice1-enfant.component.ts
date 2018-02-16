import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
	@Input('myInput') public monInput: number;
	@Output() public ee: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  public addValue(value: number): void
  {
	  this.monInput+=value;
	  this.ee.emit(this.monInput);
  }

}
