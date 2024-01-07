import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpdateCustomer } from '../Models/customer';
import { FormsModule } from '@angular/forms';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'update-customer',
  standalone: true,
  imports: [FormsModule, DatePipe, JsonPipe],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {
  @Input() updateCustomer: UpdateCustomer | undefined;
  @Output() cancelUpdate = new EventEmitter<void>();
  @Output() saveUpdate = new EventEmitter<UpdateCustomer>();
  //updatedCustomer:UpdateCustomer 
  constructor(){
    //this.updatedCustomer = { ...this.updateCustomer }; // Create a copy to avoid modifying the original
  }
  
  cancelClick(): void {
    this.cancelUpdate.emit();
  }

  saveClick(): void {
    console.log('in save click updateCustomer',this.updateCustomer)
    //console.log('in save click updatedcustomer',this.updatedCustomer)
    this.saveUpdate.emit(this.updateCustomer);
  }
}
