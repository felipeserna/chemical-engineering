/*
Finding the roots of functions is important in many engineering
applications such as signal processing and optimization.
*/
const f = (x) => x**3 - 100*x**2 - x + 100;
const df = (x) => 3*x**2 - 200*x - 1;

function newton_raphson(f, df, x0, tol) {
  if (Math.abs(f(x0)) < tol) {
    return x0;
  }
  else {
    return newton_raphson(f, df, x0 - f(x0)/df(x0), tol);
  }
}

//const root = newton_raphson(f, df, 0, 1e-6);
// root = 100

//const root = newton_raphson(f, df, 0.005, 1e-6);
// root = 1.00000

const root = newton_raphson(f, df, -0.005, 1e-6);
// root = -1.00000

console.log("root:", root);

const replacing = f(root);
console.log("replacing:", replacing);
