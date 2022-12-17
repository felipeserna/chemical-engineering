const P = 760; // mmHg
const X = 0.5; // Benzene. (1 - X) is Toluene
//Log10 Ps = A - B/(T+C) // mmHg and °C
const A1 = 6.90565;
const B1 = 1211.033;
const C1 = 220.79

const A2 = 6.95334;
const B2 = 1343.943;
const C2 = 219.377;

const f = (T) => X * 10 ** (A1 - B1 / (T + C1)) + (1 - X) * 10 ** (A2 - B2 / (T + C2)) - P;

const df = (T) => X * (B1 * Math.log(10) * 10 ** (A1 - B1/(T + C1))/(T + C1) ** 2) + (1 - X) * (B2 * Math.log(10) * 10 ** (A2 - B2/(T + C2))/(T + C2) ** 2);

function newton_raphson(f, df, x0, tol) {
  while (Math.abs(f(x0)) >= tol) {
    x0 = x0 - f(x0)/df(x0);
  }
  return x0;
}

// Initial T guess
const T0 = 80; // °C

const Temperature = newton_raphson(f, df, T0, 1e-6);

console.log(Temperature);

const Y = X * 10 ** (A1 - B1 / (Temperature + C1)) / P;

console.log(Y);
