import React from "react"

type Props = { text:string} &React.InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({text, ...rest}: Props) => {
  return (
    <label>
        <input type="checkbox" {...rest} />{text}
    </label>
  )
}

export default Checkbox