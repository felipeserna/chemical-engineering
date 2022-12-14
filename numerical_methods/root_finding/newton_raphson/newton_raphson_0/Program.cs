double x0 = 1.4;

Func<double, double> myFunction = x => Math.Pow(x, 2) - 2;
Func<double, double> myFunctionPrime = x => 2 * x;

double newtonRaphson = x0 - myFunction(x0) / myFunctionPrime(x0);

Console.WriteLine($"newton_raphson = {newtonRaphson}");
Console.WriteLine($"Math.Sqrt(2) =   {Math.Sqrt(2)}");

Console.WriteLine("_________________________________________");

double myNewtonRaphson(Func<double, double> f, Func<double, double> df, double x0, double tol)
{
    if (Math.Abs(f(x0)) < tol)
    {
        return x0;
    }
    return myNewtonRaphson(f, df, x0 - f(x0) / df(x0), tol);
}

double estimate = myNewtonRaphson(myFunction, myFunctionPrime, 1.5, 1e-12);
Console.WriteLine($"estimate =     {estimate}");
Console.WriteLine($"Math.Sqrt(2) = {Math.Sqrt(2)}");
