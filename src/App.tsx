import './App.css';
import Student from './components/Student';

function App() {
  return (
    <div>
      <Student name={'Angshuman'} age={28} maths={84} science={89} />
      <Student name={'Akash'} age={28} maths={30} science={20} />
    </div>
  );
}

export default App;
