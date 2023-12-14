import React from "react";
import { useNavigate } from "react-router-dom";

function Usernav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                version="1.0"
                id="bus"
              >
                <circle cx="25" cy="25" r="25" fill="#FABC3D"></circle>

                <circle cx="20" cy="20" r="3" fill="#FF0000"></circle>
                <circle cx="20" cy="20" r="3" fill="#FF0000"></circle>
                <path fill="#E2E4E5" d="M31 47h48v2H31z"></path>
                <path fill="#FFF" d="M54.124 47H31v2h21.124z"></path>
                <path
                  fill="#40C9E7"
                  d="M75 49H57v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V49z"
                ></path>
                <path
                  fill="#6FDAF1"
                  d="M35 37a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H37a2 2 0 0 0-2 2v8z"
                ></path>
                <path
                  fill="#40C9E7"
                  d="M57 37a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H59a2 2 0 0 0-2 2v8z"
                ></path>
                <path
                  fill="#6FDAF1"
                  d="M73 27H59a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.124L73.9 27.223A1.977 1.977 0 0 0 73 27z"
                ></path>
                <path
                  fill="#FBEC9A"
                  d="M72 74.044a3 3 0 0 0-3 3c0 .751.286 1.43.742 1.956l4.214-4.214A2.976 2.976 0 0 0 72 74.044zM37 74a3 3 0 0 0-3 3c0 .751.286 1.43.742 1.956l4.214-4.214A2.976 2.976 0 0 0 37 74z"
                ></path>
                <path
                  fill="#40C9E7"
                  d="M35 49h18v8H35zM35 61a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2H35v2z"
                ></path>
                <path
                  fill="#6FDAF1"
                  d="m44.124 57 8-8H35v8zM35 59v2a2 2 0 0 0 2 2h1.124l4-4H35z"
                ></path>
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                SLTB
              </span>
            </a>
            <ul className="flex items-center  space-x-8 lg:flex"></ul>
          </div>
          <ul className="flex items-center space-x-8 lg:flex">
            <li>
              <a
                href="/signup"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-800 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Logout
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usernav;
