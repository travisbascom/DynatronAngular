import { Component } from '@angular/core';
import { Customer, UpdateCustomer } from '../Models/customer';
import { CustomerService } from '../Services/customer.service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerComponent } from '../customer/customer.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';

@Component({
  selector: 'customer-list',
  standalone: true,
  imports: [CustomerComponent, AddCustomerComponent, UpdateCustomerComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  customers: Customer[] = []; 
  selectedCustomer: Customer | undefined;

  constructor(private customerService:CustomerService){}
    
  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (result) => {
        this.customers = result;
        console.log(this.customers);
      }
    );
  }

  addCustomer(newCustomer: Customer): void {
    this.customerService.createCustomer(newCustomer).subscribe(
      (result) => {
        console.log('Customer added successfully:', result);
        // Refresh the customer list after a successful addition
        this.getCustomers();
      }
    );
  }

  updateCustomer(updateCustomer: Customer): void {
    console.log("in update Customer: updateCustomer ", updateCustomer);
    this.selectedCustomer = updateCustomer;
  }

  cancelUpdate(): void {
    this.selectedCustomer = undefined;
  }

  saveUpdate(updatedCustomer: UpdateCustomer): void {
    this.customerService.updateCustomer(updatedCustomer).subscribe(
      (result) => {
        console.log('Customer added successfully:', result);
        // Refresh the customer list after a successful addition
        this.getCustomers();
      }
    );
    
    console.log(`Updating customer: ${updatedCustomer.name} (ID: ${updatedCustomer.id})`);
    this.selectedCustomer = undefined;
    this.getCustomers();
  }

  
}
