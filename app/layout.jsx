import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import React from "react";



const basker = Libre_Baskerville({ weight:"400", subsets: ['latin'], });

export const metadata = {
  title: "Pacea Lumii",
  description: "Manastirea Sfantul Ioan Botezatorul",
};

const RootLayout = ({children}) => {
  return(
    <html lang="en">
      <body>
        <div className={basker.className}>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout


