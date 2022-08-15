"use strict";
function move(animal) {
    if ("swim" in animal) {
        // Fish | Human
        return animal.swim();
    }
    // Bird | Human
    return animal.fly();
}
