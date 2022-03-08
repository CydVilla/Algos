// Start algo here:

function solution(X, Y, A) {
  var N = A.length;
  var result = -1;
  var nX = 0;
  var nY = 0;
  for (var i = 0; i < N; i++) {
      if (A[i] == X)
          nX += 1;
      else if (A[i] == Y)
          nY += 1;
      if (nX == nY)
          result = i;
  }
  // console.log('hey', result)
  return result;
}

export {solution}