import {React, useState, useEffect, useRef} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import "./clinicReport.css"
import BarChart from './ReportComponents/BarChart'
import ClinicService from '../../services/clinicService'
import { useReactToPrint } from 'react-to-print'
import ClinicHeader from '../Clinics/ClinicHeader';

function ClinicReport() {
    const navigate = useNavigate()
    const componentLocation = useLocation();

    // const [patientsByClinic, setPatientsByClinic] = useState([]);
    const clinicName = componentLocation.state?.clinicName;

    let patientsByClinic;

    // let divisions = [];
    // let birthdays = [];
    // let genderDistribution = [0,0];
    
    const uniqueDivisions = ["Attanagalla", "Biyagama", "Divulapitiya","Dompe", "Gampaha","Ja-Ela",
    "Katana","Kelaniya","Mahara","Minuwangoda","Mirigama","Negombo","Wattala"];

    const [ageGroup,setAgeGroup] = useState(()=>{
        return ["1-14", "15-19", "20-30", "30-64", "64+"];
    })
    const [divisions, setDivisions] = useState([])
    const [genderDistribution, setGenderDistribution] = useState([])
    const [ageGroups, setAgeGroups] = useState([])
    const [isReady, setIsReady] = useState(false)

    useEffect(()=>{

        ClinicService.getPatientsByClinic(clinicName).then(
            (response) =>{
                console.log(response.data)
                patientsByClinic = response.data;
                console.log(patientsByClinic)
                setDivisions(()=>{
                    let divisions = [];
                    patientsByClinic.forEach(patient => {
                        divisions.push(patient.division)
                    });
                    return divisions;
                })
        
                setAgeGroups(()=>{
                    let birthdays = [];
                    let ageGroups = [0,0,0,0,0];
        
                    patientsByClinic.forEach(patient => {
                        birthdays.push(patient.patientdob)
                    });
                    // Calculate ages based on the current date
                    const ages = birthdays.map(birthday => {
                        const birthDate = new Date(birthday);
                        const ageDiff = Date.now() - birthDate.getTime();
                        const ageDate = new Date(ageDiff);
                        return Math.abs(ageDate.getUTCFullYear() - 1970);
                    });
        
        
                    // Count the number of patients in each age group
                    ages.forEach(age => {
                        if (age >= 1 && age <= 14) {
                            ageGroups[0]++;
                        } else if (age >= 15 && age <= 19) {
                            ageGroups[1]++;
                        } else if (age >= 20 && age <= 30) {
                            ageGroups[2]++;
                        } else if (age >= 31 && age <= 64) {
                            ageGroups[3]++;
                        } else {
                            ageGroups[4]++;
                        }
                    });
        
                    return ageGroups;
                })
        
                setGenderDistribution(()=>{
                    let genderDistribution = [0,0]
                    patientsByClinic.forEach(patient => {
                        patient.gender === "Male" ? genderDistribution[0]++ : genderDistribution[1]++ ;
                    });
                    return genderDistribution
                })

                setIsReady(true)
            },
            (error)=>{
                alert(error.response.data.message)
                navigate('/clinic/getReports');
            }
        )
        

        return () => {
            setIsReady(false)
          };

    }, [])


    function numberOfPatientsInDivision(allDivisions, targetDivision){
        let numberOfPatients = [];

        targetDivision.forEach(division => {
            let number = 0;
            allDivisions.forEach(divisionInAll =>{
                if(division === divisionInAll){
                    number++
                }
            })
            numberOfPatients.push(number)
        });
        return numberOfPatients;
    }

    const repRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => repRef.current,
        documentTitle: `${clinicName} Clinic Report`,
        onafterprint: ()=> alert('Printed Successfully')
    });


    
    
  return isReady ?(
    <div>
        <ClinicHeader></ClinicHeader><br></br><br></br><br></br><br></br>
    <div>
    <div className='clinic-report-container' ref={repRef}>
        <div className='clinic-report-title'>{`${clinicName} Clinic Report`}</div>
        <div className='clinic-report-charts'>
            <div className='clinic-report-bar-chart'>
                <div className='clinic-report-card'>
                    <div className='clinic-report-card-title'> Patients In Divisions</div>
                    <BarChart data={numberOfPatientsInDivision(divisions, uniqueDivisions)} categories={uniqueDivisions} height={650} width={800}/>
                </div>
            </div>
        
            <div className='clinic-report-pie-charts'>
                <div className='clinic-report-card'>
                    <div className='clinic-report-card-title'> Gender Distribution</div>
                    <BarChart data={genderDistribution} categories={["Male", "Female"]} height={280} width={400}/>
                </div>
                
                <div className='clinic-report-card'>
                    <div className='clinic-report-card-title'> Age Groups</div>
                    <BarChart data={ageGroups} categories={ageGroup} height={280} width={400}/>
                </div>
                
            </div>

    </div>
    </div>
    <br></br><br></br>
        <div className='report-b'>
            <button className='report-button-24' onClick={handlePrint} >Download Report</button>
          </div>
    </div>
    </div>
  ) : <div className='clinic-report-container'>
        <h1>Loading...</h1>
    </div>;
    
}

export default ClinicReport