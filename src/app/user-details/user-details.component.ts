import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  defaultCountry = 'india';

  firstname:string="";
  lastname:string="";
  email: string="";
  gen:string="";
  country: string="";
  phoneNumber:number | undefined
  defaultGender = 'Female';

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]
  
  @ViewChild('myForm') form: NgForm |undefined;

  userInfoDetail(){
    console.log(this.form);


    if(this.form?.valid){

   this.router.navigate(['confirm'])

    }
    else{
      alert("Kindly fill all the Details")
    }
    
   
  
  }
}
