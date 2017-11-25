import { ProdutosService } from '../../services/produtos.service';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos = [];
  id = null;

  constructor(
    private navCtrl: NavController, 
    private produtosService: ProdutosService, 
    private nav: NavController) {

      produtosService.getProdutos().valueChanges().subscribe((produtos) =>{
            this.produtos = produtos;
          }),
          (error) => console.log(error);
  }

  verDetalhe(id)
  {
    this.nav.push(DetalhesPage, {id: id});
  }

  criarTarefa()
  {
    this.nav.push(DetalhesPage, {id: 0});
  }

}
