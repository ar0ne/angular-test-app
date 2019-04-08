import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css'],
})
export class BorderComponent implements OnInit {

  @Input() first: Observable<number>;
  @Input() second: Observable<number>;
  
  constructor(
  ) { }

  ngOnInit() {
  }

}
