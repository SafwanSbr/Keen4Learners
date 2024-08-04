import React from "react"

type Props = { className:string, text:string} &React.InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({className, text, ...rest}: Props) => {
  return (
    <label className={className}>
        <input type="checkbox" {...rest} />{text}
    </label>
  )
}

export default Checkbox