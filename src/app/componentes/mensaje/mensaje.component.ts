import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/Servicios/Mensajes/mensajes.service';
@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  constructor(public Mensaje:MensajesService) { }

  ngOnInit(): void {
  }

}
