import React from "react"

type Props = {
  className:string, 
  children: React.ReactNode} 
  & React.FormHTMLAttributes<HTMLFormElement>

const Form = ({children, className, ...rest}: Props) => {
  return (
    <form className={`${className} d-grid gap-3`} action="#" {...rest}>
        {children}
    </form>
  )
}

export default Form