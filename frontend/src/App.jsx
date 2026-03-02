import { useState } from "react";
import axios from "axios";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    try {
      // 🔥 TEMPORARY MOCK (until backend ready)
      const mockResponse = calculateLocally(num1, num2, operation);
      setResult(mockResponse);

      // ✅ When backend is ready, use this instead:
      /*
      const response = await axios.post("http://localhost:5000/calculate", {
        num1: Number(num1),
        num2: Number(num2),
        operation,
      });

      setResult(response.data.result);
      */
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const calculateLocally = (a, b, op) => {
    const x = Number(a);
    const y = Number(b);

    switch (op) {
      case "add":
        return x + y;
      case "subtract":
        return x - y;
      case "multiply":
        return x * y;
      case "divide":
        return y !== 0 ? x / y : "Cannot divide by zero";
      default:
        return 0;
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Calculator Demo</h1>

      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>

      <br /><br />

      <button onClick={handleCalculate}>Calculate</button>

      <h2>Result: {result !== null ? result : "-"}</h2>
    </div>
  );
}

export default App;