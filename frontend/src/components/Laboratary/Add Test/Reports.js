import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Report from './Report';
import { Link } from "react-router-dom";
import '../CSS/Report.css';
import Header from '../Header';

//data base url
const URL = "http://localhost:5000/reports/";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

  const Reports = ()=> {
    const [reports, setReports] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [noResults,setNoResults] = useState(false);

    //search bar
    const handleSearch = () => {
      fetchHandler().then(data => {
        const filteredReports = data.reports.filter(report =>
          Object.values(report).some(field =>
            field.toString().toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
        setReports(filteredReports);
        setNoResults(filteredReports.length === 0);
        
      });
    };
    

    useEffect(() => {
      fetchHandler().then(data => setReports(data.reports));
    }, []);
    console.log(reports);

    
    return (
      <div>

          <Header/><br/><br/><br/>

          <h1 className='drughed'>Test Details</h1>
            <script src="https://kit.fontawesome.com/d97b87339f.js" crossorigin="anonymous"></script>
        
              <div className="form-search">
                <input className='serinpt' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Your Details.."/>
                <button onClick={handleSearch} className="searchbutton">
                  <i class="fa fa-search"></i>
                </button>
              </div>

                  <br></br>

              {noResults ? (
                <div className="hem-no-results-container">
                  <p className="hem-no-results-text">No Results Found</p>
                </div>) : (
          
                <div className='g'>
                 
                  {reports && reports.map((report, i) => (
                    <div key={i}>
                      <Report report={report}/>
                    </div>
                    ))};
                    
                </div>   
        )}

        <br></br>
        <div className='labbtnn'>
          <tr className='detl' >
            <td className="td-btn">
              <button><Link to={`/generatereports/`}class="form-button-4078">View All Report</Link></button>
            </td>
            <td className='labrf'></td>
            <td className="td-btn" >
              <button><Link to={`/create/`}class="form-button-40">Create Report</Link></button>
            </td>
          </tr>
        </div>

      </div>
    );
  };

export default Reports;