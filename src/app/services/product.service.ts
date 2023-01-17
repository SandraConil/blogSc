import { Injectable } from '@angular/core';
import {Product} from '../models/product';


//permet d'injecter mon service dans n'importe quel composant grace à @injectable. ce decorateur est tres important pour utiliser mes services
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  //je crée un composant products de type product dans un tabelau et je lui mets tous mes produits
 private products: Product[] = [  {
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
//       {
//         _id : '112',
//         name : 'Grossesse',
//         description : 'Séance à domicile lors de votre grossesse',
//         categorie : ['Adultes', 'Famille'],
//         image : 'assets/images/products/couple2.jpg',
//         prix : 15000,
//         sold_prix : 11500,
//     },
//     {
//       _id : '666',
//         name : 'Bebe',
//         description : 'Séance à domicile de votre bout de choux',
//         categorie : ['Enfant', 'Famille'],
//         image : 'assets/images/products/bebe2.jpg',
//         prix : 9500,
//         sold_prix : 8000,
//     },

//     {
//       _id : '777',
//         name : 'Enfant',
//         description : 'Séance à domicile de votre loulou',
//         categorie : ['Enfant', 'Famille'],
//         image : 'assets/images/products/enfant4.jpg',
//         prix : 9500,
//         sold_prix : 8000,
//     },
//     {
//       _id : '999',
//       name : 'Grossesse',
//       description : 'Séance à domicile lors de votre grossesse',
//       categorie : ['Adultes', 'Famille'],
//       image : 'assets/images/products/couple1.jpg',
//       prix : 15000,
//       sold_prix : 11500,
//   },
//   {
//     _id : '587',
//       name : 'Bebe',
//       description : 'Séance à domicile de votre bout de choux',
//       categorie : ['Enfant', 'Famille'],
//       image : 'assets/images/products/bebe3.jpg',
//       prix : 9500,
//       sold_prix : 8000,
//   },

//   {
//     _id : '321',
//       name : 'Enfant',
//       description : 'Séance à domicile de votre loulou',
//       categorie : ['Enfant', 'Famille'],
//       image : 'assets/images/products/enfant5.jpg',
//       prix : 9500,
//       sold_prix : 8000,
//   },
//   {
//     _id : '12354',
//     name : 'Grossesse',
//     description : 'Séance à domicile lors de votre grossesse',
//     categorie : ['Adultes', 'Famille'],
//     image : 'assets/images/products/couple3.jpg',
//     prix : 15000,
//     sold_prix : 11500,
// },
// {
//   _id : '89123',
//     name : 'Bebe',
//     description : 'Séance à domicile de votre bout de choux',
//     categorie : ['Enfant', 'Famille'],
//     image : 'assets/images/products/bebe3.jpg',
//     prix : 9500,
//     sold_prix : 8000,
// },

// {
//   _id : '1273',
//     name : 'Enfant',
//     description : 'Séance à domicile de votre loulou',
//     categorie : ['Enfant', 'Famille'],
//     image : 'assets/images/products/enfant2.jpg',
//     prix : 9500,
//     sold_prix : 8000,
// },
]

// je mets private car je veux que ca soit que dans ce service.
// si je mets public c'est que c'est assecible partout

  constructor() { }

//je crée une methode qui va nous aider à recuperer mes produits
getProducts(){
  return this.products
}

//une methode qui permet d'ajouter des produits
addProduct(product : Product){}
editProduct(_id: string,product : Product){}
}
