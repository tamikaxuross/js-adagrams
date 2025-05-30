const LETTER_POOL = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9,
  J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6,
  S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
};

const HAND_SIZE = 10;

const buildLetterPile = () => {
  const pile = [];
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    pile.push(...Array(count).fill(letter));
  }
  return pile;
};


export const drawLetters = () => {
  const letterPile = buildLetterPile();
  const hand = [];

  while (hand.length < HAND_SIZE) {
    const index = Math.floor(Math.random() * letterPile.length);
    const chosen = letterPile[index];
    [letterPile[index], letterPile[letterPile.length - 1]] = [letterPile[letterPile.length - 1], letterPile[index]];
    letterPile.pop();  // efficient removal
    hand.push(chosen);
  }

  return hand;
  
  
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
