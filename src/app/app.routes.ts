import { Routes } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PaymentsComponent } from './payments/payments.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
{path:'',component:HouseComponent},
{path:'ContactUs',component:ContactUsComponent},
{path:'AboutUs',component:AboutUsComponent},
{path:'OurServices',component:OurServicesComponent},
{path:'Payments',component:PaymentsComponent},
{path:'Login',component:LoginComponent}


];
