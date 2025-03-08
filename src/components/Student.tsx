interface IStudent {
  name: string;
  age: number;
  maths: number;
  science: number;
}

const Student: React.FC<IStudent> = ({ name, age, maths, science }) => {
  const totalClass = maths + science > 50 ? 'passMarks' : 'failMarks';
  return (
    <div>
      <h1>{name}</h1>
      <h2>{`Age: ${age}`}</h2>
      <h2>{`Maths: ${maths}`}</h2>
      <h2>{`Science: ${science}`}</h2>
      <h2>
        Total: <span className={totalClass}>{maths + science}</span>
      </h2>
    </div>
  );
};

export default Student;
