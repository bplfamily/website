// Imports
import { default as HTMLHead } from "next/head"; // Meta
import React, { ReactElement, useState } from 'react';

export function Head(): ReactElement {
    return (
        <HTMLHead>
            {/* Primary Meta Tags */}
            <title>The 1501 Project</title>
            <meta name="title" content="1501" />
            <meta
                name="description"
                content="The 1501 Project is a collection inspired by MLKJ's iconic speech."
            />

            {/* OG + Faceook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.the1501project.com/" />
            <meta property="og:title" content="1501" />
            <meta
                property="og:description"
                content="The 1501 Project is a collection inspired by MLKJ's iconic speech."
            />
            <meta property="og:image" content="https://the1501project.com/meta.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.the1501project.com/" />
            <meta property="twitter:title" content="The 1501 Project" />
            <meta
                property="twitter:description"
                content="The 1501 Project is a collection inspired by MLKJ's iconic speech."
            />
            <meta property="twitter:image" content="https://the1501project.com/meta.png" />

            {/* Font */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Inconsolata:wght@300&display=swap"
                rel="stylesheet"
            />

        </HTMLHead>
    );
}
