// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
      <Layout>
          <div className="container mx-auto py-20 px-4 sm:w-1/2">

              <h2 className="font-display center py-10">FAQs</h2>

              <div className="my-8 group">
                  <h3 className="border border-gray-400 py-4 px-2 bg-black-800 rounded-md">
                      What is The 1501 Project?
                  </h3>
                  <p className="hidden group-hover:block border border-gray-500/50 rounded-md p-4">
                      The 1501 Project is a randomized collection of 1501 NFTs inspired
                      by the icon speech "I Have a Dream" by Martin Luther King Jr. Our
                      goal is to celebrate the contributions of the MLKJ in the Civil
                      Rights Movement and emphasize the idea of Freedom as the most
                      fundamental Essence of Humanity.
                  </p>
              </div>


              <div className="my-8 group">
                  <h3 className="border border-gray-400 py-4 px-2 bg-black-800 rounded-md">
                      What is the total supply of the project?
                  </h3>
                  <p className="hidden group-hover:block border border-gray-500/50 rounded-md p-4">
                      The total supply of the Genesis mint is 1501 split between {}
                      1200 <span className="uppercase text-[white]">Classic</span>, {}
                      200 <span className="uppercase text-[salmon]">Signature</span>, and {}
                      101 <span className="uppercase text-[gold]">Premium</span> card.
                  </p>
              </div>


              <div className="my-8 group">
                  <h3 className="border border-gray-400 py-4 px-2 bg-black-800 rounded-md">
                      How do I buy myself a 1501?
                  </h3>
                  <p className="hidden group-hover:block border border-gray-500/50 rounded-md p-4">
                      The project launched on January 17th, which is Martin
                      Luther King Jr Day. An initial of hand-picked 15/1501
                      cards were put up for auction to fund the start of the
                      project. The public minting date will be announced soon.
                  </p>
              </div>


              <div className="my-8 group">
                  <h3 className="border border-gray-400 py-4 px-2 bg-black-800 rounded-md">
                      What Solana wallets can I use?
                  </h3>
                  <p className="hidden group-hover:block border border-gray-500/50 rounded-md p-4">
                      We recommend using the Phantom wallet, but you will be
                      able to use Phantom, Sollet, or Solflare.
                  </p>
              </div>


              <div className="my-8 group">
                  <h3 className="border border-gray-400 py-4 px-2 bg-black-800 rounded-md">
                      How to check the rarity of my 1501?
                  </h3>
                  <p className="hidden group-hover:block border border-gray-500/50 rounded-md p-4">
                      We will release the rarity tool shortly after the launch.
                  </p>
              </div>


              <div className="my-8 group">
                  <h3 className="border border-gray-400 py-4 px-2 bg-black-800 rounded-md">
                      Is there an aftermarket sales royalty?
                  </h3>
                  <p className="hidden group-hover:block border border-gray-500/50 rounded-md p-4">
                      Yes. There is a 5% royalties on each sale to support the
                      project long-term and provide a free launchpad platform to
                      young artists! The royalties division is as follows:
                      <ul>
                          <li> - 3% to launchpad and black art promotion.<br/></li>
                          <li> - 2% to the dev team wallet to support long term development.</li>
                      </ul>
                  </p>
              </div>

              <div className="my-8 group">
                  <h3 className="border border-gray-400 py-4 px-2 bg-black-800 rounded-md">
                      What will be the role of the B-DAO?
                  </h3>
                  <p className="hidden group-hover:block border border-gray-500/50 rounded-md p-4">
                      The owners of the Genesis mint will have access to the
                      B-DAO, which would give them a say in the governance of
                      the project. In particular, they could:
                      <ul>
                          <li> - decide the long-term goals of the project<br/></li>
                          <li> - decide how the royalties and launchpad revenues are used<br/></li>
                          <li> - and so on.</li>
                      </ul>
                  </p>
              </div>

          </div>
      </Layout>
  );
}
