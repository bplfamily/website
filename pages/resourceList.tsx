// Imports
import {
    derivativesList,
    guildsList,
    marketsList,
    resourceList,
    communityList
} from "@utils/lists"; // Lists
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/Resources.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

const resources = [

    {
        title: "Developer Tooling",
        description: "Aggregated resources built by the Loot community:",
        list: resourceList,
    },
   
];

export default function Resources(): ReactElement {
    return (
        <Layout>
            {resources.map(({ title, description, list }, i) => {
                return (
                    <div key={i} className={styles.resources}>
                        <h2>{title}</h2>
                        <p>{description}</p>

                        <ul>
                            {list.map(({ name, description, url }, i) => {
                                // For each resource, render link and description
                                return (
                                    <li key={i}>
                                        <p>
                                            <a href={url} target="_blank" rel="noopener noreferrer">
                                                {name}
                                            </a>{" "}
                        — {description}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </Layout>
    );
}
