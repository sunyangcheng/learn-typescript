type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    // Fish | Human
    return (animal as Fish).swim();
  }
  // Bird | Human
  return (animal as Bird).fly();
}

export {};