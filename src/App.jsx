import './App.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, subtract, multiply, divide } from './features/calculations/calcSlice';

const App = () => {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculations.result);

  console.log(result);

  const handleSum = () => {
    dispatch(add({ firstNumber: num1, secondNumber: num2 }));
  }
  
  const handleSubtract = () => {
    dispatch(subtract({ firstNumber: num1, secondNumber: num2 }));
  }
  
  const handleMultiply = () => {
    dispatch(multiply({ firstNumber: num1, secondNumber: num2 }));
  }
  
  const handleDivide = () => {
    dispatch(divide({ firstNumber: num1, secondNumber: num2 }));
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-10">
        Calculation Form
      </h1>

      <div className="flex flex-col gap-2 justify-center items-center">
        <input type="number" onChange={(e) => setNum1(e.target.value)} placeholder="first Number" className="border border-gray-300 p-2 rounded outline-none" />
        <input type="number" onChange={(e) => setNum2(e.target.value)} placeholder="second Number" className="border border-gray-300 p-2 rounded outline-none" />
      </div>

      <h1 className="text-center text-3xl font-bold my-6">
        {result}
      </h1>

      <div className="flex flex-col gap-2 justify-center items-center">
        <button onClick={handleSum} className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded w-50">Sum</button>
        <button onClick={handleSubtract} className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded w-50">Subtract</button>
        <button onClick={handleMultiply} className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded w-50">Multiply</button>
        <button onClick={handleDivide} className="cursor-pointer bg-black text-white px-4 py-2 rounded w-50">Divide</button>
      </div>
    </div>
  )
}

export default App;