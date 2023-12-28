import React from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function PassPage() {
  const navigate = useNavigate();

  const getNextMonth = (startmonth) => {
    if (startmonth == 12) {
      return 1;
    } else {
      return startmonth + 1;
    }
  };

  const getNextYear = (startmonth, startyear) => {
    if (startmonth == 12) {
      return startyear + 1;
    } else {
      return startyear;
    }
  };
  const jwt = localStorage.getItem("jwt-token");
  const user1 = jwtDecode(jwt);
  console.log(user1.userId);
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let endmonth = getNextMonth(month);
  let year = date.getFullYear();
  let endyear = getNextYear(month, year);

  const passdate = async () => {
    try {
      const responce = await axios.put(
        `http://localhost:4000/api/users/date/${user1.userId}`,
        {
          startingDate: `${day}-${month}-${year}`,
          endingDate: `${day}-${endmonth}-${endyear}`,
        }
      );
      if (responce.status == 200) {
        navigate("/home");
      }
    } catch (e) {}
  };
  return (
    <>
      <div class="flex h-90">
        <div class="max-w-[50rem] flex flex-col mx-auto w-full h-full">
          <div class="mb-auto flex justify-center z-50 w-full py-10">
            <nav class="px-4 sm:px-6 lg:px-8" aria-label="Global">
              <a
                class="flex-none text-xl font-semibold sm:text-3xl dark:text-black"
                href="#"
                aria-label="Brand"
              >
                SLTB
              </a>
            </nav>
          </div>

          <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 class="block text-5xl font-bold dark:text-green-600 sm:text-5xl ">
              Your Payment is Successfull
            </h1>
            <h1 class="block text-2xl font-bold text-white"></h1>

            <p class="text-gray-600 dark:text-gray-400 mt-2">
              Thank you for the payment.
            </p>
            <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <button
                class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                target="_blank"
                onClick={() => passdate()}
              >
                See the Ticket
              </button>
              <a
                class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="../examples.html"
              >
                <svg
                  class="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Logout
              </a>
            </div>
          </div>

          <footer class="mt-auto text-center py-5">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p class="text-sm text-gray-500">
                © SLTB All Rights Reserved. 2023.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default PassPage;
