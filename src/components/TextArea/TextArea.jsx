import './TextArea.css'

export default function TextArea(props) {
  return (
    <textarea
      className={`textarea ${props.className}`}
      id={props.id}
      name={props.name}
      aria-label={props.aria}
      placeholder={props.placeholder}
    ></textarea>
  )
}
