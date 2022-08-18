type GreetFunction = (name: string) => void;

function greeter(fn: GreetFunction) {
  return fn('TypeScript');
}
 
function printToConsole(message: string) {
  console.log(message);
} 

greeter(printToConsole); // TypeScript

export {};