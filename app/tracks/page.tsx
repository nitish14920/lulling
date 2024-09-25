"use client";
import {
  fetchTrackFailure,
  fetchTrackStart,
  fetchTrackSuccess,
} from "@/store/tracksSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTracks } from "../script";
import { RootState } from "@/store";
import { log } from "console";

const Page = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (state: RootState) => state.config.accessToken
  );

  const { loading, tracks, error } = useSelector(
    (state: RootState) => state.tracks
  );
  console.log("AccessToken ", accessToken);
  useEffect(() => {
    getAllTracks();
  }, []);

  async function getAllTracks() {
    if (!accessToken) {
      console.error("Access token is not available");
      return;
    }
    dispatch(fetchTrackStart());
    try {
      const tracks = await getTracks(accessToken);
      dispatch(fetchTrackSuccess(tracks));
      console.log("Tracks ", tracks);
    } catch (error) {
      dispatch(
        fetchTrackFailure(
          error instanceof Error ? error.message : "Failed to fetch tracks"
        )
      );
    }
  }

  return <div>{loading ? <h2>Loading......</h2> : <h2>Tracks</h2>}</div>;
};

export default Page;
