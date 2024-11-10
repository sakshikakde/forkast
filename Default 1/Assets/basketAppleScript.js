//@input Component.ScriptComponent basket_apples_bindrig

function onPinch() {
    // Call a function on the basket_apple_binding script
    script.basket_apples_bindrig.api.triggerAction();
}

// Assuming PinchButtonCapsuleExample has a pinch event
script.createEvent("PinchEvent").bind(onPinch);