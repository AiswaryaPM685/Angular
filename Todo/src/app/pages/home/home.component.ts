import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private api: ApiService) { }

  todos: any


  ngOnInit() {
    this.api.getTodo().subscribe((data: any) => {
      this.todos = data.todos


    })
  }


}
