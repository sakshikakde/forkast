import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable"

import { incrementCalories, DecrementCalories } from "CalorieCount";  // Import score functions

@component
export class BasketController extends BaseScriptComponent {
    button: Interactable

    @input
    basket: SceneObject

    onAwake() {
        this.button = this.sceneObject.getComponent(Interactable.getTypeName())
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
                updatedScore = incrementCalories();  // Increment the score and get the updated score
            } else {
                updatedScore = DecrementCalories();  // Decrement the score and get the updated score
            }
            // this.calories.enabled = !this.calories.enabled
            let textComponents = this.basket.getComponent("Component.Text");
            textComponents.text = updatedScore.toString()
            // textComponents.text = "updatedScore.toString()";
        });
    }

}
