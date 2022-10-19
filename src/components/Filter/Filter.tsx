
import { FC, ChangeEvent } from 'react';
// import * as SC from "./Filter.styled.js"

interface filterCallbackType { (e: ChangeEvent<HTMLInputElement>): void };

interface IProps {
  filterHeader: string,
  value: string,
  onChange: filterCallbackType,
};

export const Filter: FC<IProps> = ({ filterHeader, value, onChange }) => {
  return (
      <label htmlFor="filter">
        <h3>{filterHeader}</h3>
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
  
  );
};

