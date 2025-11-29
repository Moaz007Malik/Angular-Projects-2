export interface Game {
    id: number;
    name: string;
    genre: string;
}

export interface Player {
    id: number;
    name: string;
    gameLibrary: Game[];
}