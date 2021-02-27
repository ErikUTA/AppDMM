import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Login } from '../models/login';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  failsLogin = 0;

  usuarios: Login = new Login;

  constructor(public alertController: AlertController, public router: Router) { }

  async logForm(usuarios) {
    if(this.usuarios.email == null && this.usuarios.password == null){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'El campo es requerido',
        buttons: ['OK']
      });

      await alert.present();
    }
    if (this.usuarios.email == 'usuario1' && this.usuarios.password == '12345') {
      if(this.usuarios.typeUser == 'admin'){
        { 
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Alert',            
            message: 'Hola admin',
            buttons: ['OK']
          });

          this.usuarios.password = null;        
          this.usuarios.email = null;        
          this.usuarios.typeUser = null;        
          await alert.present();
          this.router.navigate(['/menu-admin'])

        }
      }
      if(this.usuarios.typeUser == 'user'){
        {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Alert',            
            message: 'Hola user',
            buttons: ['OK']
          });

          await alert.present();
        }
        this.usuarios.password = null;        
        this.usuarios.email = null;        
        this.usuarios.typeUser = null;        
      }

      // {
      //   const alert = await this.alertController.create({
      //     cssClass: 'my-custom-class',
      //     header: 'Bienvenido: ' + this.usuarios.email,
      //     buttons: ['OK']
      //   });
      //   await alert.present();
      // }

      // Ruta hacia menu-admin
      

    } else {

      this.failsLogin++;

      console.log(this.failsLogin);

      {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Alert',          
          message: 'Datos erróneos',
          buttons: ['OK']
        });

        await alert.present();
      }

      if (this.failsLogin == 3) {
        {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Alert',            
            message: 'Usuario bloqueado',
            buttons: ['OK']
          });

          await alert.present();
        }
      }

    }

  }

}
