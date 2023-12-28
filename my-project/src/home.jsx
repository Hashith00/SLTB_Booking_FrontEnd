import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Usernav from "./components/usernav";

export const Home = () => {
  const jwt = localStorage.getItem("jwt-token");
  const user1 = jwtDecode(jwt);
  console.log(user1.userId);

  const [user, setuser] = useState([]);

  useEffect(() => {
    const fechdata = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/users/${user1.userId}`
        );
        setuser(res.data);
        //console.log(user.name);
      } catch (error) {
        console.log(error);
      }
    };
    fechdata();
  }, []);

  return (
    <>
      <Usernav />
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-black">
              Hello <span className="text-purple-700">{user.name} !</span>
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-400">
              Your Season tickets
            </p>

            {user.endLocation == null && (
              <div className="mt-5 grid gap-3 w-full sm:inline-flex">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-purple-700 text-white hover:bg-purple-800 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/booking"
                >
                  Book A Season Ticket
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            )}
            {user.endLocation != null &&
              ((
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700"></h5>
              ),
              (
                <div>
                  <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700"></h5>
                  <a
                    href="/booking"
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src="https://images.pexels.com/photos/5225420/pexels-photo-5225420.jpeg?auto=compress&cs=tinysrgb&w=150&h=350&dpr=2"
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Ticket {user.startLocation} to {user.endLocation}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        This ticket is issued by the SLTB for seasonla
                        transpotation. This is vaild till {user.endingDate}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
          </div>

          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
              alt="Image Description"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
