import styles from "@styles/components/Layout.module.scss"; // Styles
import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    return (
        <div className="py-[20px] text-center text-[#838383]">
            <p className="text-xl">
                © The 1501 Project, 2022{" "}
            </p>
            <p className="text-xs">
                <a
                    href="https://github.com/lootproject/website"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Website credits: Loot
                </a>
            </p>
        </div>
    );
}
