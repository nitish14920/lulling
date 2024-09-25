"use client";
import { RootState } from "@/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector(
    (state: RootState) => state.profile
  );

  console.log("Profile ", profile);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {" "}
          <h1>Display your Spotify profile data</h1>
          <section id="profile">
            <h2>
              Logged in as <span id="displayName">{profile?.display_name}</span>
            </h2>
            <span id="avatar"></span>
            <ul>
              <li>
                User ID: <span id="id">{profile?.id}</span>
              </li>
              <li>
                Email: <span id="email">{profile?.email}</span>
              </li>
              <li>
                Spotify URI:{" "}
                <a id="uri" href="#">
                  {profile?.uri}
                </a>
              </li>
              <li>
                Link: <a id="url" href="#"></a>
              </li>
              <li>
                Profile Image: <span id="imgUrl">{8}</span>
              </li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default Main;
