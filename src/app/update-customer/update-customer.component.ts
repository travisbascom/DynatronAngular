import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpdateCustomer } from '../Models/customer';
import { FormsModule } from '@angular/forms';
import { DatePipe, JsonPipe } from '@angular/common';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'update-customer',
  standalone: true,
  imports: [FormsModule, DatePipe, JsonPipe],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {
  @Input() updateCustomer: UpdateCustomer = new UpdateCustomer;
  @Output() cancelUpdate = new EventEmitter<void>();
  @Output() saveUpdate = new EventEmitter<UpdateCustomer>();
  updatedCustomer: UpdateCustomer = new UpdateCustomer();
  constructor(private customerService:CustomerService){}
  
  ngOnInit():void{
     this.updatedCustomer = { ...this.updateCustomer }; // Create a copy to avoid modifying the original
  }
  
  cancelClick(): void {
    this.cancelUpdate.emit();
  }

  saveClick(): void {
    this.customerService.updateCustomer(this.updatedCustomer).subscribe(
      (result) => {
        this.saveUpdate.emit(this.updateCustomer);
      }
    );
  }
}
