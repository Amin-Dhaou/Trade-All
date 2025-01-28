import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import {RegisterComponent} from "./register/register.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {ContactComponent} from "./contact/contact.component";
import {ProfileComponent} from "./profile/profile.component";
import {ChatComponent} from "./chat/chat.component";
import {PreviewComponent} from "./preview/preview.component";
import {MarketplaceComponent} from "./marketplace/marketplace.component";
import {AboutComponent} from "./about/about.component";
import {FeaturesComponent} from "./features/features.component";
import {AddComponent} from "./add/add.component";
import {NotificationComponent} from "./notification/notification.component";
import {LogoutComponent} from "./logout/logout.component";
import {DonateComponent} from "./donate/donate.component";

export const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'forget-password',component: ForgetPasswordComponent},
  {path:'register',component: RegisterComponent},
  {path:'main-page',component: MainPageComponent},
  {path:'contact', component:ContactComponent},
  {path:'profile', component:ProfileComponent},
  {path:'chat', component:ChatComponent},
  {path:'preview',component:PreviewComponent},
  {path:'marketplace' , component:MarketplaceComponent},
  {path:'about' , component:AboutComponent},
  {path:'features', component:FeaturesComponent},
  {path:'add' , component:AddComponent},
  {path:'notification', component:NotificationComponent},
  {path:'logout' , component:LogoutComponent},
  {path:'login' , component:LoginComponent},
  {path:'donate' , component:DonateComponent},

];
