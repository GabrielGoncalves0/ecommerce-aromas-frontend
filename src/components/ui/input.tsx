import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  multiline?: boolean
}

const Input = ({ multiline, ...props }: InputProps) => {
  if (multiline) {
    return <textarea {...props as any} />
  }
  return <input {...props} />
}

export default Input
