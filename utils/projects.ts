import { Project } from "../types/interface";

export const auction: Project = {
    name: "Pre-Mint Auction",
    description: "A set of 15 out of 1501 specially generated and deterministic pre-mint collection available for auction on Martin Luther King Jr's Day on January 17th 2022.",
    whatToDo: [
        {
            content: "Buy on Holaplex.com",
            url: "https://www.holaplex.com/"
        },
    ],
    image: "/images/cards/auction.jpeg",
    nameClasses: "text-[black] text-3xl"
};

export const mintClassic: Project = {
    name: "Classic",
    description:
    "A randomized collection of 4-7 words chosen from MLKJ's iconic speech: \"I Have A Dream\". Total supply 1200.",
    whatToDo: [
        {
            content: "Mint Classic 1501",
            url: '#mint',
            noBlank: true,
        },
    ],
    image: "/images/cards/mintClassic.png",
};

export const mintSignature: Project = {
    name: "Signature",
    description:
    "The Signature Edition contains MLKJ's signature in addition to the Classic Edition, with 5-7 words and lightly edited by hand. Total supply 200.",
    whatToDo: [
        {
            content: "Mint Signature 1501",
            url: "#mint",
            noBlank: true,
        }
    ],
    image: "/images/cards/mintSignature.png",
};

export const mintPremium: Project = {
    name: "Premium",
    description: "The Premium Edition are hand-crafted and have a supply of only 101. Thank you for supporting the project and our vision!",
    whatToDo: [
        {
            content: "Mint Premium 1501",
            url: "#mint",
            noBlank: true,
        }
    ],
    image: "/images/cards/mintPremium.png",
};
