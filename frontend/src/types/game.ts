export type Game = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export type GamePage = {
    content: Game[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}