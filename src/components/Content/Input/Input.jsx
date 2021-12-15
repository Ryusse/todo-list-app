import './Input.css'

export default function Input(props) {
  return (
    <input
      className={`input text-medium ${props.className}`}
      type={props.type}
      aria-label={props.aria}
      placeholder={props.placeholder}
    />
  )
}
