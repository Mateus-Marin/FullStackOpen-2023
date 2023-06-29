import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({
  good,
  bad,
  all,
  neutral,
  setAll,
  setBad,
  setGood,
  setNeutral,
}) => {
  const positive = all === 0 ? 0 : (good / all) * 100;

  const average = all === 0 ? 0 : (good + bad * -1) / all;

  return (
    <div>
      <h2>Give feedback</h2>
      <Button
        text="good"
        onClick={() => {
          setGood((prevState) => prevState + 1);
          setAll((prevState) => prevState + 1);
        }}
      />
      <Button
        text="neutral"
        onClick={() => {
          setNeutral((prevState) => prevState + 1);
          setAll((prevState) => prevState + 1);
        }}
      />
      <Button
        text="bad"
        onClick={() => {
          setBad((prevState) => prevState + 1);
          setAll((prevState) => prevState + 1);
        }}
      />
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>Positive (%)</td>
            <td>{positive}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  return (
    <Statistics
      good={good}
      setGood={setGood}
      neutral={neutral}
      setNeutral={setNeutral}
      bad={bad}
      setBad={setBad}
      setAll={setAll}
      all={all}
    />
  );
};

export default App;
