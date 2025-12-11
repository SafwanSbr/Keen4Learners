import React from "react"

type Props = {
  className?:string, 
  children: React.ReactNode} 
  & React.FormHTMLAttributes<HTMLFormElement>

const Form = ({children, className = "", ...rest}: Props) => {
  return (
    <form className={`${className} flex flex-col gap-4 sm:gap-5`} action="#" {...rest}>
        {children}
    </form>
  )
}

export default Form