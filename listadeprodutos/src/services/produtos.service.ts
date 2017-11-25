import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProdutosService {
   /*
    notas = [
        {id: 1, titulo:'Minha nota 1', description: 'Desc Nota 1'},
        {id: 2, titulo:'Minha nota 2', description: 'Desc Nota 2'},
        {id: 3, titulo:'Minha nota 3', description: 'Desc Nota 3'}
    ]; */

    constructor (private afDB: AngularFireDatabase){

    }

    public getProdutos(){
       // return this.notas;
       return this.afDB.list('produtos');
    }

    public getProduto(id){
        //return this.notas.filter((nota) => {return nota.id == id})[0];
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