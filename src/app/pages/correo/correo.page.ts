
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  public correo: string = '';

  constructor(private router: Router,private toastController: ToastController) { }

  ngOnInit() {
  }

  public async  ingresarPaginaValidarRespuestaSecreta(): Promise<void> {
    
    const usuario = new Usuario("", "","","","");
    const usuarioEncontrado = usuario.buscarUsuarioPorCorreo(this.correo);
    if (!usuarioEncontrado) {
      // this.toastController.create({
      //   message:'EL CORREO NO EXISTE DENTRO DE LAS CUENTAS VALIDAS DEL SISTEMA',
      //   position:"middle",
      //   duration:2000
      // }).then(e=>e.present());

      // toastController.create devuelve un objeto y uno de sus metodos es present el cual lo muestra en la pantalla
      // lo podemos usar con promesas ya que el then atrapa el valor del return lo pone en una nueva variable y se puede
      // usar su metodo, con el async y await esperamos el resultado lo asignamos a una variable y esa variable contiene los
      // metodos y ahi usamos el present()

      // const asa= await this.toastController.create({
      //   message:'EL CORREO NO EXISTE DENTRO DE LAS CUENTAS VALIDAS DEL SISTEMA',
      //   position:"middle",
      //   duration:2000
      // });
      // asa.present();

      // 2 formas de promesas diferentes

      this.router.navigate(['/incorrecto'])
    }
    else {
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: usuarioEncontrado
        }
      };
      this.router.navigate(['/pregunta'], navigationExtras);
    }
  }

  public volverInicio():void{
    this.router.navigate(['/login'])
  }

}