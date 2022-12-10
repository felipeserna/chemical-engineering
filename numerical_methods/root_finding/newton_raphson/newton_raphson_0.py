#!/usr/bin/env python3
"""
Newton-Raphson Method of finding roots iterates Newton steps from x0
until the error is less than the tolerance.
"""
import numpy as np


"""
(2)^(1/2) is the root of the function f(x) = x**2 - 2. Using x0 = 1.4
as a starting point. Estimate (2)^(1/2)
"""
f = lambda x: x**2 - 2
f_prime = lambda x: 2*x
newton_raphson = 1.4 - (f(1.4))/(f_prime(1.4))

print("newton_raphson =", newton_raphson)
print("sqrt(2) =", np.sqrt(2))

print("______________________________________")

def my_newton(f, df, x0, tol):
    """
    output is an estimation of the root of f
    """
    if abs(f(x0)) < tol:
        return x0
    else:
        return my_newton(f, df, x0 - f(x0)/df(x0), tol)


estimate = my_newton(f, f_prime, 1.5, 1e-12)
print("estimate =", estimate)
print("sqrt(2) =", np.sqrt(2))

"""
Since xr is initially unknown, there is no way to know
if the initial guess is close enough to the root to get
this behavior unless some special information about the
function is known a priori (e.g., the function has a root close to x=0).
"""
