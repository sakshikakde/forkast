//@input SceneObject sphere

var isDragging = false;

function onTouchStart(eventData) {
    print("Touch start");
    isDragging = true;
}

function onTouchMove(eventData) {
    if (isDragging) {
        print("Touch move");
        var touchPosition = eventData.getTouchPosition();
        var newPosition = screenToWorld(touchPosition);
        if (newPosition) {
            script.sphere.getTransform().setWorldPosition(newPosition);
            print("New Position: " + newPosition);
        }
    }
}

function onTouchEnd(eventData) {
    print("Touch end");
    isDragging = false;
}

function screenToWorld(screenPos) {
    // Convert 2D screen position to 3D world position
    var camera = script.getSceneObject().getFirstComponent("Camera");
    if (camera) {
        return camera.screenSpaceToWorldSpace(screenPos, 40); // 10 is depth from camera
    }
    return null;
}

// Register touch events
var touchStartEvent = script.createEvent("TouchStartEvent");
touchStartEvent.bind(onTouchStart);

var touchMoveEvent = script.createEvent("TouchMoveEvent");
touchMoveEvent.bind(onTouchMove);

var touchEndEvent = script.createEvent("TouchEndEvent");
touchEndEvent.bind(onTouchEnd);
