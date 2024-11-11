import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable"

import { incrementCalories, DecrementCalories, getCurrentScore } from "CalorieCount";  // Import score functions

@component
export class BasketController extends BaseScriptComponent {
    button: Interactable

    @input
    basket: SceneObject
    @input
    display: SceneObject

    onAwake() {
        this.button = this.sceneObject.getComponent(Interactable.getTypeName())
        print(this.sceneObject.name);
        this.basket.enabled = false;
        this.createEvent("OnStartEvent").bind(this.initButton)
    }

    // initButton = () => {
    //     this.button.onTriggerEnd.add(()=>{
    //         this.basket.enabled = !this.basket.enabled;
    //     })
    // }

    initButton = () => {
        this.button.onTriggerEnd.add(() => {
            // Toggle the basket enabled state
            this.basket.enabled = !this.basket.enabled;

            // Call the incrementScore function when the basket is enabled
            let updatedScore;
            if (this.basket.enabled) {
                updatedScore = incrementCalories(this.sceneObject.name);  // Increment the score and get the updated score
            } else {
                updatedScore = DecrementCalories(this.sceneObject.name);  // Decrement the score and get the updated score
            }
            // this.calories.enabled = !this.calories.enabled
            let textComponents = this.basket.getComponent("Component.Text");
            textComponents.text = updatedScore.toString()

        
            let dispComponents = this.display.getComponent("Component.Text");
            // textComponents.text = currentScore.toString()
            var currentScore = getCurrentScore();
            dispComponents.text = currentScore.toString() + "/1000  Calories Consumed";
            // textComponents.text = "updatedScore.toString()";
            let color = new vec4(0, 0, 1, 1); // RGBA
            var remainingCalories = 1000 - currentScore
            if(remainingCalories < 0) {
                color = new vec4(1, 0, 0, 1); // RGBA
            } else if (remainingCalories > 60) {
                color = new vec4(0, 1, 0, 1);
            }
            textComponents.textFill.color = color;
    
        });
    }

}
