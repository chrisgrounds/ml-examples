import { useState } from "react";
import styles from '../styles/Home.module.css'
import { ContentPage } from "../components/Page";
import PredictionBox from "../components/PredictionBox";
import { predict } from "../components/LinearRegression";
import Card from "../components/Card";
import PulloutSection from "../components/PulloutSection";

export default function Double() {
  const [prediction, setPrediction] = useState(null);
  const [xInput, setXInput] = useState("");

  return (
    <>
      <Card
        title="Home &rarr;"
        href="/"
        className="absolute w-40"
      />
      <ContentPage>
        <div className="pb-8 flex flex-col">
          <h1 className={styles.title}>Double</h1>

          <p className={styles.description}>Machine learning powered function that doubles numbers</p>
        </div>

        <p className={`${styles.description} text-blue-800`}>Enter a number and let the model predict what comes next...</p>

        <form className="flex flex-col" onSubmit={e => e.preventDefault()}>
          <div className="pt-4 relative h-10 input-component mb-5">
            <input
              id="x_input"
              type="text"
              className="h-full w-full text-center rounded-sm border-gray-300 border-2 px-2 transition-all border-blue rounded-sm"
              value={xInput}
              onChange={e => setXInput(e.target.value)}
            />
          </div>

          <button onClick={() => setPrediction(predict(xInput, 2, 0))} className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">Predict</button>
        </form>

        <PredictionBox prediction={prediction} />

        <PulloutSection header="How it works" text="Linear regression is used to find the line of best fit for a set of input data. Specifically, the algorithm will find the slope and intercept of a line that minimises errors (loss) given the training data." />
      </ContentPage>
    </>
  )
}