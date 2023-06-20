import React from "react";
import './CSS/Others.css';
import calan from './CSS/photos/calan.png';
import Header from './Header';

const Others = () => {
    return (
    <div>
         <Header/><br/><br/>

            <div className='room-table'>
                <div className="other-tabl-ful">
            <h1 className="other-h-1">Lab Timetable</h1>
                    <table className="lab-other-tabl" cellspacing="0" align="center" >
                            
                        <tr>

                            <td  className="tabl-ddp"  align="center" height="50"width="100">
                                <b>Day/Period</b>
                            </td>

                            <td  className="tabl-day"align="center" height="50" width="100">
                                <b>I9:30-10:20</b>
                            </td>
                            
                            <td className="tabl-day"align="center" height="50"width="100">
                                <b>II:20-11:10</b>
                            </td>

                            <td className="tabl-day" align="center" height="50"width="100">
                                <b>III11:10-12:00</b>
                            </td>

                            <td className="tabl-day" align="center" height="50"width="100">
                                <b>12:00-12:40</b>
                            </td>

                            <td className="tabl-day"align="center" height="50"width="100">
                                <b>IV12:40-1:30</b>
                            </td>

                            <td className="tabl-day"align="center" height="50" width="100">
                                <b>V1:30-2:20</b>
                            </td>

                            <td className="tabl-day" align="center" height="50" width="100">
                                <b>VI2:20-3:10</b>
                            </td>

                            <td className="tabl-day" align="center" height="50"width="100">
                                <b>VII3:10-4:00</b>
                            </td>

                        </tr>

                                    
                        <tr>
                            <td className="tabl-day" align="center" height="50">
                                <b>Monday</b></td>
                                <td className="lab-tab" align="center" height="50">A</td>
                                <td  className="lab-tab" align="center" height="50">B</td>
                                <td className="lab-tab"  align="center" height="50">C</td>
                                <td className="lab-tab"  rowspan="6" align="center" height="50">
                                <h2>LUNCH</h2>
                            </td>

                            <td className="lab-tab"  colspan="3" align="center"height="50">A</td>
                            <td className="lab-tab"  align="center" height="50">C</td>

                        </tr>
                        
                        <tr>
                            <td className="tabl-day"  align="center" height="50">
                                <b>Tuesday</b>
                            </td>
                            
                            <td className="lab-tab"  colspan="3" align="center"height="50">R</td>
                            <td className="lab-tab"  align="center" height="50">N</td>
                            <td  className="lab-tab" align="center" height="50">W</td>
                            <td className="lab-tab"  align="center" height="50">R</td>
                            <td className="lab-tab" align="center" height="50">L</td>
                        </tr>

                        <tr>
                            <td className="tabl-day"  align="center" height="50">
                                <b>Wednesday</b>
                            </td>
                            
                            <td className="lab-tab" align="center" height="50">Q</td>
                            <td className="lab-tab" align="center" height="50">B</td>
                            <td className="lab-tab" align="center" height="50">S</td>
                            <td className="lab-tab" align="center" height="50">G</td>
                            <td className="lab-tab" colspan="3" align="center" height="50">B</td>
                        
                        </tr>
                        
                        <tr>

                            <td className="tabl-day"  align="center" height="50">
                                <b>Thursday</b>
                            </td>

                            <td className="lab-tab" align="center" height="50">T</td>
                            <td className="lab-tab" align="center" height="50">W</td>
                            <td className="lab-tab" align="center" height="50">V</td>
                            <td className="lab-tab" colspan="3" align="center"height="50">Z</td>
                            <td className="lab-tab" align="center" height="50">O</td>
                        </tr>

                        <tr>
                            <td className="tabl-day"  align="center" height="50">
                                <b>Friday</b>
                            </td>

                            <td className="lab-tab"  colspan="3" align="center" height="50">P</td>
                            <td className="lab-tab"  align="center" height="50">G</td>
                            <td className="lab-tab"  align="center" height="50">R</td>
                            <td className="lab-tab"  align="center" height="50">N</td>
                            <td className="lab-tab"  align="center" height="50">H</td>
                        </tr>

                        <tr>
                            <td className="tabl-day"  align="center" height="50"><b>Saturday</b> </td>
                            <td className="lab-tab" align="center" height="50">E</td>
                            <td className="lab-tab"  align="center" height="50">C</td>
                            <td className="lab-tab" align="center" height="50">B</td>
                            <td className="lab-tab" colspan="3" align="center"height="50">Q</td>
                            <td className="lab-tab" align="center" height="50">R</td>
                        </tr>

                    </table>

<br></br>
                    
                    </div>
                    </div>

<br></br>
                    <div className="main-cal">
            <div className="calender-row" >
                
                <div class="calender-column" >
                    <div className="cal-img">
                        <img src={calan} alt="calendar" className="cal"/>
                    </div>
                 </div>

                <div class="calender-column" >
                
                <h4 className="other_acalender-1">Click Hear <br/>Go To Calander</h4>
                  <br></br>
                  <div className="other_acalender">
                  <a className="other-button-24" href="https://www.timeanddate.com/calendar/?country=116" target="blank" >
                        <h3 className="other_acalender">Calendar</h3></a> 
                  </div>
                </div>
                
            </div>
            </div>

               <br></br>
                
    </div>
    );
};

export default Others;