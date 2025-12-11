import React from "react"
import Nav from "./Nav"

type Props = { children: React.ReactNode}

const Layout = ({children}: Props) => {
  return (
    <>
    <Nav/>
    {/* Responsive padding-top for fixed navbar: pt-20 on mobile, pt-24 on larger screens */}
    <main className="w-full min-h-screen bg-background py-4 sm:py-6 lg:py-8 pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </main>
    </>
  )
}

export default Layout