import Navbar from "./components/navbar";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Sri Lanka Transpotation Board
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                The quickest
                <br className="hidden md:block" />
                way to{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  book your season ticket
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Now our systems can integrate with various payment gateways,
                offering passengers a choice of payment options such as
                credit/debit cards or digital wallets, making transactions more
                convenient.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href=""
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                onClick={() => {
                  navigate("/session-timed-out");
                }}
              >
                Register Now
              </a>
              <a
                href="/signup"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3519102/pexels-photo-3519102.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=950&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
