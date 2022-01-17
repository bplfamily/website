// Imports
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row"; // Layout wrapper
import { roadmapList } from "../utils/roadmap"

// Types
import type { ReactElement } from "react";

export default function Resources(): ReactElement {
  return (
    <Layout>
      <div className="bg-black py-20">
                    <h1 className="text-center mt-4">Roadmap</h1>
        <div className="container mx-auto mt-8">
          {roadmapList.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
    </Layout>
  )
}
