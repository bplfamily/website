// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import { build } from "../utils/newLists"
import Discord from "../img/discord.svg"
// Types
import type { ReactElement } from "react";
import {
    resourceList,
} from "@utils/lists";
export default function Build(): ReactElement {
    const resourcesIndex = [
        {
            title: "All Developer Tooling",
            description: "Aggregated resources built by the Loot community:",
            list: resourceList,
        },
    ];
    return (
        <Layout>
            <div className="bg-black py-20">
                <div className="container mx-auto mt-8">
                    
                            <h1 className="text-center mt-4 capitalize">Team</h1>
                          
                    <div className="flex flex-wrap px-4 justify-center">
                        {build.map(({ name, description, project }, i) => {
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
