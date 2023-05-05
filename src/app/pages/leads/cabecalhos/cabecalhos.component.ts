import { Component, Input } from '@angular/core';
import { IEtapaDoFunil } from 'src/app/Interfaces/IEtapaDoFunil';

@Component({
  selector: 'app-cabecalhos',
  templateUrl: './cabecalhos.component.html',
  styleUrls: ['./cabecalhos.component.scss'],
})
export class CabecalhosComponent {
  @Input() etapaDoFunil!: IEtapaDoFunil;
}
