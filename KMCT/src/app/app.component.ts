import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

import { CardComponent } from "./card/card.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CardComponent, HomeComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KMCT INSTITUTE OF TECHNOLOGY AND MANAGEMENT';
  content="KMCT Institute of Technology and Management is a reputable educational institution located in Malappuram, dedicated to equipping students with the technological advancements of the future. The institution provides B.Tech programs across three disciplines, along with diploma programs in five fields, as well as BBA, BCA, MCA, and MBA programs, all aimed at delivering high-quality education. Positioned in Kuttippuram, Malappuram, Kerala, our institution is firmly committed to influencing the future of technology and serves as a leading light of innovation in the field of education.";
}



