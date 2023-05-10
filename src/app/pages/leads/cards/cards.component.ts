import { Component, Input } from '@angular/core';
import { DataUtilService } from 'src/app/Commons/utils/data-util.service';
import { IDragDrop } from 'src/app/Interfaces/IDragDrop';
import { ILead } from 'src/app/Interfaces/ILead';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { LeadsService } from '../leads.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogLeadComponent } from './dialog-lead/dialog-lead.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() itens!: IDragDrop;

  @Input() list!: IDragDrop[];
  constructor(
    private dataUtil: DataUtilService,
    private leadService: LeadsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  formataData(data: string) {
    return this.dataUtil.dataAtualFormatada(data);
  }
  drop(event: CdkDragDrop<ItensDragDrop[]>) {
    this.leadService
      .updateLeadDragDrop(event.item.data.uuid, this.itens.etapaUuid)
      .subscribe({
        next: () => {
          this.snackBar.open('Lead atualizado com sucesso', undefined, {
            duration: 2000,
          });
        },
      });
    if (event.distance.x == 0 && event.distance.y == 0) {
      console.log('oi');
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  openDialog(leadUuid: string) {
    const dialogRef = this.dialog.open(DialogLeadComponent, {
      width: '500px',
      height: '800px',
      data: {
        leadUuid: leadUuid,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

export interface ItensDragDrop {
  posicao: number;
  relevancia: string;
  lead: ILead;
}
