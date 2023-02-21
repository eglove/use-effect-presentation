import { useEffect, useState } from 'react';

type Card = {
  gold: boolean;
};

const isGoldCard = () => Math.random() < 0.5;

let i = 0;

export default function ChainedEffect(): JSX.Element {
  const [clicked, setClicked] = useState(0);
  const [card, setCard] = useState<Card | null>(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount(card_ => {
        return card_ + 1;
      });
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound(round_ => {
        return round_ + 1;
      });
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round >= 3) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    if (isGameOver) {
      alert('Good game!');
      setGoldCardCount(0);
      setRound(0);
      setIsGameOver(false);
    }
  }, [isGameOver]);

  console.log(`Rendered ${i++} times.`);
  console.log(`Clicked ${clicked} times.`);

  function handlePlaceCard() {
    setClicked(clicked + 1);
    const nextCard = { gold: isGoldCard() };
    if (isGameOver) {
      throw Error('Game already ended.');
    }

    setCard(nextCard);
  }

  return (
    <div>
      <p>Round: {round}</p>
      <p>Gold Card Count: {goldCardCount}</p>
      <button type="button" onClick={handlePlaceCard}>
        Add Card
      </button>
    </div>
  );
}
