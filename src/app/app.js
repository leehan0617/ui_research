"use client"

import { RecoilRoot } from "recoil";
import Header from "./header";

export default function App({ children }) {
    return (
        <RecoilRoot>
            <div className="container mx-auto">
                <Header />
                {children}
            </div>
        </RecoilRoot>
    )
}