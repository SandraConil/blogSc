import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  isDisplayModal: boolean = false
  modalProduct: Product | undefined
toto : boolean =false

//je lui injecte mon service de mes produits donc ca se fait dans le constructor en lui mettant n'importe quel nom et je lui met un type ProductService et voila là c'est injecter. Jevais avoir sur ma page tout mes produits seront partis donc maintenant dans ngOnInit je dois lui mettre this.produtService. et là on ne me propose pas ma methode car dans mon fichier services/product.services j'ai private donc je dois mettre getProducts pour récuperer mees produits avec les parenthese car c'est une méthode.
  constructor(private productService : ProductService ){}

  ngOnInit(): void {
    this.products = this.productService.getProducts()
   }

  handleDeleteProduct(product: Product){
    this.products = this.products.filter(p => p._id !== product._id)
  }

  handledisplayProductViewModal(product: Product){
    if(product){
    this.isDisplayModal = true
    this.modalProduct = product
    }

}

handleCloseModal(){
  this.isDisplayModal = false
    this.modalProduct = undefined
}

afficheModale(){
  //si toto est vrai alors j'affiche ma modale sinon je ne l'affiche pas
this.toto = !this.toto
}

}