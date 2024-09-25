// Defining the initial state for the Track type

import { Track } from "@/app/types/trackTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState: Track = {
//   album: {
//     album_type: "",
//     total_tracks: 0,
//     available_markets: [],
//     external_urls: {
//       spotify: "",
//     },
//     href: "",
//     id: "",
//     images: [
//       {
//         url: "",
//         height: 0,
//         width: 0,
//       },
//     ],
//     name: "",
//     release_date: "",
//     release_date_precision: "",
//     restrictions: {
//       reason: "",
//     },
//     type: "",
//     uri: "",
//     artists: [
//       {
//         external_urls: {
//           spotify: "",
//         },
//         href: "",
//         id: "",
//         name: "",
//         type: "",
//         uri: "",
//       },
//     ],
//   },
//   artists: [
//     {
//       external_urls: {
//         spotify: "",
//       },
//       href: "",
//       id: "",
//       name: "",
//       type: "",
//       uri: "",
//     },
//   ],
//   available_markets: [],
//   disc_number: 0,
//   duration_ms: 0,
//   explicit: false,
//   external_ids: {
//     isrc: "",
//     ean: "",
//     upc: "",
//   },
//   external_urls: {
//     spotify: "",
//   },
//   href: "",
//   id: "",
//   is_playable: false,
//   linked_from: null,
//   restrictions: {
//     reason: "",
//   },
//   name: "",
//   popularity: 0,
//   preview_url: "",
//   track_number: 0,
//   type: "",
//   uri: "",
//   is_local: false,
// };

const initialState: TrackState = {
  tracks: null,
  error: null,
  loading: true,
};
interface TrackState {
  tracks: Track | null;
  loading: boolean;
  error: string | null;
}

const trackSlice = createSlice({
  name: "track",
  initialState: initialState,
  reducers: {
    fetchTrackStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTrackSuccess: (state, action: PayloadAction<Track>) => {
      state.tracks = action.payload;
      state.loading = false;
    },
    fetchTrackFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTrackFailure, fetchTrackStart, fetchTrackSuccess } =
  trackSlice.actions;

export default trackSlice.reducer;
