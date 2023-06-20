import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../CSS/Report.css';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Report = (props) => {
  const history = useNavigate();
  const {_id,patientID,patientName,testName,description,result,other} = props.report;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/reports/${_id}`)
      .then(alert("Deleted Succesfully"))
      .then((res) => res.data)
      .then(() => history(`/pproforlab/${patientID}`))
      .then(() => history(`/labreports/${patientID}`));
  };

  

  return (
  <div className="ful-rep">

      <div className="card-report">

        <div className="font">

        <h1 className='hem-card-text'>Patient Reg Number:   {patientID}</h1> 
        <h1 className='hem-card-text'>Patient Reg Number:    {patientName}</h1>    
        <h1 className='hem-card-text'>Patient Name:  {testName}</h1> 
        <h1 className='hem-card-text'>Result:  {result}</h1> 
        <h1 className='hem-card-text'>Date:  {other}</h1> 
        <h1 className='hem-card-text'>Description:  {description}</h1> 
      
      </div>
  
      <Button LinkComponent={Link} to={`/reports/${_id}`} variant="contained"
                    sx={{
                        mt: '1rem',
                        marginRight: '1rem',
                        borderRadius: '8px',
                        backgroundColor: '#007bff',
                        '&:hover': { backgroundColor: '#006FE6' },
                    }}
                startIcon={<EditIcon />}>Update</Button>
      
    
      <Button onClick={deleteHandler} variant="contained"
                    sx={{
                        mt: '1rem',
                        borderRadius: '8px',
                        backgroundColor: '#FF5252',
                        '&:hover': { backgroundColor: '#FF3939' }
                    }}
                startIcon={<DeleteIcon />}>Delete</Button>
        <br></br>     
        <br></br>

      </div>

  </div>
)
};

export default Report;
