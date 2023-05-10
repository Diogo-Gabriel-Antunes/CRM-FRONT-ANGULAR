import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ILead } from 'src/app/Interfaces/ILead';
import { LeadsService } from '../../leads.service';

@Component({
  selector: 'app-dialog-lead',
  templateUrl: './dialog-lead.component.html',
  styleUrls: ['./dialog-lead.component.scss'],
})
export class DialogLeadComponent implements OnInit {
  lead!: ILead;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { leadUuid: string },
    private leadService: LeadsService
  ) {}
  ngOnInit(): void {
    console.log(this.data.leadUuid);
    this.getLead();
  }

  getLead() {
    this.leadService.getAnotacoes(this.data.leadUuid).subscribe({
      next: (resposta) => {
        this.lead = resposta;
      },
    });
  }
}
