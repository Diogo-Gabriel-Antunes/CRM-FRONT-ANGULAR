import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { HttpService } from 'src/app/api/http/http.service';
import { LeadsService } from '../leads.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateLeadsTimelineComponent } from '../dialog-create-leads-timeline/dialog-create-leads-timeline.component';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
})
export class FiltrosComponent implements OnInit {
  funilOptions!: IOptions[];
  etapasOptions!: IOptions[];
  funilUuid!: string;

  constructor(private leadsService: LeadsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.leadsService.getFunil().subscribe({
      next: (resposta) => {
        this.funilOptions = resposta;
      },
    });

    this.leadsService.getEtapaFunil(this.funilUuid).subscribe({
      next: (resposta) => {
        this.etapasOptions = resposta;
      },
    });
  }

  openDialogCreateLeads() {
    const dialogRef = this.dialog.open(DialogCreateLeadsTimelineComponent, {
      width: '800px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
