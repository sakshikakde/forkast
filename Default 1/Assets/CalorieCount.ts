// Create a map with string keys and integer values
let myMap: Map<string, number> = new Map();

// Add entries to the map
myMap.set("basket_apples_bindrig", 10);
myMap.set("bowl_of_chips_bindrig", 20);
myMap.set("sandwich_bindrig", 50);
myMap.set("popcorn_bindrig", 20);
myMap.set("gravy_boat_bindrig", 10);
myMap.set("NA", 10);

// Create key for the score variable
const store = global.persistentStorageSystem.store;
const scoreKey = 'totalScore';

// Retrieve the score from persistent storage
let currentGameScore = store.getInt(scoreKey);

// Print the score
print('Loaded score: ' + currentGameScore);

// Function that increments the score and returns the new score
export function incrementCalories(name = 'NA') {
  // Check if the amount is a valid number and greater than 0
  var amount = myMap.get(name);
  currentGameScore += amount;
  // Store the current score in persistent storage
  store.putInt(scoreKey, currentGameScore);
  // Print the current score
  print('Current score: ' + currentGameScore);
  return currentGameScore
} 

// Function that decrements the score and returns the new score
export function DecrementCalories(name = "NA") {
    // Check if the amount is a valid positive number
    var amount = myMap.get(name);
    currentGameScore = Math.max(0, currentGameScore - amount);
    store.putInt(scoreKey, currentGameScore);
    // Print the current score
    print('Current score: ' + currentGameScore);
    return currentGameScore;
}


export function getCurrentScore() {
  // Retrieve the score from persistent storage
  let currentScore = store.getInt(scoreKey);

  // Print the current score
  print('Current score: ' + currentScore);

  // Return the current score
  return currentScore;
}