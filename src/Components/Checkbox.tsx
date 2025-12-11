import React from "react"

type Props = { className?:string, text:string} &React.InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({className = "", text, ...rest}: Props) => {
  return (
    <label className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <div className="relative flex items-center justify-center">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          {...rest} 
        />
        <div className="w-5 h-5 border-2 border-border rounded-md bg-background-surface peer-checked:bg-primary peer-checked:border-primary transition-all duration-200 group-hover:border-primary-dark flex items-center justify-center">
          <svg 
            className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <span className="text-sm text-text-primary select-none">{text}</span>
    </label>
  )
}

export default Checkbox