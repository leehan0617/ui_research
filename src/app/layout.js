import "./globals.css"
import { Providers } from "./providers"
import App from "./app"

export const metadata = {
  title: "설계용역비 산출",
  description: "배전간선공사(지중) 개략공사비 및 설계용역비 자동산출",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <App children={children} />
        </Providers>
      </body>
    </html>
  )
}
