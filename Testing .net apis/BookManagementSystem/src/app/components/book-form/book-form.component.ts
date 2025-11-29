import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent {
  title = '';
  author = '';
  genre = '';
  year!: number;

  constructor(private bookService: BookService, private router: Router) {}

  addBook() {
    this.bookService.addBook({ title: this.title, author: this.author, genre: this.genre, year: this.year })
      .subscribe(() => this.router.navigate(['/books']));
  }
}