export const customPercentileRound = (percentile) => {
  if (percentile >= 99.995) {
    return 99.99;
  } else if (percentile < 0.01) {
    return 0.01;
  } else {
    return Math.round(percentile * 100) / 100;
  }
};

export const customPopularityRound = (popularityPercentage) => {
  const num = parseFloat(popularityPercentage);

  if (num < 0.01 && num > 0.000001) {
    return num.toFixed(5);
  } else if (num < 0.000001) {
    return num.toFixed(7);
  } else {
    return num.toFixed(2);
  }
};
