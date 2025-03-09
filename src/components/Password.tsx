import InvalidPassword from './InvalidPAssword';
import ValidPassword from './ValidPassword';

interface IPasswordProps {
  isValidPassword: boolean;
}
const Password: React.FC<IPasswordProps> = ({ isValidPassword }) => {
  return <div>{isValidPassword ? <ValidPassword /> : <InvalidPassword />}</div>;
};

export default Password;
