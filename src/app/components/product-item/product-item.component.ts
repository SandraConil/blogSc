import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{

  @Input() product: Product | undefined

  // pour supprimer un item quand on clic on ajoute un outpout avec un eventemitter de angular/core pas les autres. 
  // Eventemitter permet de mettre un événement pour etre aprés écouter
  @Output() deleteProductItem: EventEmitter<Product> = new EventEmitter<Product>()

  //pour ouvrir mon modal
  @Output() displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>()
  

  constructor(){}
 
  ngOnInit(): void {}


  handleClickProduct(product: Product | undefined){
    this.displayProductViewModal.emit(product)
  }

  
 
 }