type AnimeAiringDate = {
  from: string; // ISO date string
  to: string;
  prop: {
    from: { day: number; month: number; year: number };
    to: { day: number; month: number; year: number };
    string: string;
  };
  string: string;
};

type BroadCastType = {
  day: string;
  time: string;
  timezone: string;
  string: string;
};

type GenreType = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type DemographicType = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type LicensorsType = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type ImageType = {
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
};

type TrailerType = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
  };
};
export type RelationEntry = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};
export type RelationsType = {
  relation: string;
  entry: RelationEntry[];
};
export type AnimeDatatype = {
  mal_id: number;
  url: string;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  titles: { type: string; title: string }[];
  synopsis: string;
  background: string;
  images: ImageType;
  trailer: TrailerType;
  aired: AnimeAiringDate;
  airing: boolean;
  approved: boolean;
  broadcast: BroadCastType;
  demographic: DemographicType[];
  duration: string;
  episodes: number;
  explicit_genres: GenreType[];
  favorites: number;
  genres: GenreType[];
  licensors: LicensorsType[];
  members: number;
  popularity: number;
  producers: LicensorsType[];
  rank: number;
  rating: string;
  score: number;
  scored_by: number;
  season: string;
  source: string;
  status: string;
  studios: LicensorsType[];
  themes: GenreType[];
  type: string;
  year: number;
  relations: RelationsType[];
};

export type PaginationInfo = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
};

export type AnimeApiReturn = {
  data: AnimeDatatype[];
  pagination: PaginationInfo;
};
