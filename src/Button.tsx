interface IButtonProps {
  type: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
}

const clickHandler = (type: 'primary' | 'secondary') => {
  console.info(`${type} Button clicked`);
};

/** Manage button classes via config */
const buttonConfig = {
  primary: 'btn-primary-bg btn-primary-txt',
  secondary: 'btn-secondary-bg btn-secondary-txt',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

const Button: React.FC<IButtonProps> = ({ type, size }) => {
  return (
    <button
      className={`${buttonConfig[type]} ${buttonConfig[size]}`}
      onClick={() => clickHandler(type)}
    >
      Click me
    </button>
  );
};

export default Button;
