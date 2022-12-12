#!/usr/bin/env python3
f = lambda x : x**3 - 100*x**2 - x + 100
df = lambda x : 3*x**2 - 200*x - 1

def newton_raphson(f, df, x0, tol):
    if abs(f(x0)) < tol:
        return x0
    else:
        return newton_raphson(f, df, x0 - f(x0)/df(x0), tol)


# root = newton_raphson(f, df, 0, 1e-6)
# root = 100.0

# root = newton_raphson(f, df, 0.005, 1e-6)
# root = 1.00000

root = newton_raphson(f, df, -0.005, 1e-6)
# root = -1.00000

print("root:", root)

replacing = f(root)

print("replacing:", replacing)
