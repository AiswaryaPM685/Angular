import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './unit/navbar/navbar.component';
import { FooterComponent } from './unit/footer/footer.component';
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from './pages/home/home.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ang';
}
