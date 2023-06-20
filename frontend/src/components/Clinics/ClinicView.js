import React, { useEffect,useState } from 'react';
import './clinicView.css';
import {useNavigate} from 'react-router-dom'
import ClinicService from '../../services/clinicService';
import searchIcon from '../Clinics/img/searchIcon.png';
import deleteIcon from '../Clinics/img/deleteIcon.png';
import editIcon from '../Clinics/img/editIcon.png';
import DeleteModal from './DeleteModal';
import Pagination from './Pagination';
import ClinicHeader from '../Clinics/ClinicHeader';



const ClinicView = () => {

  const navigate = useNavigate();

  const [clinics, setClinics] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [clinicToDelete, setClinicToDelete] = useState('')

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
   clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageData = ()=>{
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredData.slice(startIndex, endIndex);
  }

  const deleteClinic = ()=>{
    console.log("inside delete clinic")
    ClinicService.deleteClinic(clinicToDelete).then(
      (response) => {
        console.log("deleted")
        setShowDeleteModal(false)
        window.location.reload()
      },
      (error) => {
        console.log(error)
        setShowDeleteModal(false)
        
      }
    )
  }


  return (
    <div>
      <ClinicHeader/><br/><br/>
    <div className='clinic-view-container'>
      <DeleteModal show={showDeleteModal} onClose={()=> setShowDeleteModal(false)} handleDelete={deleteClinic}/>
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
            <img className='clinc-phtor' src={searchIcon} alt="search icon"></img>
          </div>
          
          
          <button className='clinc-viv-bt' onClick={()=>{navigate("/clinic/addClinic")}}> ADD NEW CLINIC </button>
        </div>
        <table className="clinic-table">
          <thead>
            <tr>
              <th className='clth'>Clinic</th>
              <th className='clth'>Day</th>
              <th className='clth'>Start Time</th>
              <th className='clth'>End Time</th>
              <th className='clth'>Place</th>
              <th className='clth'>Action</th>
            </tr>
          </thead>
          <tbody>
            {pageData().map((clinic) => (
              <tr key={clinic._id}>
                <td className='clthr'>{clinic.name}</td>
                <td className='clthr'>{clinic.day}</td>
                <td className='clthr' >{clinic.startTime}</td>
                <td className='clthr'>{clinic.endTime}</td>
                <td className='clthr'>{clinic.location}</td>
                <td  className='clthr'>
                  
                  <span>
                    <img onClick={()=>{navigate("/clinic/updateClinic",{state: {clinicData: clinic}})}} className='clinic-table-icon' src={editIcon} alt="edit icon"></img>
                    <img  onClick={()=> {
                      setShowDeleteModal(true)
                      setClinicToDelete(clinic._id)
                    }
                      } className='clinic-table-icon' src={deleteIcon} alt="delete icon"></img>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination dataLength={filteredData.length} numberOfItemsPerPage={itemsPerPage} setCurrentPageFunction={setCurrentPage} currentPageIndex={currentPage}/>
        
      </div>
      
    </div>
    </div>
    
  );

  
};

export default ClinicView;
