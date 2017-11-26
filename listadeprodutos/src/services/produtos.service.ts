import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProdutosService {

    constructor (private afDB: AngularFireDatabase){

    }

    public getProdutos(){
       return this.afDB.list('produtos');
    }

    public getProduto(id){
        return this.afDB.object('produtos/' + id);
    }

    public store(produto)
    {
        this.afDB.database.ref('produtos/' + produto.id).set(produto);
    }

    public remover(id)
    {
        this.afDB.database.ref('produtos/'+id).remove();
    }
}