import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        <Head>
          <title>Create Next App</title>
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
              <div>PRICING</div>
              <div>ABOUT</div>
              <div>FAQ</div>
              <div>CAREERS</div>
            </div>
          </div>

          <button className="rounded-full gradientButton text-white py-2 px-6">
            CONTACT
          </button>
        </div>

        <div className="flex pt-5 w-3/4 h-3/4 rounded-full gradientCard">
          <div className="flex flex-col self-center pl-28 space-y-8">
            <a className="italiana  text-2xl text-8xl ">Your Dream Website</a>
            <a className="italiana  text-2xl text-2xl ">
              Lorem ipsum dolor sit, consectetur <br /> adipiscing elit.{" "}
            </a>
            <button className="italiana  rounded-full text-black border-2 border-black text-2xl py-4 w-60">
              Learn More
            </button>
          </div>
        </div>

        <div className="pt-14">
          <h1 className="italiana text-6xl font-bold">Pricing</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
