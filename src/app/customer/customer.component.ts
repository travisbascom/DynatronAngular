import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../Models/customer';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'customer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  @Input()customer: Customer = new Customer();
  @Output() updateCustomer = new EventEmitter<Customer>();

  updateClick(): void {
    console.log('in customer.component updateClick',this.customer)
    this.updateCustomer.emit(this.customer);
  }
}
