import { Component, OnInit } from '@angular/core';
import { VideogamesService } from './services/videogames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TestingApis';
  games: any[] = [];
  errorMessage: string = '';

  newGame = {
    id: null,
    title: '',
    releaseYear: null,
    genre: ''
  };

  isEditing = false;

  constructor(private videogamesService: VideogamesService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.videogamesService.getAllGames().subscribe({
      next: (data) => {
        this.games = data;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load games: ' + error.message;
        console.error(this.errorMessage, error);
      }
    });
  }

  getGameById(id: number) {
    this.videogamesService.getGameById(id).subscribe({
      next: (data) => {
        console.log('Game details:', data);
      },
      error: (error) => {
        this.errorMessage = 'Failed to load game details: ' + error.message;
        console.error(this.errorMessage, error);
      }
    });
  }

  onGameClick(id: number) {
    this.getGameById(id);
  }

addGame() {
  if (this.isEditing && this.newGame.id !== null) {
    this.videogamesService.updateGame(this.newGame.id, this.newGame).subscribe({
      next: (data) => {
        const index = this.games.findIndex(game => game.id === data.id);
        if (index !== -1) {
          this.games[index] = data;
        }
        this.resetForm();
      },
      error: (error) => {
        this.errorMessage = 'Failed to update game: ' + error.message;
        console.error(this.errorMessage, error);
      }
    });
  } else {
    const { title, genre, releaseYear } = this.newGame;
    this.videogamesService.addGame({ title, genre, releaseYear }).subscribe({
      next: (data) => {
        this.games.push(data);
        this.resetForm();
      },
      error: (error) => {
        this.errorMessage = 'Failed to add game: ' + error.message;
        console.error(this.errorMessage, error);
      }
    });
  }
}


  onEditClick(item: any) {
    this.newGame = { ...item };
    this.isEditing = true;
  }

  deleteGame(id: number) {
    this.videogamesService.deleteGame(id).subscribe({
      next: () => {
        this.games = this.games.filter(game => game.id !== id);
      },
      error: (error) => {
        this.errorMessage = 'Failed to delete game: ' + error.message;
        console.error(this.errorMessage, error);
      }
    });
  }

  resetForm() {
    this.newGame = {
      id: null,
      title: '',
      releaseYear: null,
      genre: ''
    };
    this.isEditing = false;
  }
}
