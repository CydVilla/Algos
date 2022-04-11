const positiveSum = (arr) => {
    let result = 0
      for (i = 0; i < arr.length; i++) {
        let currentValue = arr[i] 
        if (currentValue > 0) {
        result += currentValue
    }
      }
      return result
    }