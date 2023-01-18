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
            href="https://fonts.googleapis.com/css2?family=Italiana&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <div className="italiana text-lg pl-44 flex justify-between pt-10 pb-20 min-w-full pr-44">
          <div className="flex space-x-20 self-center">
            <div>
              <img src="Group 10.png" width={80} height={100} />
            </div>
            <div className="flex space-x-8">
              <div className="hover:underline">PRICING</div>
              <div className="hover:underline">ABOUT</div>
              <div className="hover:underline">FAQ</div>
              <div className="hover:underline">CAREERS</div>
            </div>
          </div>

          <button className="rounded-full gradientButton text-white py-4 px-12">
            CONTACT
          </button>
        </div>

        <div className="flex pt-5 w-[75vw] h-[75vh] rounded-full gradientCard">
          <div className="flex flex-col self-center pl-28 space-y-8">
            <a className="italiana  text-2xl text-8xl ">Your Dream Website.</a>
            <a className="italiana  text-2xl text-2xl ">
              Empower your business. Give it a <br /> second home, today.{" "}
            </a>
            <button className="italiana rounded-full text-black border-2 border-black text-2xl py-4 w-60 hover:bg-black hover:text-white">
              Learn More
            </button>
          </div>
        </div>

        <div className="pt-14 min-w-[75vw]">
          <h1 className="flex justify-center italiana text-6xl font-bold pb-10 pt-10">
            Pricing
          </h1>
          <div className="flex flex-row justify-between">
            <div className="flex glassy h-[60vh] w-[23vw] rounded-fuller">
              <div className="flex flex-col place-content-evenly px-16">
                <p className="text-5xl font-bold 2xl:text-6xl">$499</p>
                <p className="text-m 2xl:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>

            <div className="flex glassy h-[60vh] w-[23vw] rounded-fuller mt-24">
              <div className="flex flex-col place-content-evenly px-16">
                <p className="text-5xl font-bold 2xl:text-6xl">$749</p>
                <p className="text-m 2xl:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>

            <div className="flex glassy h-[60vh] w-[23vw] rounded-fuller mt-48">
              <div className="flex flex-col place-content-evenly px-16">
                <p className="text-5xl font-bold 2xl:text-6xl">$1249</p>
                <p className="text-m 2xl:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24">
          <h1 className="flex justify-center italiana text-6xl font-bold pb-24">
            About Our Founders
          </h1>

          <div className="flex flex-row space-x-24 justify-center pb-24">
            <Image
              src={"/Group 12.png"}
              alt="Picture of the author"
              width="900"
              height="900"
              className="relative rounded-fullest w-72 h-72 object-cover"
            />
            <Image
              src={"/jae.jpg"}
              alt="Picture of the author"
              width="900"
              height="900"
              className="relative rounded-fullest w-72 h-72 object-cover"
            />
          </div>

          <div className="flex flex-row justify-center">
            <p className="italiana text-2xl w-5/12">
              Meet Evan and Jae, the masterminds behind Nero - A
              one-stop-shop for professional, <b className="font-medium">budget-friendly</b> web design and
              development services. With extensive industry experience under
              their belts, they know the ins and outs of what small businesses
              need to succeed online. From start-ups to well-established local
              companies, Nero's team of experts will help you create a website
              that will make you stand out in your industry and attract your
              desired audience.
            </p>
          </div>
        </div>

        <div className="pt-24">
          <h1 className="flex justify-center italiana text-6xl font-bold pb-24">
            FAQ
          </h1>
          <div className="flex flex-row justify-center">
            <p className="italiana text-2xl w-5/12">
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

        <div className="pt-24 pb-48">
          <h1 className="flex justify-center italiana text-6xl font-bold pb-14">
            Careers at Nero
          </h1>
          <div className="flex flex-row justify-center">
            <p className="italiana text-2xl">Our team is currently full!</p>
          </div>
        </div>

        <div className="italiana text-lg pl-44 flex justify-between pb-10 min-w-full pr-44">
          <div className="flex space-x-20 self-center">
            <div>
              <img src="Group 10.png" width={80} height={100} />
            </div>
            <div className="flex space-x-8">
              <div>PRICING</div>
              <div>ABOUT</div>
              <div>FAQ</div>
              <div>CAREERS</div>
            </div>
          </div>

          <button className="rounded-full gradientButton text-white py-4 px-12">
            CONTACT
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
