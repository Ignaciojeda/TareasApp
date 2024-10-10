import { Component, OnInit } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  nuevaTarea: string="";
  listaTareas: string[] = [];

  constructor(private tareasService:TareasService) {}

  async ngOnInit() {
      this.listaTareas = await this.tareasService.obtenerTareas();
  }

  async agregarTarea(){
    if (this.nuevaTarea.trim() !==''){
      await this.tareasService.agregarTarea(this.nuevaTarea);
      this.listaTareas = await this.tareasService.obtenerTareas();
      this.nuevaTarea= '';
    }
  }

}
