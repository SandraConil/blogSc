import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-modal-product-view',
  templateUrl: './modal-product-view.component.html',
  styleUrls: ['./modal-product-view.component.css']
})
export class ModalProductViewComponent implements OnInit {

  @Input() product: Product | undefined
  @Output() close : EventEmitter<string> = new EventEmitter<string>()

  // pour fermer ma modale
 @Output()fermeModal :EventEmitter<boolean> = new EventEmitter()
  

  constructor(){}

  ngOnInit(): void {
    
  }

  closeModal(){
    this.fermeModal.emit(false)
  }

}
