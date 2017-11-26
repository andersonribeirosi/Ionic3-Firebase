import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  @ViewChild('usuario') usuario;
  @ViewChild('senha') senha;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fireAuth: AngularFireAuth,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  cadastro()
  {
    this.fireAuth.auth.createUserWithEmailAndPassword(this.usuario.value, this.senha.value)
    .then(data => {
      console.log(data);
      this.alert('Registrado com Sucesso');
  })
  .catch( error => {
    console.log(error);
  });
    console.log(this.usuario.value, this.senha.value);
  }

}
