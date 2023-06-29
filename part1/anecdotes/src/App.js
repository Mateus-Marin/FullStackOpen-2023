import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência .',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ];

  const initialVotes = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([...initialVotes]);

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  const maxVotes = Math.max(...votes);
  const mostVotedIndex = votes.indexOf(maxVotes);
  const mostVotedAnecdote = anecdotes[mostVotedIndex];

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next</button>

      <h2>Anecdote with most votes</h2>
      <p>{mostVotedAnecdote}</p>
      <p>Votes: {maxVotes}</p>
    </div>
  );
};

export default App;
