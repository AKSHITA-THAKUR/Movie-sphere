export interface MovieDetails {
    id:number,
	poster_path: string;
	title: string;
	vote_average: number;
	genres: { id: number; name: string }[];
	overview: string;
  }
  