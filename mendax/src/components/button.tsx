interface ButtonProps {
  name: string;
  color?: 'primary' | 'secondary' | 'info'; //colors that the button can be set to
  onBtnClick: () => void;
}

function Button({ name, color = "primary", onBtnClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onBtnClick}
    >
      {name}
    </button>
  );
}

export default Button;
