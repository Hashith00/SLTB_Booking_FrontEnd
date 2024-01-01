import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function Aboutus() {
  return (
    <>
      <Navbar />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-10">
        <div className=" w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-80">
          <img
            src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-800">
              Histoty of Sri Lankan Transpotation Board
            </h2>
            <p className="mt-2 md:mt-4 text-gray-900">
              The Sri Lankan Transportation Board is a vital entity that plays a
              crucial role in facilitating efficient and sustainable
              transportation across the country.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
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
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-800">
                    Vision
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-500">
                    Our vision is to be the leading force in shaping a modern,
                    integrated, and sustainable transportation network that
                    meets the evolving needs of Sri Lanka. .
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
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
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-800">
                    Mission
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-500">
                    We are on a mission to develop and manage a comprehensive
                    transportation system that promotes economic growth,
                    environmental sustainability, and social well-being. Through
                    innovation and collaboration, we strive to deliver seamless
                    and accessible transportation services.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-800">
                    Infrastructure Development
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-500">
                    We actively participate in the planning and development of
                    transportation infrastructure, including roads, bridges, and
                    terminals. By investing in modern facilities, we aim to
                    enhance the overall transportation experience for our
                    citizens.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-800">
                    Future Plans
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-500">
                    Looking ahead, the Transportation Board envisions the
                    integration of smart transportation solutions, embracing
                    digital technologies for real-time tracking, and
                    implementing policies that prioritize the safety and comfort
                    of passengers. Our commitment to continuous improvement
                    drives us to explore innovative avenues for the benefit of
                    all Sri Lankan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full h-96 mt-6">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7236956807793!2d79.85511391421668!3d6.898008395020508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259ccda505465%3A0x2ce43339c51fc07e!2sColombo%205!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
