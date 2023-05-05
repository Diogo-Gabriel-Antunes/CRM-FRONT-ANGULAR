import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-hora',
  templateUrl: './input-hora.component.html',
  styleUrls: ['./input-hora.component.scss'],
})
export class InputHoraComponent {
  @Input() placeHolder: string = '';
  @Input() disabled!: boolean;
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
