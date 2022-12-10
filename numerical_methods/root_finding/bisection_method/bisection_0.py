#!/usr/bin/env python3
"""
Finding the roots of functions is important in many engineering
applications such as signal processing and optimization.
"""
import numpy as np


def my_bisection(f, a, b, tol):
    # check if a and b bound a root
    if np.sign(f(a)) == np.sign(f(b)):
        raise Exception("The scalars a and b do not bound a root")

    # midpoint
    m = (a + b)/2

    if np.abs(f(m)) < tol:
        return m
    elif np.sign(f(a)) == np.sign(f(m)):
        return my_bisection(f, m, b, tol)
    elif np.sign(f(m)) == np.sign(f(b)):
        return my_bisection(f, a, m, tol)


f = lambda x: x**3 - 100*x**2 - x + 100

# root = my_bisection(f, 120, 150, 1e-6)

root = my_bisection(f, 50, 150, 1e-6)

print("root:", root)

replacing = f(root)

print("replacing:", replacing)
