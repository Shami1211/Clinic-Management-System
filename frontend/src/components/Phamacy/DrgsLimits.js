import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Drug from './DrugReport';
import './DrugReport.css';
import PNav from "./Phamacy_Home_02/PNav";
import Icon from '../Phamacy/Phamacy_Home_02/Photos/Icon.png';
import { useReactToPrint } from 'react-to-print';

const URL = "http://localhost:5000/drugs/viewAllDrugs";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Drugs = () => {
  const [drugs, setDrugs] = useState();

  useEffect(() => {
    fetchHandler().then((data) => {
      const filteredDrugs = data.drugs.filter((drug) => {
        const quantity = drug.drugsQuantity.replace("ml", "");
        return parseInt(quantity, 10) <= 1000;
      });
      setDrugs(filteredDrugs);
    });
  }, []);
  
  
  console.log(drugs);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Drugs Report',
    onAfterPrint: () => alert('Download Success')
  });

  const handleSendReport = () => {
  
    // Create the WhatsApp chat URL
    const phoneNumber = '+94765998911'; // Replace with the desired phone number
    const message = `Select the drug report from here`;
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
    // Open the WhatsApp chat in a new window
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div>
      <PNav />
      <div className='Dreport-1'>
        <div className='Dreport-full' ref={componentRef}>
          <div className='report-3'>
            <h1 className='hom-h9'>District General Hospital-Gampaha </h1>
            <h2 className='hom-h'>දිස්ත්‍රික් මහ රෝහල-ගම්පහ </h2>
            <h2 className='hom-h'>மாவட்ட பொது வைத்தியசாலை-கம்பஹா</h2>
            <div className='imgg'>
              <img src={Icon} alt='signin logo' width={'23%'} />
            </div>
            <div className='Dreport-3'>
              <h1 className='report-1-nw'>Drugs Details Report</h1>
              <br />
              <div className='report-tb'>
                <div className='report-tb1115'>
                  <td className='report-ter'>
                    <h3 className='report-h3ryz'>Drug Name</h3>
                  </td>
                  <td className='report-ter'>
                    <h3 className='report-h3ryz'>Drug Quantity</h3>
                  </td>
                  <td className='report-ter'>
                    <h3 className='report-h3ryz'>Drug Category</h3>
                  </td>
                </div>
              </div>
              {drugs &&
                drugs.map((drug, i) => (
                  <div key={i}>
                    <Drug drug={drug} />
                  </div>
                ))}
            </div>
            <br />
          </div>
        </div>
        <br />
        <div className='report-b'>
          <button className='report-button-24' onClick={handlePrint}>
            Download Report
          </button>
        </div>
        <br></br>
        <div className='report-b'>
          <button className='report-button-24' onClick={handleSendReport}>
            Send Report
          </button>
        </div>
      </div>
      <br />
    </div>
  );
  
  
}

export default Drugs
