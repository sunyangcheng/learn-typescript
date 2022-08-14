type Point = { x: number; y: number };

function printCoord(pt: Point) {
  console.log(`x: ${pt.x}, y: ${pt.y}`);
}

printCoord({
  x: 1,
  y: 2
});

type ID = number | string;

function printID(id: ID) {
  console.log(id);
}

printID(100);
printID("100");