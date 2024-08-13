import { useState, useEffect } from "react";
import "./index.css";

interface DataTableProps {
  date: string;
  distance: string;
}

interface DataItem {
  date: string;
  distance: string;
}

export const DataTable = ({ date, distance }: DataTableProps) => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    if (date && distance) {
      const existingItem = data.find(item => item.date === date);
      if (existingItem) {
        const newData = data.map(item => {
          if (item.date === date) {
            return { ...item, distance: String(+item.distance + +distance) };
          }
          return item;
        });
        setData(newData);
      } else {
        const newElement = { date, distance };
        setData([...data, newElement]);
      }
    }
  }, [date, distance]);

  const handleDelete = (index: number) => {
    setData(data.filter((item, i) => i !== index));
  };

  return (
    <div className='container'>
      <div className="headers">
        <div className="header">
          Дата (ДД.ММ.ГГ)
        </div>
        <div className="header">
          Пройдено км
        </div>
        <div className="header">
          Действия
        </div>
      </div>
      <div className="border">
        {data.map((item, index) => (
          <div key={index} className="data-container">
            <div className="information">
              {item.date}
            </div>
            <div className="information">
              {item.distance}
            </div>
            <div className="information">
              <button className="close-button" onClick={() => handleDelete(index)}>&#10005;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
