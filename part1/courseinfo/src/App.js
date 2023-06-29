const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}{" "}
    </p>
  );
};
const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};
const Total = (props) => {
  let total = props.parts
    .map((part) => part.exercises)
    .reduce((a, b) => a + b, 0);
  return <p>Number of exercises {total} </p>;
};
const App = () => {
  const course = {
    name: "Desenvolvimento de aplicação Half Stack",
    parts: [
      {
        name: "Fundamentos da biblioteca React",
        exercises: 10,
      },
      {
        name: "Usando props para passar dados",
        exercises: 7,
      },
      {
        name: "Estado de um componente",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
