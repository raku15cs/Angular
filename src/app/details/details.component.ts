import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


public currentDate=new Date(new Date().getTime() + 86400000).toISOString().substring(0, 10);
public CheckOutMinDate=new Date()
public checkinDate:any
public checkOutDate:any


  constructor(private router:Router,
              private service:DataService) { }
  ngOnInit(): void {


   
  }

  Submit(){

let result=this.service.checkDate();
 if(result){
  this.router.navigate(['User-Details'])
 }
 else{
  console.log("No Room is available for thses dates");
  
 }
  
   console.log();
   
  }

  CheckIn(){
   

    if(this.checkOutDate<this.checkinDate){
      this.checkOutDate=null
    }
    
  }

}
