interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <button onClick={() => console.log('Button clicked!')}>{title}</button>
  );
}

export default Button;
