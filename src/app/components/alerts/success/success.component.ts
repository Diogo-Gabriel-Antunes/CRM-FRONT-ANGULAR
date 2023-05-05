import { Component, Inject, Input } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent {
  mensagem = this.data.mensagem;
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { mensagem: string }
  ) {}
}
