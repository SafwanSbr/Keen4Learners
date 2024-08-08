import React from 'react'

type Props = { children:React.ReactNode, className:string} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children, className, ...rest}: Props) => {
  return (
    <button className={className} {...rest}>
        {children}
    </button>
  )
}

export default Button