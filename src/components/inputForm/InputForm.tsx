import React, { useState, useCallback } from "react";
import "./index.css";

interface FormSubmitProps {
  onFormSubmit: (
    // eslint-disable-next-line no-unused-vars
    date: string,
    // eslint-disable-next-line no-unused-vars
    distance: string
  ) => void;
};

export const InputForm = ({ onFormSubmit }: FormSubmitProps) => {
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedDate = new Date(date);
    const currentDate = new Date();

    if (selectedDate < new Date(0) || selectedDate > currentDate) {
      setError("Дата не может быть отрицательной или в будущем");
      setTimeout(() => setError(""), 3000);
    } else {
      setError("");
      onFormSubmit(date, distance);
    }
  }, [date, distance]);

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      {error && (<div className="error-message">{error}</div>)}
      <div className="date-container">
        <label htmlFor="date">
          Дата (ДД.ММ.ГГ)
        </label>
        <input 
          id="date"
          type="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className="distance-container">
        <label htmlFor="distance">
          Пройдено км
        </label>
        <input
          id="distance"
          type="number"
          name="distance"
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button type="submit">OK</button>
      </div>
    </form>
  );
};