const PulloutSection = ({ header, text }) => (
  <div className="mt-4 p-4 bg-gray-400 w-2/3 rounded shadow-xl">
    <h2 className="text-4xl text-white">{header}</h2>
    <p className="text-white">{text}</p>
  </div>
);

export default PulloutSection;
