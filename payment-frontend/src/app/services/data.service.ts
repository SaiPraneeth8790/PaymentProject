import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class DataService {

    private transferTypeList:any;
    private messageCodeList: any;
    constructor(private http:HttpClient) {
        
    }
     getDataFromApi(url:string){
        return this.http.get(url);
    }  
    getmessageCodeList(){
        return this.messageCodeList;
    }
    gettransferTypeList(){
        return this.transferTypeList;
    }
}
