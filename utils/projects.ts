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
    "A randomised collection of 7 words, chosen from the famous speech #IHaveADream of Martin Luther King Junior",
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
    "300 out of 1501 are with the signatures in addtion to the words.",
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
    description: "201/1501 are with the signature and MLKJ picture.",
    whatToDo: [
        {
            content: "Mint Premium 1501",
            url: "#mint",
            noBlank: true,
        }
    ],
    image: "/images/cards/mintPremium.png",
};
