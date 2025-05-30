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

const buildFrequencyMap = (letters) => {
  const map = {};
  for (const letter of letters) {
    map[letter] = (map[letter] || 0) + 1;
  }
  return map;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const handFreq = buildFrequencyMap(lettersInHand);
  const word = input.toUpperCase();

  for (const letter of word) {
    if (!handFreq[letter]) return false;
    handFreq[letter] -= 1;
  }

  return true;
  // Implement this method for wave 2
};

const SCORE_CHART = {
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4,
  X: 8, Y: 4, Z: 10,
};
const BONUS_MIN_LENGTH = 7;
const BONUS_POINTS = 8;

export const scoreWord = (word) => {
  if (!word || word.length === 0) return 0;

  const upper = word.toUpperCase();
  let score = 0;

  for (const letter of upper) {
    score += SCORE_CHART[letter] || 0;
  }

  if (upper.length >= BONUS_MIN_LENGTH) {
    score += BONUS_POINTS;
  }

  return score;

  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  
  // Implement this method for wave 4
};
