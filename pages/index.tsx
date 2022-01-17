// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import Layout from "@components/Layout"; // Layout wrapper

import { CardRow } from "@components/Row";
import { auctionList, mintList} from "../utils/cardLists"

import Twitter from "../img/twitter.svg";
import ExchangeIcon from "../img/exchangeIcon2.svg";
import Discord from "../img/discord.svg";
import Telegram from "../img/telegram.svg";
// Types
import type { ReactElement } from "react";


export default function Home(): ReactElement {
  return (
    <Layout>
        <div className="px-10 sm:px-20 text-center py-10 sm:py-20 h-screen justify-around flex flex-wrap hero-img bg-opacity-10">
            <div className="w-full sm:w-1/2">
                <div className="sm:px-4">
                    <h1 className="header-project">The 1501 Project</h1>

                    <p className="text-xl sm:text-2xl text-gray-300">
                        A randomized collection of 1501 NFTs from the famous speech "I
                        Have a Dream" by Martin Luther King Jr.
                    </p>
                    <br/>
                    <p className="text-xl sm:text-2xl text-gray-300">
                        We are celebrating the contributions of MLKJ in the Civil Rights
                        Movement, and Freedom as the most fundamental Essence of
                        Humanity.
                    </p>
                    <div>
                        <div className="flex py-10 w-full justify-center space-x-6">
                            <a
                                href="https://twitter.com/The1501Project"
                                className="self-center p-3 border border-gray-800 rounded-xl bg-blue-500 hover:bg-blue-400"
                                target="_blank"
                            >
                                <Twitter className="fill-current text-white w-8 h-8 mx-2" />
                            </a>
                            <a
                                href="#auction"
                                className="self-center p-5 border border-gray-800 rounded-xl bg-blue-500 hover:bg-blue-400"
                            >
                                <b>Pre-Sale Auction</b>
                            </a>
                            <a
                                href="#mint"
                                className="self-center px-10 py-5 border border-gray-800 rounded-xl  bg-black hover:bg-gray-800"
                            >
                                Minting Soon
                            </a>
                            {/* <a
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
                                <Discord className="fill-current  text-white w-6 h-6 mx-2" />
                                </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="start" className="bg-black-800 sm:py-20 py-10 pb-40 ">
            <div className="container mx-auto mt-8">
                <div className="flex justify-around">
                    <div id="auction" className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 ">
                        <span className="uppercase sm:text-xl tracking-widest text-gray-400">Auction</span>
                        <h1 className="text-center mt-4 capitalize">Now is the time</h1>
                        <p className="text-xl sm:text-2xl text-gray-400">Support us by buying our genesis set. Doxxed team and devs. For the Black community, by the Black community. Mint proceeds go towards launching the project.</p>
                        <br/>
                        <p className="text-xl sm:text-3xl text-gray-400">Initial set is going up for auction on Holaplex.</p>
                        <p className="text-xl sm:text-3xl text-gray-400"><b>January 17th.</b></p>
                    </div>
                </div>
                {auctionList.map(({ name, description, project }, i) => {
                    return (
                        <CardRow key={i} name={name} description={description} project={project} />
                    );
                })}
                <p style={{pageBreakAfter: 'always'}}>&nbsp;</p>
                <p style={{pageBreakBefore: 'always'}}>&nbsp;</p>
            </div>
        </div>

        <div id="start_2" className="bg-black sm:py-20 py-10 pb-40 ">
            <div className="container mx-auto mt-8">
                <div className="flex justify-around">
                    <div id="mint" className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 ">
                        <span className="uppercase sm:text-xl tracking-widest text-gray-400">Public Mint</span>
                        <h1 className="text-center mt-4 capitalize">Mint Opening Soon!</h1>
                        <p className="text-xl sm:text-2xl text-gray-400">A total
                        of 1501 NFTs, earned by believers in Freedom. Three sets
                        of cards:<> </>
                            <span className="uppercase text-2xl text-[white]">Classic</span><>, </>
                            <span className="uppercase text-2xl text-[salmon]">Signature</span><>, and </>
                            <span className="uppercase text-2xl text-[gold]">Premium</span>.
                            Three ways to show your support. Mint proceeds and
                            royalties go towards social causes and promoting
                            black art in the Solana NFT ecosystem.</p>
                        <br/>
                    </div>
                </div>
                {mintList.map(({ name, description, project }, i) => {
                    return (
                        <CardRow key={i} name={name} description={description} project={project} />
                    );
                })}
            </div>
        </div>

    </Layout>
  );
}
