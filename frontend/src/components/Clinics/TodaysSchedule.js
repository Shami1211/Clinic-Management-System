
import React, { useEffect,useState } from 'react';
import './clinicView.css';
import ClinicService from '../../services/clinicService';
import SearchIcon from '../Clinics/img/searchIcon.png';
import Pagination from './Pagination';
import ClinicHeader from '../Clinics/ClinicHeader';


const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

function TodaysSchedule() {

  const [clinics, setClinics] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);


  useEffect(()=>{
    ClinicService.getAllClinics().then(
      (response) => {
        setClinics(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  const[searchQuery, setSearchQuery] = useState('');

  const filteredData = clinics.filter((clinic) =>
   clinic.day.toLowerCase().includes((dayjs().format('dddd')).toLowerCase()) &&
   clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageData = ()=>{
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredData.slice(startIndex, endIndex);
  }
  return (
    <div>
      <ClinicHeader/><br/><br/>
    <div className='clinic-view-container'>
      <div className="clinic-table-container">
        <div className='clinic-table-header'>
          <div className='clinicSearchBar'>
            <div className='search-icon'>
              
            </div>
            <input 
            type="text" 
            value={searchQuery} 
            onChange={(e)=> setSearchQuery(e.target.value)}
            className="clinicSearchInput"
            placeholder='Search'>
            </input>
            <img className='clinc-phtor' src={SearchIcon} alt="search icon"></img>
          </div>
          <div>{dayjs().format('dddd Do MMMM YYYY')}</div>
        </div>
        <table className="clinic-table">
          <thead>
            <tr>
              <th className='clth'>Clinic</th>
              <th className='clth'>Day</th>
              <th className='clth'>Start Time</th>
              <th className='clth'>End Time</th>
              <th className='clth'>Place</th>
            </tr>
          </thead>
          <tbody>
            {pageData().map((clinic) => (
              <tr key={clinic._id}>
                <td className='clthr'>{clinic.name}</td>
                <td className='clthr'>{clinic.day}</td>
                <td className='clthr'>{clinic.startTime}</td>
                <td className='clthr'>{clinic.endTime}</td>
                <td className='clthr'>{clinic.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination dataLength={filteredData.length} numberOfItemsPerPage={itemsPerPage} setCurrentPageFunction={setCurrentPage} currentPageIndex={currentPage}/>
        
      </div>
    </div>
    </div>
  )
}

export default TodaysSchedule