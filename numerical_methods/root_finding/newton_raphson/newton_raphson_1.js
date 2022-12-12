// Second part of Newton-Raphson
const f = (x) => x**3 + 3*x**2 - 2*x - 5;
const f_prime = (x) => 3*x**2 + 6*x - 2;

function newton_raphson(f, df, x0, tol) {
  // output is an estimation of the root of f
  if (Math.abs(f(x0)) < tol) {
    return x0;
  }
  else {
    return newton_raphson(f, df, x0 - f(x0)/df(x0), tol);
  }
}

//const estimate = newton_raphson(f, f_prime, 0.29, 1e-10);
// estimate = -3.13

//const estimate = newton_raphson(f, f_prime, 10, 1e-10);
// estimate = 1.3

const estimate = newton_raphson(f, f_prime, -1, 1e-10);
// estimate = -1.2

console.log("estimate =", estimate);

const replacing = f(estimate);
console.log("replacing =", replacing);
