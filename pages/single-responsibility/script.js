console.log('single-responsibility works!!');
import logMessage from './logger.js';

// one single reason to change.

class CalorieTracker {
    constructor(maxCalories) {
      this.maxCalories = maxCalories;
      this.currentCalories = 0;
    }
  
  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage('Max calories exceeded!!');
    }
  }

  // logCalorieSurplus() {
  //   console.log('Max calories exceeded!!');
  // }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);