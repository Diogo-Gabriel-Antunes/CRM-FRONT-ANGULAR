import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITableSchema, PaginationOptions } from './table';
import { PageEvent } from '@angular/material/paginator';
import { format } from 'date-fns';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data!: any[];
  displayedColumns!: string[];
  @Input() tableOptions!: ITableSchema;
  @Output() selectEvent = new EventEmitter<any>();
  @Output() paginationEvent = new EventEmitter<any>();
  selected: any;
  pageEvent!: PageEvent;
  getDisplayedColumns() {
    return this.tableOptions.labelOptions.map((option) => option.label);
  }
  ngOnInit(): void {
    this.displayedColumns = this.getDisplayedColumns();
  }

  ngClassBg(element: any) {
    if (element.uuid === this.selected) {
      console.log(element);

      return 'bg-blue-200';
    } else {
      return 'bg-white';
    }
  }

  pageOptions(e: PageEvent) {
    var paginationEventDTO: PaginationOptions = {
      length: e.length,
      pageIndex: e.pageIndex,
      pageSize: e.pageSize,
    };
    this.paginationEvent.emit(paginationEventDTO);
  }

  formataDataPadraoBr(dataSemFormat: string) {
    const data = new Date(); // Obtém a data atual
    return format(data, 'dd/MM/yyyy HH:mm');
  }

  select(uuid: string) {
    this.selected = uuid;
    this.selectEvent.emit(uuid);
  }
}
