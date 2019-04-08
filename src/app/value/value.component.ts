import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
})
export class ValueComponent implements OnInit {

  @Input() first: Observable<number>;
  @Input() second: Observable<number>;

  constructor(
  ) { }

  ngOnInit() {
  }

}
