"use client";
import {
  fetchProfile,
  getAccessToken,
  getTracks,
  redirectToAuthCodeFlow,
} from "@/app/script";
import { RootState } from "@/store";
import { setAccessToken } from "@/store/configSlice";
import {
  fetchProfileFailure,
  fetchProfileStart,
  fetchProfileSuccess,
} from "@/store/profileSlice";
import {
  fetchTrackFailure,
  fetchTrackStart,
  fetchTrackSuccess,
} from "@/store/tracksSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const clientId = "0c36169eefbb4e00b8470069c1e6c074";
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const dispatch = useDispatch();
  console.log("code", code);
  useEffect(() => {
    const fetchData = async (clientId: string, code: string | null) => {
      if (!code) {
        redirectToAuthCodeFlow(clientId);
      } else {
        dispatch(fetchProfileStart());

        try {
          const newAccessToken = await getAccessToken(clientId, code);

          dispatch(setAccessToken(newAccessToken));
          // const { accessToken } = useSelector(
          //   (state: RootState) => state.config.accessToken
          // );
          console.log("AT ");
          const profile = await fetchProfile(newAccessToken);

          dispatch(fetchProfileSuccess(profile));
        } catch (error) {
          dispatch(
            fetchProfileFailure(
              error instanceof Error ? error.message : "Failed to fetch profile"
            )
          );
        }
      }
    };

    fetchData(clientId, code); // Call the async function
  }, [code, clientId]);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Lulling
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/tracks" className="text-gray-300 hover:text-white">
            Music
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Podcast
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            href="#"
            className="block px-2 py-1 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="#"
            className="block px-2 py-1 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About
          </Link>
          <Link
            href="#"
            className="block px-2 py-1 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Services
          </Link>
          <Link
            href="#"
            className="block px-2 py-1 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
