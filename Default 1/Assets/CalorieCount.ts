// Create key for the score variable
const store = global.persistentStorageSystem.store;
const scoreKey = 'totalScore';

// Retrieve the score from persistent storage
let currentGameScore = store.getInt(scoreKey);

// Print the score
print('Loaded score: ' + currentGameScore);

// Function that increments the score and returns the new score
export function incrementCalories() {
  // Increment the score by 1
  currentGameScore += 1;
  // Store the current score in persistent storage
  store.putInt(scoreKey, currentGameScore);
  // Print the current score
  print('Current score: ' + currentGameScore);
  
  // Return the updated score
  return currentGameScore;
}

// Function that decrements the score and returns the new score
export function DecrementCalories() {
  // Decrement the score by 1
  currentGameScore -= 1;
  // Store the current score in persistent storage
  store.putInt(scoreKey, currentGameScore);
  // Print the current score
  print('Current score: ' + currentGameScore);
  
  // Return the updated score
  return currentGameScore;
}