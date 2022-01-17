interface CardDetails {
    name: String;
    description: String;
    project: Array<Project>;
}

interface Project {
    name: String;
    nameClasses?: String;
    heading?: String;
    description: String;
    whatToDo?: Array<Content>;
    roadMap?: Content;
    website?: Content;
    contract?: Content;
    twitter?: Content;
    discord?: Content;
    opensea?: Content;
    github?: Content;
    mintPrice?: Price;
    image?: String;
    neededProject?: Project;
    logo?: String;
}

interface Content {
    content?: String,
    url?: String
    component?: JSX.Element;
    noBlank?: Boolean;
}

interface Price {
    mint?: Number
}

interface Links {
    name: String,
    path: String
}

export type {
    CardDetails,
    Project,
    Links
}
