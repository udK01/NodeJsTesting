interface Props {
  children: string;
  color?: "dark" | "warning";
  onClick: () => void;
}

const Button = ({ children, color = "dark", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
