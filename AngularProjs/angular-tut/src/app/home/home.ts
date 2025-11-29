import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { Router, RouterLink, } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  // imports: [RouterLink],
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // constructor(private router: Router) {}

  // goToProfile(name: string){
  //   this.router.navigate(['profile'], {queryParams: {name}});
  // }

  users = [
    {
      id: '1',
      name: 'Moaz',
      age: 20,
      email: 'moazmalik@gmail.com',
    },
    {
      id: '2',
      name: 'Peter',
      age: 25,
      email: 'peterparker@gmail.com',
    },
    {
      id: '3',
      name: 'Mary',
      age: 24,
      email: 'maryjane@gmail.com',
    },
    {
      id: '4',
      name: 'Gwen',
      age: 24,
      email: 'gwenstacy@gmail.com',
    },
    {
      id: '5',
      name: 'Miles',
      age: 17,
      email: 'milesmorales@gmail.com',
    },
  ];
}
