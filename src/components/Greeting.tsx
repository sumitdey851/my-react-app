interface IGreetingProps {
  timeOfDay: string;
}

const getGreeting = (timeOfDay: string) => {
  switch (timeOfDay) {
    case 'morning':
      return <h1>Good Morning</h1>;
    case 'afternoon':
      return <h1>Good Afternoon</h1>;
    case 'evening':
      return <h1>Good Evening</h1>;
    default:
      return <h1>Good Night</h1>;
  }
};

const Greeting: React.FC<IGreetingProps> = ({ timeOfDay }) => {
  return <div>{getGreeting(timeOfDay)}</div>;
};

export default Greeting;
