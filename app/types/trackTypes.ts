// Defining a TypeScript type for the given JSON structure

// Represents the structure of an external URL, specifically for Spotify
type ExternalUrl = {
  spotify: string;
};

// Represents the structure of an image object, including URL, height, and width
type Image = {
  url: string;
  height: number;
  width: number;
};

// Represents the structure of an artist object
type Artist = {
  external_urls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

// Represents the structure of an album object
type Album = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: {
    reason: string;
  };
  type: string;
  uri: string;
  artists: Artist[];
};

// Represents the structure of a track object
export type Track = {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: ExternalUrl;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from?: null;
  restrictions?: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

// Main type representing the entire structure, with a list of tracks
type TracksResponse = {
  tracks: Track[];
};
