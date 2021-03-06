const PredictionBox = ({ prediction }) => (
  <>
    {prediction && (
      <h2 className="p-4 text-blue-600 text-4xl">{prediction}</h2>
    )}
  </>
);

export default PredictionBox;
