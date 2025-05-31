import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const icons = [
    { id: 1, icon: "github", path: "https://github.com/Olya7me" },
    { id: 2, icon: "instagram", path: "https://instagram.com/_gumenyuk_olga_" },
    { id: 3, icon: "vk", path: "https://vk.com/ogumenyuk98" },
    { id: 4, icon: "telegram", path: "https://t.me/olya7me" },
];

export const Socials = () => {
    return (
        <ul className="flex justify-center gap-5">
            {icons.map(({ id, icon, path }) => (
                <li key={id}>
                    <a href={path} target="_blank" rel="noopener noreferrer">
                        <i className={`fab fa-${icon}`} aria-hidden="true" />
                    </a>
                </li>
            ))}
        </ul>
    );
};
