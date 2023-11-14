import "./globals.css"
import { Providers } from "./providers"
import Header from "./header"

export const metadata = {
  title: "설계용역비 산출",
  description: "배전간선공사(지중) 개략공사비 및 설계용역비 자동산출",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <div className="mr-2 ml-2">
            <Header/>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
