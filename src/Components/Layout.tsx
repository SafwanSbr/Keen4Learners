import React from "react"
import Nav from "./Nav"

type Props = { children: React.ReactNode}

const Layout = ({children}: Props) => {
  return (
    <>
    <Nav/>
    <main className="w-100 py-4">
        <div className="container my-2">
            {children}
        </div>
    </main>
    </>
  )
}

export default Layout