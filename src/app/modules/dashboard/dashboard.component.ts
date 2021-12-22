import { Component, OnInit } from '@angular/core';
import { CambioService } from 'src/app/shared/services/cambio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  display:boolean;

  constructor(private _cambioService:CambioService) { 
    this.display=false
  }

  ngOnInit(): void {
    this._cambioService.getDisplay().subscribe(data=>this.display=data)
  }

}
