import React from "react";

function FailPage() {
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
            <h1 class="block text-5xl font-bold dark:text-orange-600 sm:text-5xl ">
              Your Payment is Failed
            </h1>
            <h1 class="block text-2xl font-bold text-white"></h1>

            <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <a
                class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/home"
                target="_blank"
              >
                Go to home
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

export default FailPage;
