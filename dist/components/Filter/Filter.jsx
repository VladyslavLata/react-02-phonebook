"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
;
;
const Filter = ({ filterHeader, value, onChange }) => {
    return (<label htmlFor="filter">
        <h3>{filterHeader}</h3>
        <input type="text" name="filter" value={value} onChange={onChange}/>
      </label>);
};
exports.Filter = Filter;
//# sourceMappingURL=Filter.jsx.map