import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';  
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  url:any;
  alltransactions:any;
  constructor(private router: Router,private http:HttpClient ) {
    
    this.url="http://localhost:8080/transaction/"+localStorage.getItem('customerid');
    
    
  }  
    onSubmit() {  
        this.router.navigate(['/dashboard'])  
    } 
    tid=0;
    tidIncrement(tid:any){
      this.tid=this.tid+1;
    } 
  ngOnInit(){
    let response= this.http.get(this.url);
    response.subscribe((data)=>this.alltransactions=data);
    console.log(this.alltransactions);
  }
}