import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { HttpService } from 'src/app/api/http/http.service';
import { LeadsService } from '../leads.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit{
  funilOptions!:IOptions[];
  etapasOptions!:IOptions[];
  funilUuid!:string;
  constructor(private leadsService:LeadsService){}

  ngOnInit(): void {
    this.leadsService.getFunil().subscribe({
      next:(resposta)=>{
        this.funilOptions = resposta
      }
    })

    this.leadsService.getEtapaFunil(this.funilUuid).subscribe({
      next:(resposta)=>{
        this.etapasOptions = resposta
      }
    })
  }

}
