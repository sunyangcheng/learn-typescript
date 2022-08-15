"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    let fish = {
        name: "shark",
        swim: () => { }
    };
    let bird = {
        name: "sparrow",
        fly: () => { }
    };
    return Math.random() < 0.5 ? fish : bird;
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
const zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater = zoo.filter(isFish);
const underWater2 = zoo.filter(isFish);
const underWater3 = zoo.filter((pet) => {
    if (pet.name === "frog")
        return false;
    return isFish(pet);
});
