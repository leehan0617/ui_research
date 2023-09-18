"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { Logo } from "./menu_logo.jsx";

export default function Menu() {
    return (
        <div className="mt-3 grid grid-row-3 grid-cols-4 gap-4">
            <div className="row-span-3">
                <Logo/>
                <span className="font-bold text-inherit">배전간선(지중) 개략공사비 자동산출</span>
            </div>
            <div></div>
            <div></div>
            <div>
                <div>공사비 계산</div>
                <div>참고자료</div>
            </div>
        </div>
    )
}