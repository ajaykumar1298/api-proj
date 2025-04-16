import React from 'react'

function FilterColor({colorFilter,selectedColor,handleColorChange}) {
  return (
    <>
      {colorFilter.length > 0 && (
            <>
              <label>Filter by Color: </label>
              <select value={selectedColor} onChange={handleColorChange}>
                <option value="">All</option>
                {colorFilter.map((col, i) => (
                  <option key={i} value={col}>
                    {col}
                  </option>
                ))}
              </select>
            </>
          )}
    </>
  )
}

export default FilterColor
