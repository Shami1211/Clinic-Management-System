import React from 'react'
import './pagination.css'

function Pagination({dataLength, numberOfItemsPerPage, setCurrentPageFunction, currentPageIndex}) {

  const pageNumbers = [];
  console.log(`Number of items: ${dataLength}`)
  for (let i = 1; i <= Math.ceil(dataLength / numberOfItemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='pageNumbers'>
        <ul className='pageNumbers'>
        {pageNumbers.map(number => (
            <li key={number}>
                <button onClick={() => setCurrentPageFunction(number)} className={currentPageIndex === number? "clinicPageNumber active": "clinicPageNumber"}>
                    {number}
                </button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Pagination