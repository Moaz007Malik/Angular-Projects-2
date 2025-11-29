import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  id: null | number = null;
  name: string = '';
  age: number = 0;
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.name = params['name'] || '';
      this.age = params['age'] ? +params['age'] : 0;
      this.email = params['email'] || '';
    });
  }
}
