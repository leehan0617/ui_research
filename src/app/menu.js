"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function Menu() {
    return (
        <Navbar position="static">
            <NavbarBrand>
                <p className="font-bold text-inherit">Title</p>    
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        공사비 계산
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link>참고자료</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}