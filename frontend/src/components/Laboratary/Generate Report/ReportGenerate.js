import axios from "axios";
import {useNavigate} from "react-router-dom";
import Icon from '../CSS/photos/Icon.png';
import '../CSS/ReportGenerate.css';



const ReportGenerate = (props) => {
  const history = useNavigate();
  const {_id,name,age,gender,clinic,reportedDate,specimenNo,result,conclusion} = props.reportGenerate;

//report delete
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/reportsGenerate/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/reportsGenerate"));
  };

  return (
    <div>
  
      <div className='Dreport-1'>

        <div className='Dreport-fullr' >

          <div className='report-3'>

            <h1 className='hom-h9'>District General Hospital-Gampaha </h1>
            <h2 className='hom-h'>දිස්ත්‍රික් මහ රෝහල-ගම්පහ </h2>
            <h2 className='hom-h'>மாவட்ட பொது வைத்தியசாலை-கம்பஹா</h2>

              <div className='imgg'>
                <img src={Icon} alt="signin logo"  width={"20%"}/> 
              </div>

              <div className='Dreport-3'>
                <h1 className="generateh1">Patient Details</h1><br></br><br></br>
                <table className="generatetble">
                  <tr>
                    <td className="genetd"><h1 className='form-h001'>Report Refference Number: {_id}</h1></td>
                    <td><h1 className='form-h001'>Patient Name: {age}</h1></td>
                  </tr><br></br>
                  <tr>
                    <td><h1 className='form-h001'> Patient Reg Num:   {name}</h1></td>
                    <td> <h1 className='form-h001'>Gender:{gender}</h1> </td>
                  </tr><br></br>
                  <tr>
                    <td><h1 className='form-h001'>Clinic:   {clinic}</h1></td>
                    <td><h1 className='form-h001'>Reported Date: {reportedDate}</h1></td>
                  </tr>
                </table>
              <br></br><br></br><br></br>

              <h1 className="generateh1">Test Details</h1><br></br><br></br>
                <div className="generatetble">
                  <h1 className='form-h001'>Specimen No:{specimenNo}</h1><br></br>
                  <h1 className='form-h001'>Result: {result}</h1><br></br><br></br><br></br><br></br><br></br>
                  <h1 className='form-h001'>Conclusion:{conclusion}</h1><br></br>
                </div>
              </div>

        <br></br>

        </div>

        </div>

      </div>

    </div>
  )
};

export default ReportGenerate;


 