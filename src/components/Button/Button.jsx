import "./Button.scss"
import classNames from "classnames";

const Button = (props) => {
  const {
    className,
    type = "button",
    href,
    target
  
  } = props
  
  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  
  return (
    <Component
      className={classNames(className, "button")}
      {...specificProps}
    >
    
    </Component>
  )

}

export default Button