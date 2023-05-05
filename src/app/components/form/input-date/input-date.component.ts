import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
})
export class InputDateComponent {
  @Input() placeHolder: string = '';

  @Input()
  get value(): string {
    return this._value;
  }
  set value(val: string) {
    this._value = val;
    this.valueChange.emit(this._value);
  }
  private _value: string = '';
  @Output() valueChange = new EventEmitter<any>();
}
