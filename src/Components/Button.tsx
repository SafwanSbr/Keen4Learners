import React from 'react'

type Props = { children:React.ReactNode, className?:string} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children, className = "", ...rest}: Props) => {
  // Default modern button styles - can be overridden with className
  const baseStyles = "w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-soft hover:bg-primary-dark hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
  
  return (
    <button className={`${baseStyles} ${className}`} {...rest}>
        {children}
    </button>
  )
}

export default Button