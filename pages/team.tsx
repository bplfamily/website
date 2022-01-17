// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row"; // Layout wrapper
import Discord from "../img/discord.svg"
import { Project } from "../types/interface";

// Types
import type { ReactElement } from "react";

//
// Team
//

const teamOne: Project = {
    name: "Adebayo",
    description: "GIS Analyst and a Researcher living in the Vienna. Digital Marketer. Content Writer. Handeling media, marketings and promotions.",
    whatToDo: [
        {
            content: "Twitter Handle",
            url: "https://twitter.com/Quadadey"
        },
    ],
    twitter: {
        url: "https://twitter.com/Quadadey"
    },
};

const teamTwo: Project = {
    name: "Suadey",
    description: "Web Designer and Developer. Programmer. Researcher. Graphics Designer. ML Enthusiast. Manager @ Suadey Global Services.",
    whatToDo: [
        {
            content: "LikedIn",
            url: "https://www.linkedin.com/in/suadey/"
        },
    ],
    twitter: {
        url: "https://twitter.com/Mr_Suadey"
    },
};

const teamThree: Project = {
    name: "Brianna",
    description: "Designer and community building. Experience with the community building in Solana ecosystem projects.",
    whatToDo: [
        {
            content: "Team Repo",
            url: "https://github.com/The1501Project"
        },
    ],
    github: {
        url: "https://github.com/The1501Project"
    },
};

export const teamList = [
    {
        name: "",
        description: "",
        project: [
            teamOne,
            teamTwo,
            teamThree,
        ],
    },
];


export default function Build(): ReactElement {
    return (
        <Layout>
        <div className="bg-black py-20">
        <div className="container mx-auto mt-8">
        <h1 className="text-center mt-4 capitalize">
        Team
        </h1>
        <div className="flex flex-wrap px-4 justify-center">
        {teamList.map(({ name, description, project }, i) => {
            return (
                <CardRow key={i} name={name} description={description} project={project} />
            );
        })}
                    </div>
        </div>
        </div>
        </Layout >

    )
}
