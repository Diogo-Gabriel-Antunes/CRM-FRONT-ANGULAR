import { Component, OnInit } from '@angular/core';
import { LeadsService } from './leads.service';
import { IEtapaDoFunil } from 'src/app/Interfaces/IEtapaDoFunil';
import { ItensDragDrop } from './cards/cards.component';
import { IDragDrop } from 'src/app/Interfaces/IDragDrop';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit {
  etapas!: IEtapaDoFunil[];
  funilUuid!: string;
  leads!: IDragDrop[];
  color: ThemePalette = 'accent';
  checked: any = true;
  constructor(private leadsService: LeadsService) {}

  ngOnInit(): void {
    this.leadsService.getCabecalho(this.funilUuid).subscribe({
      next: (resposta) => {
        this.etapas = resposta;
      },
    });

    this.leadsService.getDragDrop(this.funilUuid).subscribe({
      next: (resposta) => {
        this.leads = resposta;
      },
    });
  }

  getLead(etapa: IEtapaDoFunil) {
    const leads = this.leads?.filter((lead) => {
      return lead.etapaUuid == etapa.uuid;
    })[0];
    return leads;
  }
  setChecked(boo: any) {
    this.checked = boo;
  }
}
