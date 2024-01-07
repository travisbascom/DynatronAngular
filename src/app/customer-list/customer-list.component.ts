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
  lastUpdateCustomerId: any;

  constructor(private customerService:CustomerService){}
    
  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.lastUpdateCustomerId = sessionStorage.getItem('lastUpdatedCustomerId')
    this.customerService.getCustomers().subscribe(
      (result) => {
        this.customers = result;
        console.log(this.customers);
      }
    );
  }

  addedCustomer(): void {
     this.getCustomers();
  }

  updateCustomer(updateCustomer: Customer): void {
    this.selectedCustomer = updateCustomer;
  }

  cancelUpdate(): void {
    this.selectedCustomer = undefined;
  }

  saveUpdate(updatedCustomer: UpdateCustomer): void {
    let id: string = '';
    if(updatedCustomer.id){
      id = updatedCustomer.id.toString()
    }
    sessionStorage.setItem('lastUpdatedCustomerId', id);
    this.selectedCustomer = undefined;
    this.getCustomers();
  }
}
