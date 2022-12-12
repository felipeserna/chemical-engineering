/*
Chemistry and Thermodynamics: Van der Waals equation of state:

(P + a / (Vm ** 2)) * (Vm - b) = R * T

Find the volume occupied by 1 Pound [lb] of CH4 gas at 500 °R and 1015 psia.

Notes:
A. V ** 3:
3 Equal roots (above the critical point in P vs V diagram).
1 Real and 2 imaginary roots (Critical point in P vs V diagram).
3 Different real roots (Inside the dome, saturated liquid, and saturated vapor).

B.
- If df(Vmi) = 0, the method does not work.
- If f(Vmi) = 0, that is the solution.
*/
// K
const Tc = 190.7;
// atm
const Pc = 45.8;
// atm * cm3 / (gmol * K)
const R = 82.06;

const a = 27 * R ** 2 * Tc ** 2 / (64 * Pc);

const b = R * Tc / (8 * Pc);

// T from Rankine to Kelvin
const T = 500 * 5 / 9;

// P from psia to atm
const P = 1015 / 14.7;

const f = (Vm) => P * Vm ** 3 - (R * T + P * b) * Vm ** 2 + a * Vm - a * b;

const df = (Vm) => 3 * P * Vm ** 2 - 2 * (R * T + P * b) * Vm + a;

function newton_raphson(f, df, x0, tol) {
  if (Math.abs(f(x0)) < tol) {
    return x0;
  }
  else {
    return newton_raphson(f, df, x0 - f(x0)/df(x0), tol);
  }
}

// Initial guess: P * Vm0 = R * T
const Vm0 = R * T / P;

const root = newton_raphson(f, df, Vm0, 1e-6);

console.log("root:", root);

const replacing = f(root);
console.log("replacing:", replacing);

// From Vm (cm3 / gmol CH4) to V (cm3)
// CH4 molecular weight: 16 lb / lbmol
const V = (root * 454) / 16;
console.log("V in cm3:", V);
