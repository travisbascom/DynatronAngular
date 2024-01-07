import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer, NewCustomer, UpdateCustomer } from '../Models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = "https://localhost:7025/api/customer";

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.apiUrl);
  }

  getCustomerById(id:number):Observable<Customer>{
    let url = this.apiUrl + '/' + id;
    return this.httpClient.get<Customer>(url);
  }

  createCustomer(customer:NewCustomer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(customer:UpdateCustomer):Observable<Customer>{
    return this.httpClient.put<Customer>(this.apiUrl, customer);
  }

  deleteCustomer(id:number):Observable<void>{
    let url = this.apiUrl + '/' + id;
    return this.httpClient.delete<void>(url);
  }
}
