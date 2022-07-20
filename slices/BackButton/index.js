import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { PrismicLink } from "@prismicio/react";

const BackButton = ({ slice }) => (
    <button>
        <PrismicLink
            href={slice.primary.href}
            className="font-semibold tracking-tight text-slate-400"
        >
            <PrismicRichText field={slice.primary.buttonText} />
        </PrismicLink>

        <style jsx>{`
            button {
                text-align: center;
                background-color: sliver;
                padding: 10px 20px;
                transition: all 0.15s;
                .richtext {
                    color: black;
                }
            }

            button:hover {
                background-color: #444444;
                color: white;
            }
        `}</style>
    </button>
);

export default BackButton;
