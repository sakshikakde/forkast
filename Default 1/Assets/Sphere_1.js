//@input SceneObject sphere

var speed = 0.05;
var direction = 1;

function onUpdate(eventData) {
    var position = script.sphere.getTransform().getLocalPosition();
    position.y += speed * direction;
    
    if (position.y > 0.5 || position.y < -0.5) {
        direction *= -1; // Reverse direction
    }
    
    script.sphere.getTransform().setLocalPosition(position);
}

// Register the update event
script.createEvent("UpdateEvent").bind(onUpdate);
