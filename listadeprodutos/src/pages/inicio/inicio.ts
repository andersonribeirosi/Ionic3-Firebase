import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  @ViewChild('usuario') usuario;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  acesso()
  {
    this.navCtrl.push(LoginPage);
  }

  registro()
  {
    this.navCtrl.push(RegistroPage);
  }


  //ionViewDidLoad() {
    //console.log('ionViewDidLoad InicioPage');
  //}

}
