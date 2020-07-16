import React, {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'


function RoomFilter() {
  const {uniqueTypes, uniquePeople, setFilterInput, filterInput}= useContext(RoomContext)

  const {type, capacity, price, minSize, maxSize, breakfastInput, petsInput, minPrice, maxPrice} = filterInput


  const handleChange = e => {
    //setFilterInput({...filterInput, [e.target.name]: e.target.value})
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setFilterInput({...filterInput, [name]: value})
  }

  return (
    <div>
      <section className="filter-container">
        <Title title="Search Rooms"/>
        <form className="filter-form">
        {/*select type*/}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select 
              name="type" 
              id="type"
              className="form-control" 
              value={type}
              onChange={handleChange}
              >
                {uniqueTypes()}
            </select>
          </div>
        {/*end of select type*/}

        {/*select capacity*/}
          <div className="form-group">
           <label htmlFor="capacity">Guests</label>
           <select 
              name="capacity" 
              id="capacity"
              className="form-control" 
              value={capacity}
              onChange={handleChange}
              >
              {uniquePeople()}
           </select>
         </div>
        {/*select capacity*/}

        {/*select price*/}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            className="form-control"
            type="range" 
            name="price" 
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            />
          </div>
        {/*end of select price*/}

        {/*select size*/}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                className="size-input" 
                type="number" name="minSize" id="size"
                value={minSize}
                onChange={handleChange}
              />
              <input
                className="size-input" 
                type="number" name="maxSize" id="size"
                value={maxSize}
                onChange={handleChange}
              />
            </div>
          </div>
          {/*end of select size*/}

          {/* extras */}
          <div className="form-group">
            <div className="single-extra">
              <input type="checkbox" name="breakfastInput" id="breakfastInput"
                checked={breakfastInput}
                onChange={handleChange}
              />
            <label htmlFor="breakfast">breakfast</label>
          </div>

          <div className="single-extra">
            <input type="checkbox" name="petsInput" id="petsInput"
              checked={petsInput}
              onChange={handleChange}
              />
              <label htmlFor="breakfast">pets</label>
            </div>
          </div>
          {/* end of extras type */}
        </form>
      </section>
    </div>
  )
}

export default RoomFilter
