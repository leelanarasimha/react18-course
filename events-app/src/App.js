import './App.css';
export default function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="message">Hello world</p>

      <div className="buttons">
        <button className="previous">Previous</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
}
