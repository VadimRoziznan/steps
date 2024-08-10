import React, { useState, useCallback } from "react";
import "./index.css"

interface FormSubmitProps {
  onFormSubmit: (
    date: string,
    distance: string
  ) => void;
};

export const InputForm = ({ onFormSubmit }: FormSubmitProps) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onFormSubmit(date, distance)
  }, [date, distance]);
  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <div className="date-container">
        <label htmlFor="date">
          Дата (ДД.ММ.ГГ)
        </label>
        <input 
          id="date"
          type="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
          />
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
  )
}
