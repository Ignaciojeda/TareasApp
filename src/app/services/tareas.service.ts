import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private _storage: Storage | null=null;
  private tareas: string[]=[];

  constructor(private storage:Storage) {
    this.init();
   }
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }
  async agregarTarea(tarea:string){
    this.tareas.push(tarea);
    await this._storage?.set('tareas',this.tareas);
  }

  async obtenerTareas(): Promise<string[]>{
    this.tareas = (await this._storage?.get('tareas'))|| [];
    return this.tareas;
  }

}
