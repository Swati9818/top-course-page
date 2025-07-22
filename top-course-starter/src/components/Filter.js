import React from 'react'

const Filter = ({ filterData }) => {

  return (
    <div>

      {filterData && Object.entries(filterData).map(([key, value]) => {
        return (
          <div key={key}>

            <div className="btn">
              {key}
            </div>

            <div className="menu-list">
              {value.map((item) => {
                return (
                  <div>{item.title}</div>
                )
              })}
            </div>

          </div>
        )
      })

      }

    </div>
  )
}

export default Filter; 