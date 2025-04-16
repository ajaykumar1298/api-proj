import React from 'react'

function FilterCapacity({capacityFilter,selectedCapacity,handleCapacityChange}) {
  return (
  <>
    {capacityFilter.length > 0 && (
            <>
              <label>Filter by Capacity: </label>
              <select value={selectedCapacity} onChange={handleCapacityChange}>
                <option value="">All</option>
                {capacityFilter.map((cap, i) => (
                  <option key={i} value={cap}>
                    {cap}
                  </option>
                ))}
              </select>
            </>
          )}
  </>
  )
}

export default FilterCapacity
