import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Drug from './DrugReport'; 
import './DrugReport.css';
import PNav from "./Phamacy_Home_02/PNav";
import Icon from '../Phamacy/Phamacy_Home_02/Photos/Icon.png';
import { useReactToPrint } from 'react-to-print';

/*DETA BASE URL*/
const URL = "http://localhost:5000/drugs/viewAllDrugs";

const fetchHandler = async ()=>{
    return await axios.get(URL).then((res) => res.data);
};

const  Drugs = ()=>  {
const [drugs, setDrugs] = useState();
  
  useEffect(() => {
    fetchHandler().then((data) => setDrugs(data.drugs));
  },[]);

  console.log(drugs);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Drugs Report',
    onAfterPrint: ()=> alert('Successfully Downloaded !')
  });

  return (
    <div>

      <PNav></PNav>

        <div className='Dreport-1'>

          <div className='Dreport-full' ref={componentRef}>

            <div className='report-3'>

              <h1 className='hom-h9'>District General Hospital-Gampaha </h1>
              <h2 className='hom-h'>දිස්ත්‍රික් මහ රෝහල-ගම්පහ </h2>
              <h2 className='hom-h'>மாவட்ட பொது வைத்தியசாலை-கம்பஹா</h2>

              <div className='imgg'>
                <img src={Icon} alt="signin logo"  width={"23%"}/> 
              </div>

              <div className='Dreport-3'>
                      
                <h1 className='report-1-nw'>Drugs Details Report</h1>

                      <br></br>

                  <div className='report-tb' >
                    
                    <div className='report-tb1115'>
                      <td className='report-ter'><h3 className='report-h3ryz'>Drug Name</h3></td>
                      <td className='report-ter'><h3 className='report-h3ryz'>Drug Quantity</h3></td>
                      <td className='report-ter'><h3 className='report-h3ryz'>Drug Cetagory</h3></td>
                    </div>

                  </div>

                  {drugs && drugs.map((drug, i) => (
                    <div  key={i}>
                      <Drug drug={drug} />
                    </div> 
                    ))}

              </div>

                <br></br>

            </div>

          </div>

              <br></br>

          <div className='report-b'>
            <button className='report-button-24' onClick={handlePrint} >Download Report</button>
          </div>

        </div>
                      
        <br></br>
 
    </div>

  )
}

export default Drugs
/*1.32 idn*/