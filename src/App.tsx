import "./App.css";
import { useState } from "react";
import { InputForm } from "./components/inputForm";
import { DataTable } from "./components/dataTable";

function App() {

  const [formData, setFormData] = useState({ date: "", distance: "" });

  const handleFormSubmit = (date: string, distance: string) => {
    setFormData({ date, distance });
  };

  return (
    <div className="App">
      <InputForm onFormSubmit={handleFormSubmit}/>
      <DataTable date={formData.date} distance={formData.distance}/>
    </div>
  );
}

export default App;
