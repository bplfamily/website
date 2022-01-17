// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row";
import { whatToGet, whatToDo, getAfterLoot, getYourCharacter, onlyLoot } from "../utils/newLists"
import Opensea from "../img/opensea.svg"
import Twitter from "../img/twitter.svg";
import ExchangeIcon from "../img/exchangeIcon2.svg";
import Discord from "../img/discord.svg";
import Telegram from "../img/telegram.svg";
// Types
import type { ReactElement } from "react";


export default function Home(): ReactElement {
  return (
    <Layout>
      <div className="mx-auto px-2 sm:px-4 text-center py-10 sm:py-20 justify-around flex flex-wrap hero-img bg-opacity-10">
        <div className="w-full sm:w-1/2">
          <div className="sm:px-4">
            <h1>1501</h1>

            <p className="text-xl sm:text-2xl text-gray-300">
The 1501 Project is a randomized collection from the famous speech "I Have a Dream" by Martin Luther King Jr. We celebrate the contributions of MLKJ in Civil Rights Movement and Freedom as the most fundamental Essence of Humanity.</p>
            <div>
              <div className="flex py-8 w-full justify-center space-x-6">
                <a
                  href="https://twitter.com/The1501Project"
                  className="self-center p-3 border border-gray-800 rounded-xl  bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Opensea className=" hover:text-gray-200  w-6 h-6 mx-2" />
                </a>
                <a
                  href="https://twitter.com/The1501Project"
                  className="self-center p-3 border border-gray-800 rounded-xl  bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Twitter className="fill-current  text-white w-6 h-6 mx-2" />
                </a>
                <a
                  href="https://twitter.com/The1501Project"
                  className="self-center p-3 border border-gray-800 rounded-xl  bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Discord className="fill-current  text-white w-6 h-6 mx-2" />
                </a>
              </div>
            </div>
        </div>
          </div>
      </div>
      
 
     
      
      <div id="start" className="bg-black  sm:py-20 py-10 pb-40 ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 ">
              <span className="uppercase sm:text-xl tracking-widest text-gray-400">Project Description</span>
              <h1 className="text-center mt-4 capitalize">Now is the time</h1>
              <p className="text-xl sm:text-2xl text-gray-400">A total of 1501 collection of 1501 NFTs, earned by the beliveres in Freedom. Doxxed team. Mint proceeds and royalties go towards social causes and promoting black art in Solana NFTs</p>
            </div>
          </div>
          {onlyLoot.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
          {whatToGet.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
     
     
    </Layout>
  );
}
