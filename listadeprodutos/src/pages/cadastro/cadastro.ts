import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProdutosService } from '../../services/produtos.service';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  id = null;
  produto:any = {id:"", nome: "", descricao: "", valor: "", qntEstoque: ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private produtosService: ProdutosService) {
    this.id = navParams.get('id');
    if(this.id != 0)
    {
      
      produtosService.getProduto(this.id)
        .valueChanges().subscribe((produto) =>{
          this.produto = produto;
        },
          (error) => console.log(error));
    }else{
      this.produto = {id:"", nome: "", descricao: "", valor: "", qntEstoque: ""};
    }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  guardarTarefa()
  {
    this.produto.id = Date.now();
    this.produtosService.store(this.produto);
    this.produto = {id:"", nome: "", descricao: "", valor: "", qntEstoque: ""};
    alert('Criado com sucesso');
    this.navCtrl.push(HomePage);
  }

}
