import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
// import { CustomerComponent } from './customer/customer.component';
// import { UpdateCustomerComponent } from './update-customer/update-customer.component';
// import { AddCustomerComponent } from './add-customer/add-customer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CustomerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DynatronAngular';
}
