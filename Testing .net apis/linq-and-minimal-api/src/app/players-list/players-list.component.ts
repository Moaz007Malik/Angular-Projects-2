import { Component, OnInit } from '@angular/core';
import { GamelibraryService } from '../services/gamelibrary.service';
import { Player, Game } from '../Interfaces/Data';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css'],
})
export class PlayersListComponent implements OnInit {
  players: Player[] = [];
  selectedPlayer: Player | null = null;

  newPlayer: { name: string; gameLibrary: Game[] } = {
    name: '',
    gameLibrary: [],
  };

  editMode: boolean = false;

  constructor(private gameLbService: GamelibraryService) {}

  ngOnInit() {
    this.loadAllPlayers();
  }

  loadAllPlayers() {
    this.gameLbService.getPlayers().subscribe((data) => (this.players = data));
  }

  loadPlayerById(id: number) {
    if (!id) {
      this.selectedPlayer = null;
      return;
    }
    this.gameLbService.getPlayerById(id).subscribe({
      next: (data) => {
        this.selectedPlayer = data;
        this.editMode = false;
      },
      error: () => (this.selectedPlayer = null),
    });
  }

  deletePlayer(id: number) {
    if (!id) return;
    this.gameLbService.deletePlayer(id).subscribe(() => {
      this.loadAllPlayers();
      if (this.selectedPlayer?.id === id) {
        this.selectedPlayer = null;
      }
    });
  }

  addGame() {
    this.newPlayer.gameLibrary.push({ id: 0, name: '', genre: '' });
  }

  removeGame(index: number) {
    this.newPlayer.gameLibrary.splice(index, 1);
  }

  addPlayer() {
    const filteredGames = this.newPlayer.gameLibrary.filter((game) =>
      game.name.trim()
    );

    const playerToAdd: any = {
      name: this.newPlayer.name.trim(),
      gameLibrary: filteredGames.map((game) => ({
        name: game.name,
        genre: game.genre,
      })),
    };

    this.gameLbService.addPlayer(playerToAdd).subscribe((data) => {
      this.loadAllPlayers();
      this.selectedPlayer = data;
      this.newPlayer = { name: '', gameLibrary: [] };
    });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
    if (this.selectedPlayer && this.editMode) {
      // Clone the player for editing
      this.newPlayer = {
        name: this.selectedPlayer.name,
        gameLibrary: [...this.selectedPlayer.gameLibrary],
      };
    }
  }

  addGameToSelectedPlayer() {
    this.newPlayer.gameLibrary.push({ id: 0, name: '', genre: '' });
  }

  removeGameFromSelectedPlayer(index: number) {
    this.newPlayer.gameLibrary.splice(index, 1);
  }

  updatePlayer() {
    if (!this.selectedPlayer) return;

    const updatedPlayer: Player = {
      id: this.selectedPlayer.id,
      name: this.newPlayer.name.trim(),
      gameLibrary: this.newPlayer.gameLibrary.filter((g) => g.name.trim()),
    };

    this.gameLbService
      .updatePlayer(this.selectedPlayer.id, updatedPlayer)
      .subscribe(() => {
        this.loadAllPlayers();
        this.loadPlayerById(this.selectedPlayer!.id);
        this.editMode = false;
      });
  }

  getAllGames(): Game[]{
    return this.players.reduce((acc: Game[], player: Player) => {
      return acc.concat(player.gameLibrary);
    }, []);
  }
}
