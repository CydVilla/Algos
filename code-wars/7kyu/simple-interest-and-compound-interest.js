const interest = (P,r,n) => [Math.round(P * (r * n) + P), Math.round(P * Math.pow((1+r), n))]
