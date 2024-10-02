export interface CurrentlyPlaying {
  is_playing: boolean;
  item?: {
    album: {
      images: {
        height: number;
        url: string;
        width: number;
      }[];
    };
    artists: {
      name: string;
    }[];
    external_urls: {
      spotify: string;
    };
    name: string;
  };
}

export interface TopTracks {
  success: boolean;
  items?: {
    album: {
      images: {
        height: number;
        url: string;
        width: number;
      }[];
    };
    artists: {
      name: string;
    }[];
    external_urls: {
      spotify: string;
    };
    name: string;
  }[];
}

export interface TopArtists {
  success: boolean;
  items?: {
    external_urls: {
      spotify: string;
    };
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
  }[];
}
