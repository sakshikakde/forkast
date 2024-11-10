import { getCurrentScore } from "CalorieCount";  // Import score functions

@component
export class NewScript extends BaseScriptComponent {

    @input
    display: SceneObject;
    
    onAwake() {
        this.createEvent("OnStartEvent").bind(this.displayText)
    }

    displayText = () => {
        let textComponents = this.display.getComponent("Component.Text");
        // textComponents.text = currentScore.toString()
        var currentScore = getCurrentScore();
        textComponents.text = currentScore.toString() + "/100 Consumed";        
    }

}
