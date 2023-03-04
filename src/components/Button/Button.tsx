/*
interface IButtonProps {
    handleClick?: () => void;
    text: string;
}
*/
import css from "./Button.module.scss";

const Button = (props: any): JSX.Element => {
  return (
    <button className={css.button} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
