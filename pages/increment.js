import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import Page from "../components/Page";

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

const predict = (x) => {
  const model = new LinearRegression([], { value: 1 }, { value: 1 });

  return model.predict(x);
}

const PredictionBox = ({ prediction }) => (
  <>
    {prediction && (
      <h2 className="pt-8 text-blue-600 text-4xl">{prediction}</h2>
    )}
  </>
);

export default function Increment() {
  const [prediction, setPrediction] = useState(null);
  const [xInput, setXInput] = useState("");

  return (
    <Page>
      <div className="pb-8 flex flex-col">
        <h1 className={styles.title}>Increment</h1>

        <p className={styles.description}>State of the art machine learning counting service</p>
      </div>
      
      <p className={`${styles.description} text-purple-600`}>Enter a number and let the model predict what comes next...</p>

      <form className="flex flex-col" onSubmit={e => e.preventDefault()}>
        <div className="pt-4 relative h-10 input-component mb-5">
          <input
            id="x_input"
            type="text"
            className="h-full w-full rounded-sm border-gray-300 border-2 px-2 transition-all border-blue rounded-sm"
            value={xInput}
            onChange={e => setXInput(e.target.value)}
          />
        </div>

        <button onClick={() => setPrediction(predict(xInput))} className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">Predict</button>
      </form>

      <PredictionBox prediction={prediction} />

    </Page>
  )
}