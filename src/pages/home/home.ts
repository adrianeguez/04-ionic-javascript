import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nombre = "Hola";
  password = "";
  passwordConfirmacion = "";
  duracionToast = 3000;
  posicionToast = 'top';

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {
  }

  validarFormulario(formulario: NgForm) {
    console.log(formulario);
    if (formulario.controls.password.value === // form
      this.passwordConfirmacion) { // ngModel
      // OK!
    } else {
      this.mostrarToast('Los passwords deben de ser iguales');
      this.password = "";
      this.passwordConfirmacion = "";
    }
  }

  mostrarToast(mensaje: string) {
    const toast = this.toastCtrl
      .create({
        message: mensaje,
        duration: this.duracionToast, // 3000
        position: this.posicionToast // 'top'
      });
    toast.present();
  }

}
