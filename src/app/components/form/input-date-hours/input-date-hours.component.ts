import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-date-hours',
  templateUrl: './input-date-hours.component.html',
  styleUrls: ['./input-date-hours.component.scss'],
})
export class InputDateHoursComponent {
  @Input() placeHolder: string = '';
  @Input() disabled: boolean = false;
  @Input()
  get value(): any {
    return this._value;
  }
  set value(val: any) {
    this._value = val;
    this.valueChange.emit(this._value);
  }
  private _value: any;
  @Output() valueChange = new EventEmitter<any>();
}
