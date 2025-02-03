import "./App.css";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";

// export const AssetContext = createContext("gold");
function App() {
  return (
    <>
      <Test1></Test1>
      <Test2></Test2>
      <Test3></Test3>

      <h1 className="text-2xl">Vite + React</h1>
      <button className="btn btn-outline">Default</button>
      <button className="btn btn-outline btn-primary">Primary</button>
      <button className="btn btn-outline btn-secondary">Secondary</button>
      <button className="btn btn-outline btn-accent">Accent</button>
    </>
  );
}
export default App;
