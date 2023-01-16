import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  isDisplayModal:boolean = false
  modalProduct: Product | undefined

  constructor(){}

  ngOnInit(): void {
    this.products = [
      {
        _id : '123',
          name : 'Grossesse',
          description : 'Séance à domicile lors de votre grossesse',
          categorie : ['Adultes', 'Famille'],
          image : 'assets/images/products/couple2.jpg',
          prix : 15000,
          sold_prix : 11500,
      },
      {
        _id : '456',
          name : 'Bebe',
          description : 'Séance à domicile de votre bout de choux',
          categorie : ['Enfant', 'Famille'],
          image : 'assets/images/products/bebe1.jpg',
          prix : 9500,
          sold_prix : 8000,
      },
  
      {
        _id : '789',
          name : 'Enfant',
          description : 'Séance à domicile de votre loulou',
          categorie : ['Enfant', 'Famille'],
          image : 'assets/images/products/enfant2.jpg',
          prix : 9500,
          sold_prix : 8000,
      },
      {
        _id : '112',
        name : 'Grossesse',
        description : 'Séance à domicile lors de votre grossesse',
        categorie : ['Adultes', 'Famille'],
        image : 'assets/images/products/couple2.jpg',
        prix : 15000,
        sold_prix : 11500,
    },
    {
      _id : '666',
        name : 'Bebe',
        description : 'Séance à domicile de votre bout de choux',
        categorie : ['Enfant', 'Famille'],
        image : 'assets/images/products/bebe2.jpg',
        prix : 9500,
        sold_prix : 8000,
    },

    {
      _id : '777',
        name : 'Enfant',
        description : 'Séance à domicile de votre loulou',
        categorie : ['Enfant', 'Famille'],
        image : 'assets/images/products/enfant4.jpg',
        prix : 9500,
        sold_prix : 8000,
    },
    {
      _id : '999',
      name : 'Grossesse',
      description : 'Séance à domicile lors de votre grossesse',
      categorie : ['Adultes', 'Famille'],
      image : 'assets/images/products/couple1.jpg',
      prix : 15000,
      sold_prix : 11500,
  },
  {
    _id : '587',
      name : 'Bebe',
      description : 'Séance à domicile de votre bout de choux',
      categorie : ['Enfant', 'Famille'],
      image : 'assets/images/products/bebe3.jpg',
      prix : 9500,
      sold_prix : 8000,
  },

  {
    _id : '321',
      name : 'Enfant',
      description : 'Séance à domicile de votre loulou',
      categorie : ['Enfant', 'Famille'],
      image : 'assets/images/products/enfant5.jpg',
      prix : 9500,
      sold_prix : 8000,
  },
  {
    _id : '12354',
    name : 'Grossesse',
    description : 'Séance à domicile lors de votre grossesse',
    categorie : ['Adultes', 'Famille'],
    image : 'assets/images/products/couple3.jpg',
    prix : 15000,
    sold_prix : 11500,
},
{
  _id : '89123',
    name : 'Bebe',
    description : 'Séance à domicile de votre bout de choux',
    categorie : ['Enfant', 'Famille'],
    image : 'assets/images/products/bebe3.jpg',
    prix : 9500,
    sold_prix : 8000,
},

{
  _id : '1273',
    name : 'Enfant',
    description : 'Séance à domicile de votre loulou',
    categorie : ['Enfant', 'Famille'],
    image : 'assets/images/products/enfant2.jpg',
    prix : 9500,
    sold_prix : 8000,
},
  
  ]
 
  }

  handleDeleteProduct(product: Product){
    this.products = this.products.filter(p => p._id !== product._id)
  }

  handledisplayProductViewModal(product: Product){
    if(product){
    this.isDisplayModal = true
    this.modalProduct =product
    }

}

handleCloseModal(){
  this.isDisplayModal = false
    this.modalProduct = undefined
}
}