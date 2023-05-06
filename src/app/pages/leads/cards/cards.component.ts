import { Component, Input } from '@angular/core';
import { DataUtilService } from 'src/app/Commons/utils/data-util.service';
import { IDragDrop } from 'src/app/Interfaces/IDragDrop';
import { ILead } from 'src/app/Interfaces/ILead';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() itens!: IDragDrop;
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  @Input() list!: IDragDrop[];
  constructor(private dataUtil: DataUtilService) {}

  formataData(data: string) {
    return this.dataUtil.dataAtualFormatada(data);
  }
  drop(event: CdkDragDrop<any>) {
    console.log(event);
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
}

export interface ItensDragDrop {
  posicao: number;
  relevancia: string;
  lead: ILead;
}
