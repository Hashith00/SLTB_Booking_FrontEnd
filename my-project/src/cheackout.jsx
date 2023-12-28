import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function CheackOut() {
  const jwt = localStorage.getItem("jwt-token");
  const user1 = jwtDecode(jwt);
  const navigate = useNavigate();

  const location = useLocation();
  const [price, serPrice] = useState(0);
  const [startLocation, setStartLocation] = useState(location.state.start);
  const [endLocation, setEndLocation] = useState(location.state.end);

  const handlePay = async (id) => {
    try {
      const responce = await axios.post("http://localhost:4000/api/stripe", {
        items: [{ id: id, quantity: 1 }],
      });
      console.log(responce.data.url);
      window.location.href = `${responce.data.url}`;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const calculateCosts = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/users/calculatecost",
          {
            startLocation,
            endLocation,
          }
        );
        console.log(response);
        serPrice(response.data);
        //console.log(user.name);
      } catch (error) {
        console.log(error);
      }
    };
    calculateCosts();
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/users/addlocation/${user1.userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            startLocation: location.state.start,
            endLocation: location.state.end,
          }),
        }
      );
      if (response.status == 200) {
        console.log("User updated successfully");
        // ;
      } else {
        const data = await response.json();
        console.error("Error updating user:", data.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="px-4 pb-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              SLTB
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Your</span>
            </span>{" "}
            Rotute is
          </h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 sm:grid-cols-2 ">
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold"> {startLocation}</p>
              <svg
                className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-600 items-center">Starting Location</p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">{endLocation}</p>
            </div>
            <p className="text-gray-600">Ending Location</p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-0 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto"></a>
            <div className="max-w-xl mb-5 md:mx-auto text-center lg:max-w-2xl md:mb-5 content-center">
              <p className="text-base text-gray-700 md:text-lg">
                Total Payment is :
              </p>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                {price} LKR
              </h2>
            </div>
            <div>
              <button
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                onClick={() => handlePay(price / 100)}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheackOut;
