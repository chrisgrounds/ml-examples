class LinearRegression {
  constructor(observations, slope = null, intercept = null) {
    this.observations = observations;
    this.slope = slope;
    this.intercept = intercept;
  }

  calculateSlope() {
    const deltas = this.observations.calculateDeltas();

    const denominator = deltas
      .map(({ xD }) => Math.pow(xD, 2))
      .reduce(Math.sum, 0);

    const numerator = deltas
      .map(({ xD, yD }) => xD * yD)
      .reduce(Math.sum, 0); ;

    return numerator / denominator;
  }

  calculateIntercept(slope) {
    const { xMean, yMean } = this.observations.calculateMeans();

    return yMean - (slope * xMean);
  }

  fit() {
    const slope = new Slope(this.calculateSlope());
    const intercept = new Intercept(this.calculateIntercept(slope.value));

    this.slope = slope;
    this.intercept = intercept;

    return { slope, intercept };
  }

  predict(x) {
    return this.intercept.value + this.slope.value * x;
  }
}

class Slope {
  constructor(slope) {
    this.value = slope;
  }
}

class Intercept {
  constructor(intercept) {
    this.value = intercept;
  }
}

class Observations {
  constructor() {
    this.observations = [];
  }

  add(x, y) {
    this.observations.push({ x, y });
  }

  calculateMeans() {
    const { xTotal, yTotal } = this.observations.reduce((prev, next) => ({
      xTotal: prev.xTotal + next.x,
      yTotal: prev.yTotal + next.y
    }), { xTotal: 0, yTotal: 0 });

    const dataLength = this.observations.length;

    return { xMean: xTotal / dataLength, yMean: yTotal / dataLength };
  }

  calculateDeltas() {
    const { xMean, yMean } = this.calculateMeans();

    return this.observations.map(({ x, y }) => ({ xD: x - xMean, yD: y - yMean }));
  }
}

const predict = (x, slope, intercept) => {
  const model = new LinearRegression([], { value: slope }, { value: intercept });

  return model.predict(x);
}

export { predict };
