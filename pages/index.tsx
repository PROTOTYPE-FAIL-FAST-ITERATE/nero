import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// TODO
// - USE VIEWPORT VALUES FOR MORE RESPONSIVENESS
//CSS UNITS: https://www.w3schools.com/css/css_units.asp
// PADDING IS INNER SPACING FOR CHILD ELEMENTS -> DECLARE IN PARENT
// MARGIN IS OUTER SPACING FOR PARENT -> DECLARE IN PARENT

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <Head>
          <title>Nero - Build your next home</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="inter font-semibold text-xs sm:text-lg pl-44 flex justify-between pt-10 pb-10 sm:pb-20 min-w-full pr-44">
          <div className="flex sm:space-x-20 self-center">
            <div>
              <img src="Group 10.png" width={80} height={100} />
            </div>
            <div className="flex space-x-4 sm:space-x-8">
              <div className="hover:underline">Pricing</div>
              <div className="hover:underline">About</div>
              <div className="hover:underline">FAQ</div>
              <div className="hover:underline">Careers</div>
            </div>
          </div>

          <button className="inter font-semibold rounded-full bg-black text-white py-2 px-4 sm:px-12 sm:py-4 ml-8">
            Contact
          </button>
        </div>

        <div className="flex pt-5 w-[85vw] h-[75vh] sm:w-[75vw] rounded-full text-white gradientCard">
          <div className="flex flex-col self-center sm:pl-28 space-y-8">
            <a className="inter  font-bold text-center sm:text-left text-5xl sm:text-8xl">
              Your Dream Website.
            </a>
            <a className="inter font-medium text-l text-center sm:text-left sm:text-2xl sm:ml-6">
              Empower your business. Give it a <br /> second home, today.{" "}
            </a>
            <div className="flex justify-center sm:justify-start">
              <button className="inter font-semibold rounded-full text-white border-2 border-white text-l sm:text-xl sm:ml-6 py-3 sm:py-4 w-44 sm:w-52 hover:bg-white hover:text-black">
                Our Portfolio
              </button>
            </div>
          </div>
        </div>

        <div className="pt-36 sm:pt-44 min-w-full pb-44">
          <div className="strip h-[200vh] sm:h-1150px" />
          <a className="inter font-semibold flex justify-center italiana text-3xl sm:text-6xl text-white pb-16 sm:pb-10 pt-16 sm:pt-24">
            Pricing
          </a>

          <div className="flex flex-col sm:flex-row place-items-center sm:justify-center sm:space-x-8 gap-y-12 sm:gap-y-0">
            <div className="flex glassy h-[50vh] w-[80vw] sm:h-[60vh] sm:w-[23vw] ">
              <div className="flex flex-col place-content-evenly px-16">
                <p className="inter text-3xl font-bold sm:text-6xl">$799</p>
                <p className="inter font-light text-sm sm:text-xl">
                  Delivery Time <br></br>
                  - Under 2 weeks Single landing page.
                </p>
              </div>
            </div>

            <div className="flex glassy h-[50vh] w-[80vw] sm:h-[60vh] sm:w-[23vw]  sm:mt-24">
              <div className="flex flex-col place-content-evenly px-16">
                <p className="inter text-3xl font-bold sm:text-6xl">$1199</p>
                <p className="inter font-light text-sm sm:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>

            <div className="flex glassy h-[50vh] w-[80vw] sm:h-[60vh] sm:w-[23vw]  sm:mt-48">
              <div className="flex flex-col place-content-evenly px-16">
                <p className="inter text-3xl font-bold sm:text-6xl">$1749</p>
                <p className="inter font-light text-sm sm:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-52">
          <a className="inter font-semibold flex justify-center text-center text-3xl sm:text-6xl pb-12 sm:pb-24">
            About Our Founders
          </a>

          <div className="flex flex-row space-x-8 sm:space-x-24 justify-center pb-12 sm:pb-24">
            <Image
              src={"/Group 12.png"}
              alt="Picture of the author"
              width="900"
              height="900"
              className="relative rounded-fullest w-32 sm:w-72 sm:h-72 object-cover"
            />
            <Image
              src={"/jae.jpg"}
              alt="Picture of the author"
              width="900"
              height="900"
              className="relative rounded-fullest w-32 sm:w-72 sm:h-72 object-cover"
            />
          </div>

          <div className="flex flex-row justify-center">
            <p className="inter font-light text-l sm:text-2xl w-9/12 sm:w-5/12">
              Meet Evan and Jae, the masterminds behind Nero - A one-stop-shop
              for professional,{" "}
              <b className="text-purple-600">budget-friendly</b> web design and
              development services. With extensive industry experience under
              their belts, they know the ins and outs of what small businesses
              need to <b className="text-purple-600">succeed online</b>. From
              start-ups to well-established local companies, Nero's team of
              experts will help you create a website that will make you{" "}
              <b className="text-purple-600">stand out</b> in your industry and
              attract your desired audience.
            </p>
          </div>
        </div>

        <div className="pt-12 sm:pt-24">
          <h1 className="inter font-semibold flex justify-center italiana text-3xl sm:text-6xl pb-12 sm:pb-24">
            FAQ
          </h1>
          <div className="flex flex-row justify-center">
            <p className="inter font-light text-l sm:text-2xl w-9/12 sm:w-5/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

        <div className="pt-12 sm:pt-24 pb-32 sm:pb-48">
          <h1 className="inter font-semibold flex justify-center italiana text-3xl sm:text-6xl pb-12 sm:pb-14">
            Careers at Nero
          </h1>
          <div className="flex flex-row justify-center">
            <p className="inter font-light text-l sm:text-2xl">
              Our team is currently full!
            </p>
          </div>
        </div>

        <div className="italiana text-sm sm:text-lg pl-44 flex justify-between sm:pt-10 pb-7 sm:pb-10 min-w-full pr-44">
          <div className="flex sm:space-x-20 self-center">
            <div>
              <img src="Group 10.png" width={80} height={100} />
            </div>
            <div className="inter font-light flex space-x-5 sm:space-x-8">
              <div>Pricing</div>
              <div>About</div>
              <div>FAQ</div>
              <div>Careers</div>
            </div>
          </div>

          <button className="inter font-semibold rounded-full gradientButton text-white py-1.5 px-3.5 sm:px-12 sm:py-4 ml-4">
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
