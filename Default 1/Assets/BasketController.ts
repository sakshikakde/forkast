import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable"

@component
export class BasketController extends BaseScriptComponent {
    @input
    button: Interactable

    @input
    basket: SceneObject

    onAwake() {
        this.basket.enabled = false;
        this.createEvent("OnStartEvent").bind(this.initButton)
    }

    initButton = () => {
        this.button.onTriggerEnd.add(()=>{
            this.basket.enabled = true;
        })
    }
}
