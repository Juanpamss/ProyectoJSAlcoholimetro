import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  @Input() arregloNotificacion : any[]

  constructor() { }

  ngOnInit() {
  }

}
