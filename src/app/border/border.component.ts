import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css']
})
export class BorderComponent implements OnInit {

  @Input() first: number;
  @Input() second: number;
  @Input() lastUpdate: Date;
  
  constructor() { }

  ngOnInit() {
  }

}
