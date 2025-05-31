import type { FC } from "react";
import { Socials } from "./Socials";

export const Footer: FC = () => {
    return (
        <footer className="text-primary-foreground text-xl bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg fixed bottom-0 w-full z-50">
            <div className="container mx-auto flex items-center justify-center mt-auto gap-5 py-4 px-4">
                <h1 className="sm_xl:text-xs md:text-xs">
                    Created by @olya7me
                </h1>
                <Socials />
            </div>
        </footer>
    );
};
