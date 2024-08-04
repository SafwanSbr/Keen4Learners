import React from 'react'

type Props = { children:React.ReactNode, className:string}

const Button = ({children, className}: Props) => {
  return (
    <div className={className}>
        <span>{children}</span>
    </div>
  )
}

export default Button