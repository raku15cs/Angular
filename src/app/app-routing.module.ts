import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent  },
  {path:"Details",component:DetailsComponent  },
  {path:"User-Details",component:UserDetailsComponent  },
  {path:"confirm",component:ThankyouComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
