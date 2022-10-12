const calcSquareDiagonal = sideLength => {
  return (sideLength * Math.sqrt(2)).toFixed(2);
};
console.log(calcSquareDiagonal(6));

const TriangleArea = (a, b, c) => {
  const p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);
};
console.log("area of triangle is", TriangleArea(3, 4, 6));
