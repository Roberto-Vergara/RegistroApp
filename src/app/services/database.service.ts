import { Injectable } from '@angular/core';

// es el objeto como tal que nos dara los metodos
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';




// será nuestro servicio, para usarlo tenemos que usarlo en los constructores de nuestras
// otras clases para trabajar con la inyeccion de dependencias y singleton
// se tiene que especificar en el app module y este se los dara a todas las otras clases
@Injectable({
  providedIn: 'root'
})
export class DatabaseService{


  // // no nos da shortcuts para sus metodos, hay que buscarlos en google para saber como funcionan
  db:SQLiteObject=null;
  

  constructor(private sqlite:SQLite) {
    this.sqlite.create({
      name:"data.db",location:"default"
    })
      .then(db=>this.db=db).then(db=>"se creo la maraka")
      .catch(e=>console.log("algo salío mal esta wea"));
  }

  // crear metodos para crear las otras weas


  public async crearUsuario():Promise<void>{

  }

  public async buscarUsuario():Promise<void>{

  }

  public async buscarUsuarios():Promise<void>{

  }

  public async eliminarUsuario():Promise<void>{

  }



  
}
