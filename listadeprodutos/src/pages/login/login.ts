import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('usuario') usuario;
  @ViewChild('senha') senha;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fireAuth: AngularFireAuth,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  login()
  {
    this.fireAuth.auth.signInWithEmailAndPassword(this.usuario.value, this.senha.value)
    .then(data => {
      console.log(data, this.fireAuth.auth.currentUser);
      this.alert('Logado com Sucesso!');
      this.navCtrl.setRoot(HomePage);
    })
    .catch(error => {
      console.log(error);
      this.alert(error.message);
    })
    console.log(this.usuario.value, this.senha.value);
  }

}
