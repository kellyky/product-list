const Button = ({className, text}) => {
  // The purpose - create the button that may be re-used throughout the project
  return (
    <button className={className}>
      {text}
    </button>
  )
}

export default Button;
