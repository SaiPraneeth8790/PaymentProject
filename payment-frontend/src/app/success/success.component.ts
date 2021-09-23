import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  receiver:any;
  amount:any;
  customer:any;
  constructor(private http:HttpClient,private router:Router) { 
    let response= this.http.get("http://localhost:8080/customer/"+localStorage.getItem("customerid"));
      response.subscribe((data)=>this.customer=data);
    this.receiver=localStorage.getItem("receiver");
    this.amount=localStorage.getItem("amount");
    
  }

  ngOnInit(): void {
  }
  goDash(){
    this.router.navigate(['dashboard'])
  }

}
