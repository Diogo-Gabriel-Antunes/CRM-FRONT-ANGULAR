import { Component, OnInit } from '@angular/core';
import { LeadsService } from './leads.service';
import { IEtapaDoFunil } from 'src/app/Interfaces/IEtapaDoFunil';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit {
  etapas!: IEtapaDoFunil[];
  funilUuid!: string;

  constructor(private leadsService: LeadsService) {}

  ngOnInit(): void {
    this.leadsService.getCabecalho(this.funilUuid).subscribe({
      next: (resposta) => {
        this.etapas = resposta;
      },
    });
  }
}
