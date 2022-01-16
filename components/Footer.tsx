import styles from "@styles/components/Layout.module.scss"; // Styles
import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    return (
        <div className={styles.footer}>
            <p>
                © The 1501 Project, 2022{" "}
                <a
                    href="https://github.com/lootproject/website"
                    target="_blank"
                    rel="noopener noreferrer"
                >
         
                </a>
               
            </p>
        </div>
    );
}
