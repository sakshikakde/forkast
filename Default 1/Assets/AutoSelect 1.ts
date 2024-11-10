import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable"

@component
export class BasketController extends BaseScriptComponent {
    button: Interactable

    @input
    parentBasket: SceneObject
    @input
    childBasket: SceneObject

    onAwake() {
        this.button = this.sceneObject.getComponent(Interactable.getTypeName())
        this.parentBasket.enabled = false;
        this.childBasket.enabled = false;
        this.createEvent("OnStartEvent").bind(this.initButton)
        this.createEvent("OnStartEvent").bind(this.childButton)
        // this.createEvent("OnStartEvent").bind(this.childButton_End)
    }

    initButton = () => {
        this.button.onTriggerEnd.add(()=>{
            this.parentBasket.enabled = !this.parentBasket.enabled;
            // this.childBasket.enabled = !this.childBasket.enabled;
            this.childBasket.enabled = false;
        })
    }

    childButton = () => {
        this.parentBasket.getComponent(Interactable.getTypeName()).onTriggerEnd.add(()=>{
            // this.parentBasket.enabled = !this.parentBasket.enabled;
            // this.childBasket.enabled = !this.parentBasket.enabled;
            this.childBasket.enabled = !this.childBasket.enabled;
            this.parentBasket.enabled = true;
        })
    }

    // childButton_End = () => {
    //     this.parentBasket.getComponent(Interactable.getTypeName()).onTriggerStart.add(()=>{
    //         // this.parentBasket.enabled = !this.parentBasket.enabled;
    //         // this.parentBasket.enabled = false;
    //         // this.childBasket.enabled = !this.parentBasket.enabled;
    //         this.childBasket.enabled = false;
    //     })
    // }
}
