import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-valor-currency',
  templateUrl: './input-valor-currency.component.html',
  styleUrls: ['./input-valor-currency.component.scss'],
})
export class InputValorCurrencyComponent {
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
