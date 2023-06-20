import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ReportGenerate from './ReportGenerate';
import { useReactToPrint } from 'react-to-print';
import'../CSS/ReportGenerate.css';
import Header from '../Header';

//data base URL
const URL = "http://localhost:5000/reportsGenerate/";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

  const ReportsGenerate = ()=> {
    const [reportsGenerate, setGenerateReports] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [noResults,setNoResults] = useState(false);
    
    //search bar
    const handleSearch = () => {
      fetchHandler().then(data => {
        const filteredgenReports = data.reportsGenerate.filter(reportGenerate =>
          Object.values(reportGenerate).some(field =>
            field.toString().toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
        setGenerateReports(filteredgenReports);
        setNoResults(filteredgenReports.length === 0);
        
      });
    };

    useEffect(() => {
      fetchHandler().then((data) => setGenerateReports(data.reportsGenerate));
    }, []);
    console.log(reportsGenerate);
  
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'Lab Report',
      onAfterPrint: ()=> alert('print succes')
    });
    return (
      <div>

        <Header/> <br/><br/><br/>

          <div className='sham'>
            
            <div className="form-search">

              <input type="text" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder="Search Report Details.." 
              className="serinpt"/>
              <button onClick={handleSearch} className="searchbutton">
              <i class="fa fa-search"></i>
              </button>

            </div>

          </div>
      
        <div className='' ref={componentRef}> 

        
          <ul >
            {reportsGenerate && reportsGenerate.map ((reportGenerate, i) =>(
              <div className="report" key={i}>

                <ReportGenerate reportGenerate={reportGenerate}/>

                  <br></br>

                <div className='report-bb'>
                  <button className='report-button-24r' onClick={handlePrint} >Download</button>
                </div>

              </div>))}

          </ul>

        </div>

      </div>
    );
  };

export default ReportsGenerate;