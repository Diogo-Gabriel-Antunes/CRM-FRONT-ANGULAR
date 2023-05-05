import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IOptions } from '../../../Interfaces/IOptions';
import { HttpService } from 'src/app/api/http/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() options!: IOptions[];
  @Input() disabled!: Boolean;
  @Input() funcOnChange!: (any: any, http: HttpService, value: any) => void;

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

  @Output()
  onChange() {
    this.valueChange.emit(this._value);
  }
}
