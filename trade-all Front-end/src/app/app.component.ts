import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutComponent,FeaturesComponent, LoginComponent,MarketplaceComponent,LoginComponent,DonateComponent, ForgetPasswordComponent ,PreviewComponent,LogoutComponent, ChatComponent, RegisterComponent,NotificationComponent, MainPageComponent , AddComponent,ContactComponent, ProfileComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void{
    const newFavicon = 'assets/icon.png';
    const link: any = document.querySelector('link[rel="icon"]');
    link.href = newFavicon ;
  }
}
