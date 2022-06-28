const countPositivesSumNegatives = (input) => {
    let positives = 0
    let negatives= 0
      if (input === null || input.length === 0) {
        return [];
      } else {
        input.forEach((num) => num > 0 ? positives++ : negatives += num);
      }
      return [positives , negatives];
  }