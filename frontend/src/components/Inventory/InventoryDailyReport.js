import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './UsageReport.css';
import {jsPDF} from "jspdf";
import InventoryHeader from "./InventoryMainHeader";

const UsageReport = () => {
  const history = useNavigate();
  const[inputs,setInputs] = useState({
        date:'',
        initialGeneral:'',
        initialSurgical:'',
        initialConsumable:'',
        receivedGeneral:'',
        receivedSurgical:'',
        receivedConsumable:'',
        damagedGeneral:'',
        damagedSurgical:'',
        usedConsumables:'',
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };

  const sendRequest = async() =>{
    await axios.post("http://localhost:5000/stocks", {
        date: Date(inputs.date),
        initialGeneral:Number(inputs.initialGeneral),
        initialSurgical:Number(inputs.initialSurgical),
        initialConsumable:Number(inputs.initialConsumable),
        receivedGeneral: Number(inputs.receivedGeneral),
        receivedSurgical:Number(inputs.receivedSurgical),
        receivedConsumable:Number(inputs.receivedConsumable),
        damagedGeneral: Number(inputs.damagedGeneral),
        damagedSurgical:Number(inputs.damagedSurgical),
        usedConsumables:Number(inputs.usedConsumables),
    }).then(res=>res.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    //performing calculations
    const initialGeneral = Number(inputs.initialGeneral);
    const receivedGeneral = Number(inputs.receivedGeneral);
    const damagedGeneral = Number(inputs.damagedGeneral);

    const initialSurgical = Number(inputs.initialSurgical);
    const receivedSurgical = Number(inputs.receivedSurgical);
    const damagedSurgical = Number(inputs.damagedSurgical);

    const initialConsumable = Number(inputs.initialConsumable);
    const receivedConsumable = Number(inputs.receivedConsumable);
    const usedConsumables = Number(inputs.usedConsumables);

    const calculatedGeneral = initialGeneral + receivedGeneral - damagedGeneral;
    const calculatedSurgical = initialSurgical + receivedSurgical - damagedSurgical;
    const calculatedConsumable = initialConsumable + receivedConsumable - usedConsumables;

    setInputs((prevState) => ({
      ...prevState,
      calculatedGeneral: calculatedGeneral.toString(),
      calculatedSurgical: calculatedSurgical.toString(),
      calculatedConsumable: calculatedConsumable.toString(),
    }));


      //printing content in the report
      const doc = new jsPDF();
      
      doc.setFont("Helvetica", "bold");

      doc.setTextColor("#007bff");
      doc.setFontSize(24);
      doc.text("Daily Usage Report", 105, 20, { align: "center" });

      doc.setTextColor("black");
      doc.setFontSize(16);
      doc.text("Inventory Management System", 105, 30, { align: "center" });

      const imgData = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Emblem_of_Sri_Lanka.svg/1200px-Emblem_of_Sri_Lanka.svg.png';
      doc.addImage(imgData, 'PNG', 40, 14, 11.8, 16);

      doc.setTextColor("black");
      
      doc.setFontSize(14);
      doc.text("District General Hospital, Gampaha.", 105, 40, { align: "center" });

      doc.setFont("Helvetica", "bold");
      doc.text("Date:", 20, 55,);
      doc.text(inputs.date, 35, 55);

      doc.setTextColor("red");
      doc.setFontSize(14);
      doc.text("Today's Usage", 120, 70, { align: "right" });

      doc.setTextColor("black");
      doc.setFontSize(12);

      doc.text("Received General Items:", 20, 80);
      doc.text(receivedGeneral.toString(), 75, 80);

      doc.text("Discarded General Items:", 20, 90);
      doc.text(damagedGeneral.toString(), 75, 90);

      doc.text("Received Surgical Items:", 20, 110);
      doc.text(receivedSurgical.toString(), 75, 110);

      doc.text("Discarded Surgical Items:", 20, 120);
      doc.text(damagedSurgical.toString(), 75, 120);

      doc.text("Received Consumables:", 20, 140);
      doc.text(receivedConsumable.toString(), 75, 140);

      doc.text("Used Consumables:", 20, 150);
      doc.text(usedConsumables.toString(), 75, 150);
      
      doc.setTextColor("red");
      doc.setFontSize(14);
      doc.text("Available Inventory Items", 135, 170, { align: "right" });
      
      doc.setTextColor("black");
      doc.setFontSize(12);
      
      doc.text("Remaining General Items:", 20, 185);
      doc.text(calculatedGeneral.toString(), 75, 185);
      
      doc.text("Remaining Surgical Items:", 20, 195);
      doc.text(calculatedSurgical.toString(), 75, 195);
      
      doc.text("Remaining Consumables:", 20, 205);
      doc.text(calculatedConsumable.toString(), 75, 205);
      
      const currentDate = new Date();
      const fileName = `Daily_Usage_Report ${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}.pdf`;
      doc.save(fileName);
  };

  return (
    <div>
      <InventoryHeader/>

      <br></br><br></br><br></br><br></br>
        
        <form onSubmit={handleSubmit}> 

          <div className=' form-ball'>
                  
            <div className='form-Main-nwr'>
                      
              <div class="Aform-row1r">
                  
                <div className='form-fullboxr'>
                    <br></br>
                  <h1 className='form-h22r'>Daily Usage Report</h1>
                    
                    <div className='form-fromrr'>
                                              
                            <div className='form-fr'>
                            <h3 className='form-h3r'>Date </h3>
                          <div className='form-inr'>
                            <input className='add-put-bnr'  value={inputs.date} onChange={handleChange} placeholder="Enter Name" type={"date"} name="date" required ></input>
                          </div>
                                
                                  <br></br>

                          <tr>
                            <td><h3 className='form-h3r'>Available General Items :</h3> </td>
                            <td><h3 className='form-h3r'>Received General Items :</h3></td>
                            <td><h3 className='form-h3r'>Discarded General Items :</h3></td>
                          </tr>

                          <tr>
                            <td>
                              <div className='form-inr'>
                                <input className='add-put-dtrtdhem' value={inputs.initialGeneral} onChange={handleChange} type={"number"}  name="initialGeneral" required placeholder="Enter available count"></input>
                              </div>
                            </td>
                        
                          
                            <td>
                              <div className='form-inr'>
                                <input className='add-put-dtrtdhem'  value={inputs.receivedGeneral} onChange={handleChange} type={"number"}  name="receivedGeneral"  required placeholder="Enter recieved count"></input>
                              </div>
                            </td>

                            <td>
                              <div className='form-inr'>
                                <input className='add-put-dtrtdhem'  value={inputs.damagedGeneral} onChange={handleChange} type={"number"}  name="damagedGeneral"  required placeholder="Enter discarded count"></input>
                              </div>
                            </td>
                          </tr>
                          <br></br>

                          <tr>
                            <td><h3 className='form-h3r'>Available Surgical Items :</h3> </td>
                            <td><h3 className='form-h3r'>Received Surgical Items :</h3></td>
                            <td><h3 className='form-h3r'>Discarded Surgical Items :</h3></td>
                          </tr>

                          <tr>
                            <td>
                              <div className='form-inr'>
                                <input className='add-put-dtrtdhem' value={inputs.initialSurgical} onChange={handleChange} type={"number"}  name="initialSurgical" required placeholder="Enter available count"></input>
                              </div>
                            </td>
                        
                          
                            <td>
                              <div className='form-inr'>
                                <input className='add-put-dtrtdhem'  value={inputs.receivedSurgical} onChange={handleChange} type={"number"}  name="receivedSurgical"  required placeholder="Enter recieved count"></input>
                              </div>
                            </td>

                            <td>
                              <div className='form-inr'>
                                <input className='add-put-dtrtdhem'  value={inputs.damagedSurgical} onChange={handleChange} type={"number"}  name="damagedSurgical"  required placeholder="Enter discarded count"></input>
                              </div>
                            </td>
                          </tr>
                          <br></br>
                          <tr>
                            <td><h3 className='form-h3r'>Available Consumables :</h3> </td>
                            <td><h3 className='form-h3r'>Received Consumables :</h3></td>
                            <td><h3 className='form-h3r'>Discarded Consumables :</h3></td>
                          </tr>

                          <tr>
                            <td>
                              <div className='form-inr'>
                                <input className='add-put-dtrtdhem'  value={inputs.initialConsumable} onChange={handleChange} type={"number"}  name="initialConsumable" required placeholder="Enter available count"></input>
                              </div>
                            </td>
                        
                          
                            <td>
                              <div className='form-inr'>
                                <input className='add-put-dtrtdhem'  value={inputs.receivedConsumable} onChange={handleChange} type={"number"}  name="receivedConsumable"  required placeholder="Enter recieved count"></input>
                              </div>
                            </td>

                            <td>
                              <div className='form-inr'>
                                <input className='add-put-dtrtdhem'  value={inputs.usedConsumables} onChange={handleChange} type={"number"}  name="usedConsumables"  required placeholder="Enter discarded count"></input>
                              </div>
                            </td>
                          </tr>

                          <br></br>
                          <div className='dadd-br'>
                            <button className='dadd-button-24rt' >Generate Report</button>
                          </div>

                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </form>
      </div>
  )
}

export default UsageReport;