#!/usr/bin/env python3
"""
Second part of Newton-Raphson
"""
f = lambda x: x**3 + 3*x**2 - 2*x - 5
f_prime = lambda x: 3*x**2 + 6*x - 2

def newton_raphson(f, df, x0, tol):
    """
    output is an estimation of the root of f
    """
    if abs(f(x0)) < tol:
        return x0
    else:
        return newton_raphson(f, df, x0 - f(x0)/df(x0), tol)


# estimate = newton_raphson(f, f_prime, 0.29, 1e-10)
# estimate = -3.13

# estimate = newton_raphson(f, f_prime, 10, 1e-10)
# estimate = 1.3

estimate = newton_raphson(f, f_prime, -1, 1e-10)
# estimate = -1.2

print("estimate =", estimate)

replacing = f(estimate)
print("replacing =", replacing)
