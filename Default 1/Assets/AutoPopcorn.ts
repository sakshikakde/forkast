import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable"

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

    initButton = () => {
        this.button.onTriggerEnd.add(()=>{
            this.basket.enabled = !this.basket.enabled;
        })
    }

}
