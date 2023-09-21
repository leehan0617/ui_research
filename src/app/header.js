import { Logo } from "./app_logo.jsx";

export default function Header() {
    return (
        <div className="mt-3 grid grid-row-3 grid-cols-4 gap-4">
            <div className="row-span-3">
                <Logo/>
                <span className="font-bold text-inherit">배전간선(지중) 개략공사비 자동산출</span>
            </div>
        </div>
    )
}
