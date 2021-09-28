import { Button } from "react-bootstrap";
import "./index.scss";
export default function Btn({
  variant = "primary",
  outline = false,
  label = "",
  iconRight = null,
  iconLeft = null,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  disabled = false,
  className = "",
  size = "md",
  type = "button",
  //   loading = false,
  //   children = null,
}) {
  const showVariant = () => {
    if (outline) {
      return `outline-${variant}`;
    }
    return variant;
  };
  return (
    <Button
      size={size}
      variant={showVariant()}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      className={`Btn ${className}`}
      type={type}
    >
      {iconRight && <i className={`fs-6 mx-1 bi bi-${iconRight}`} />}
      {label}
      {iconLeft && <i className={`fs-6 mx-1 bi bi-${iconLeft}`} />}
    </Button>
  );
}
