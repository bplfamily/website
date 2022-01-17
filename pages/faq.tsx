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
        <h2>FAQs</h2>

        {/* What is loot ? */}
        <div className="my-8">
          <h3>What is 1501?</h3>
          <p>
            
The 1501 Project is a randomized collection from the famous speech "I Have a Dream" by Martin Luther King Jr.  
            <a
              href="https://twitter.com/dhof/status/1431316631934967815"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            Our goal is to celebrate the contributions of the MLKJ in the Civil Rights Movement and emphasize the idea of Freedom as the most fundamental Essence of Humanity.
          </p>
 
        </div>

      

        {/* Can I build with loot? */}
        <div className="my-8">
          <h3>What is the total supply of the project?</h3>
          <p>
           1501 NFTs.
          </p>
        </div>

        {/* Am I priced out of loot? */}
        <div className="my-8">
          <h3>How do I buy myself a 1501?</h3>
          <p>
           The project launch is on 17th Jan, on MLKJ's birthday. The minting date is to be announced soon.
          </p>
        </div>


<div className="my-8">
          <h3>What Solana wallets can I use?</h3>
          <p>
   We recommend using the Phantom wallet. But you will be able to use Phantom, Sollet, or Solflare.
          </p>
        </div>

 {/* Am I priced out of loot? */}
        <div className="my-8">
          <h3>How to check the rarity of my 1501?</h3>
          <p>

We will release the rarity tool shortly after the launch.  

     </p>
        </div>
        
        {/* How do I value loot bags? */}
        <div className="my-8">
          <h3>Is there an aftermarket sales royalty?</h3>
          <p>
            Yes. There is a 5% royalties on each sale to support the project long-term and provide a free launchpad platform to young artists! The royalties division is as follows

          </p>
          <p>
          
          <ul>
  <li> - 3% to launchpad and black art promotion <br/></li>
  <li> - 2% to the dev team wallet to support long term development</li>
</ul>
  
          </p>
        </div>
      </div>
    </Layout>
  );
}
