import { Project } from "../types/interface";


export const auction: Project = {
    name: "Pre-Mint Auction",
    description: "Deterministically generated 15/1501 special preminted collection will be availble for the auction on the MLK's Day on Monday 17th Jan 2022.",
    whatToDo: [
        {
            content: "Buy on Holaplex.com",
            url: "https://www.Holaplex.com/"
        },
    ],
    image: "/lootheader.jpeg",
    nameClasses: "text-[black] text-3xl"
};

export const mintClassic: Project = {
    name: "Classic",
    description:
    "A randomised collection of 7 words, chosen from the famous speech #IHaveADream of Martin Luther King Junior",
    whatToDo: [
        {
            content: "Mint Classic 1501",
            url: 'https://the1501project.com/'
        },
        // {
        //   content: "View your sLoot",
        //   component: <SyntheticLoot />
        // }
    ],


    image: "/syntheticheader.png"
};

export const mintSignature: Project = {
    name: "Signature",
    description:
    "300 out of 1501 are with the signatures in addtion to the words.",
    whatToDo: [
        {
            content: "Mint Signature 1501",
            url: "https://the1501project.com/"
        }
    ],

    image: "/mlootheader.png"
};

export const mintPremium: Project = {
    name: "Premium",
    description: "201/1501 are with the signature and MLKJ picture.",
    whatToDo: [
        {
            content: "Mint Premium 1501",
            url: "https://the1501project.com/"
        }
    ],

    image: "/genesis.png",
};
