import React from "react";
import {Route, Routes} from "react-router-dom";


//Tharindu
import AddPatient from "./components/Patient/AddPatient";
import Patients from "./components/Patient/Patients";
import UpdatePatientDetails from "./components/Patient/UpdatePatientDetails"
import ScanPatientQRRec from "./components/Patient/ScanQRCodeReception"
import ScanPatientQRDoc from "./components/Patient/ScanQRCodeDoctor";
import PatientProfileForDoc from "./components/Patient/PatientProfileForDoc"
import PatientProfileForReception from "./components/Patient/PatientProfileForReception";
import AddPrescription from "./components/Patient/Prescription/AddPrescription";
import ViewPrescriptions from "./components/Patient/Prescription/Prescriptions";
import PatientReports from "./components/Patient/PatientReports";
import PatientProfileAftrReg from "./components/Patient/PatientProfileAftrReg";
import PatientQRCode from "./components/Patient/GenQRCode";
//import PatientFooter from "./components/Patient/Footer";
import PatientLogin from "./components/Patient/patientLogin/PatientLogin";
import PatientHomeForReception from "./components/Patient/PatientHomeForReception";
import PatientHome from "./components/Patient/PationMainH1/PatientHome"
import PatientProfileForPhnLab from "./components/Patient/PatientProfileForPhnLab";
import ViewLabPrescriptions from "./components/Laboratary/Patient/LabPrescriptions";
import ViewDrugPrescriptions from "./components/Phamacy/DrugPrescriptions";
import PatientProfileForPharmacy from "./components/Patient/PatientForPharmacy";


//Shamindi
//import LaboratoryHeader from "./components/Laboratary/Header";
import AddReport from "./components/Laboratary/Add Test/AddReport";
import Others from './components/Laboratary/Others';
import ReportsByID from "./components/Laboratary/Add Test/ReportsByID";
import Reports from "./components/Laboratary/Add Test/Reports"
import ReportDetail from "./components/Laboratary/Add Test/ReportDetail";
import ReportsGenerate from "./components/Laboratary/Generate Report/ReportsGenerate";
import CreateReport from "./components/Laboratary/Generate Report/CreateReport";
import ScanQR from "./components/Laboratary/ScanQR";
import Footer from "../src/components/Home/Footer";
import BeforeLoginLabHome from "../src/components/Laboratary/Before Login Lab Home/BeforeLoginLabHome";
import LaboratoryLogin from "./components/Laboratary/LabLogin/LaborataryLogin";
import LabMainHome from "./components/Laboratary/LabMainHome";


//Dilshan
import AddDrugs from "./components/Phamacy/AddDrugs";
import Drugs from "./components/Phamacy/Drugs";
import UpdateDrugs from "./components/Phamacy/UpdateDrugs";
import ScanDPationQR from "./components/Phamacy/ScanDPationQR";
import DrugReports from "./components/Phamacy/DrugReports";
import PhamacyHome from "./components/Phamacy/Phamacy_Home_02/PhamacyHome";
import PhamacyHome1 from "./components/Phamacy/Phamacy_Home_01/PhamacyHome1";
import PhamacyLogin from "./components/Phamacy/PLogin/PhamacyLogin";
//import MainHome from "./components/Member/MainHome";
/*import Nav from "./components/Home/Nav";
import Slide from "./components/Home/Slide";
import Part from "./components/Home/Part";
import About from "./components/Home/About";
import ConUs from "./components/Home/ConUs";
import Footer from "./components/Home/Footer";
import PhamacyCreateAcc from "./components/Phamacy/PhamacyCreateAcc";
import DrugDetails from "./components/Phamacy/DrugDetails";*/
import MainHome from "./components/Home/MainHome";
import DrgsLimits from "./components/Phamacy/DrgsLimits"


//Chamath
//import AppointmentHeader from "./components/AppointmentHeader"
import AddAppointment from "./components/Appointment/AddAppointment";
import AppointmentsHome01 from "./components/Appointment/AppointmentHome01/AppointmentHome01";
import Appointments from "./components/Appointment/Appointments";
import ScanAppointmentQR from "./components/Appointment/ScanAppointmentQR";
import AppointmentDetail from "./components/Appointment/AppointmentDetails"
import ScanedAppointment from "./components/Appointment/ScanedAppointment";
import AppointmentRequests from "./components/Appointment/AppointmentRequests";
import ReportForm from "./components/Appointment/GenerateReport";
import AppointmentLogin from "./components/Appointment/AppointmentLogin"
import Login from "./components/Appointment/Login/Login";
import AppointmentHome02 from "./components/Appointment/AppointmentHome02/AppointmentHome02";

//Tharushi
import ViewClinics from "./components/Clinics/ClinicView"
import ClinicLogin from "./components/Clinics/ClinicLogin/ClinicLoginPage";
import ClinicHome1 from "./components/Clinics/ClinicMainH1/ClinicHomeBfrLogin";
import ClinicHome from "./components/Clinics/ClinicHome";
import AddClinic from "./components/Clinics/AddClinic";
import UpdateClinic from "./components/Clinics/UpdateClinic";
import TodaysSchedule from "./components/Clinics/TodaysSchedule";
import ClinicReportHome from "./components/Clinics/ClinicReportHome"
import ClinicReport from "./components/Clinics/ClinicReport"

//Amadee
import DoctorAdminHome from "./components/Doctor/DoctorAdminHome";
import AddDoctor from "./components/Doctor/AddDoctor";
import ViewDoctors from "./components/Doctor/ViewDoctors";
import DoctorDetail from "./components/Doctor/DoctorDetail";
import DoctorLogin from "./components/Doctor/DoctorLogin";
import DoctorsViewProfile from "./components/Doctor/DoctorsViewProfile";
import DoctorHome from "./components/Doctor/DoctorHome";
import GenerateReport from "./components/Doctor/GenerateReport";
import DocAdminLogin from "./components/Doctor/DocAdminLogin";

//Ishuwara
import MemberAdd from "./components/Member/MemberAdd";
import ViewMembers from "./components/Member/ViewMembers";
//import MemberAssign from "./components/Member/MemberAssign";
import MainHomeMember from "./components/Member/MainHomeMember";
import MemberDetails from "./components/Member/MemberDetails";
import MemberLogin from "./components/Member/MemberLogin";
import ScanQRMember from "./components/Member/ScanQr"
import MemberScanQR from "./components/Member/ScanQr"
import MemberHome from "./components/Member/MemberHome";
import MemberAttendence from "./components/Member/AttendenceReport";
import MemberAssign from "./components/Member/MemberAssign";

//Hemsith
import InventoryLogin from "./components/Inventory/Login/InventoryLogin";
import InventoryLoginHome from "./components/Inventory/InventoryLoginHome";
import InventoryMainHome from "./components/Inventory/InventoryMainHome";
import AddItem from "./components/Inventory/AddItem";
import AddSupplier from "./components/Inventory/AddSupplier";
import ViewSuppliers from "./components/Inventory/ViewSuppliers";
import ItemDetails from "./components/Inventory/ItemDetails";
import OrderStocks from "./components/Inventory/OrderStocks";
import ViewAllItems from "./components/Inventory/ViewAllItems";
import SupplierDetails from "./components/Inventory/SupplierDetails";
import InventoryDailyReport from "./components/Inventory/InventoryDailyReport";



function App() {
  return (
      <React.Fragment>
      <main>
    <Routes>
      {/* Tharindu */}
      
      <Route path="/patientLogin" element={<PatientLogin/>} />
      <Route path = "/addPatient" element={<AddPatient/>} exact/>
      <Route path = "/viewPatients" element={<Patients/>} exact/>
      <Route path = "/scanQrRec" element={<ScanPatientQRRec/>} exact/>
      <Route path = "/scanQrDoc" element={<ScanPatientQRDoc/>} exact/>
      <Route path = "/viewPatientUpdate/:id" element = {<UpdatePatientDetails/>} exact/>
      <Route path = "/viewPatientProfileForDoc/:id" element = {<PatientProfileForDoc/>} exact/>
      <Route path = "/addPrescription/:id" element = {<AddPrescription/>} exact/>
      <Route path = "/viewPrescriptions/:id" element = {<ViewPrescriptions/>} exact/>
      <Route path = "/viewPatientProfileForReception/:id" element={<PatientProfileForReception/>}exact/>
      <Route path = "/viewPatients/:regDate" element = {<PatientReports/>}exact/>
      <Route path = "/patientHome1" element = {<PatientHomeForReception/>}exact/>
      <Route path = "/viewRegPatient/:regName" element = {<PatientProfileAftrReg/>}exact/>
      <Route path = "/genQRCode/:id" element = {<PatientQRCode/>} exact/>
      <Route path = "/PatientLog" element={<PatientHomeForReception/>} />
      <Route path = "/patientLogin" element={<PatientLogin/>}/>
      <Route path = "/PatientHome" element={<PatientHome/>} />
      <Route path = "/pproforlab/:id" element={<PatientProfileForPhnLab/>}/>
      <Route path = "/pproforpharmacy/:id" element={<PatientProfileForPharmacy/>}/>
      <Route path = "/viewLabPrescriptions/:id" element={<ViewLabPrescriptions/>}/>
      <Route path = "/ViewDrugPrescriptions/:id" element={<ViewDrugPrescriptions/>}/>
      <Route path = "/patiLogout" element = {<PatientHome/>}exact/>

      {/* Dilshan */}
      <Route path="/" element={<MainHome/>} />
      <Route path="/PhmacyHome" element={<PhamacyHome1/>} />
      <Route path="/AddDrugs" element={<AddDrugs/>} />
      <Route path="/Drugs/:id" element={<UpdateDrugs/>} />
      <Route path="/AddNewDrugs" element={<Drugs/>} />
      <Route path="/UpdateDrugs" element={<Drugs/>} />
      <Route path="/DrugDetails" element={<Drugs/>} />
      <Route path="/DeleteDrug" element={<Drugs/>} />
      <Route path="/ScanDPationQR" element={<ScanDPationQR/>} />
      <Route path="/DrugReport" element={<DrugReports/>} />
      <Route path="/PhamacyHome" element={<PhamacyHome/>} />
      <Route path="/phamacyLogin" element={<PhamacyLogin/>} />
      <Route path="/phamacyLog" element={<PhamacyHome/>} />
      <Route path="/phamacyLogout" element={<PhamacyHome1/>} />
      <Route path="/DOrders" element={<DrgsLimits/>} />

      {/* Tharushi */}
      <Route path="/clinicHomeBfLogin" element={<ClinicHome1/>}/>
      <Route path="/clinLogout" element={<ClinicHome1/>}/>
      <Route path="/clinicLogin" element={<ClinicLogin/>}/>
      <Route path="/clinicHome" element={<ClinicHome/>} exact/>
      <Route path="/chhh" element={<ClinicHome/>} exact/>
      <Route path="/clinic/viewClinics" element={<ViewClinics/>} exact/>
      <Route path="/clinic/addClinic" element={<AddClinic/>} exact/>
      <Route path="/clinic/updateClinic" element={<UpdateClinic/>} exact/>
      <Route path="/clinic/todaysSchedule" element={<TodaysSchedule/>} exact/>
      <Route path="/clinic/getReports" element={<ClinicReportHome/>} exact/>
      <Route path="/clinic/viewReport" element={<ClinicReport/>} exact/>


      {/* Shamindi */}
      <Route path="/labHome" element={<BeforeLoginLabHome />} exact></Route>
      <Route path="/labMainHome" element={<LabMainHome />} exact></Route>
      <Route path= "/labLogin" element={<LaboratoryLogin/>} exact></Route>
      <Route path="/labLog" element={<LabMainHome />} exact></Route>
      <Route path="/labadd/:id" element={<AddReport />} exact></Route>
      <Route path="/labreports/:id" element={<ReportsByID />} exact></Route>
      <Route path="/labscan" element={<ScanQR />} exact></Route>
      <Route path="/labothers" element={<Others />} exact></Route>
      <Route path="/reports/:id" element={<ReportDetail />} exact></Route>
      <Route path="/generatereports" element={<ReportsGenerate />} exact></Route>
      <Route path="/create/" element={<CreateReport />} exact></Route>
      <Route path="/labreports" element={<Reports/>} exact></Route>
      <Route path="/reports" element={<Reports/>} exact></Route>
      <Route path="/labLogout" element={<BeforeLoginLabHome />} exact></Route>
      <Route path="/labadd" element={<AddReport />} exact></Route>


      {/* Chamath */}
      <Route path="/appointmentlogin" element={<AppointmentLogin />} exact />
      <Route path="/AppointmentsHome01" element={<AppointmentsHome01 />} exact />
      <Route path="/AppointmentsLogin" element={<Login />} exact />
      <Route path="/AppointmentsLog" element={<AppointmentHome02 />} exact />
      <Route path="/addAppointment/:id" element={<AddAppointment />} exact />
      <Route path="/add" element={<AddAppointment />} exact />
      <Route path="/scanqrappointment" element={<ScanAppointmentQR />} exact />
      <Route path="/appointments" element={<Appointments />} exact />
      <Route path="/appointments/:id" element={<AppointmentDetail />} exact />
      <Route path="/report" element={<ReportForm />} exact />
      <Route path="/appointments/scaned/:patient_id" element={<ScanedAppointment />} exact />
      <Route path="/requests" element={<AppointmentRequests />} exact />
      <Route path="/Deletereport" element={<Appointments />} />
      <Route path="/appointmentsreq" element={<AppointmentRequests />} />
      <Route path="/AppointmentsHome" element={<AppointmentHome02 />} />
      <Route path="/AppointmentsLogout" element={<AppointmentsHome01 />} exact />
      
      {/* Amadee */}
      <Route path = "/docHome" element={<DoctorHome/>} exact/>
      <Route path = "/mainHome" element={<DoctorHome/>} exact/>
      <Route path = "/homeAdmin" element={<DoctorAdminHome/>} exact/>
      <Route path = "/docAdminLogin" element={<DocAdminLogin/>} exact/>
      <Route path = "/dailyReport" element={<GenerateReport/>} exact/>
      <Route path = "/addDoctor" element={<AddDoctor/>} exact/>
      <Route path = "/viewDoctors" element={<ViewDoctors/>} exact/>
      <Route path = "/doctors/:id" element={<DoctorDetail/>} exact/>
      <Route path = "/doctorLogin" element={<DoctorLogin/>} exact/>
      <Route path = "/doctorsViewProfile" element={<DoctorsViewProfile/>} exact/>

      {/* Ishuwara */}
      <Route path="/staffHome" element={<MainHomeMember/>} exact/>
      <Route path="/memberlogin" element={<MemberLogin/>} exact/>
      <Route path="/memberhome" element={<MemberHome/>} exact/>
      <Route path="/MainHomeMember" element={<MainHomeMember/>} exact/>
      <Route path="/MemberAdd" element={<MemberAdd/>} exact/>
      <Route path="/ViewMembers" element={<ViewMembers/>} exact/>
      <Route path="/assign" element={<MemberAssign/>} exact/>
      <Route path="/memberreport" element={<MemberAttendence/>} exact/>
      <Route path="/scanmemberqr" element={<ScanQRMember/>} exact/>
      <Route path='/members/:id' element={<MemberDetails/>}exact/>
      <Route path="/memLogout" element={<MainHomeMember/>} exact/>

      {/* Hemsith */}
      <Route path = "/InventoryLogin" element={<InventoryLogin/>} exact/>
      <Route path = "/InventoryLoginHome" element={<InventoryLoginHome/>} exact/>
      <Route path = "/InventoryMainHome" element={<InventoryMainHome/>} exact/>
      <Route path = "/AddItem" element={<AddItem/>} exact/>
      <Route path = "/AddSupplier" element={<AddSupplier/>} exact/>
      <Route path = "/OrderStocks" element={<OrderStocks/>} exact/>
      <Route path = "/InventoryDailyReport" element={<InventoryDailyReport/>} exact/>
      <Route path = "/ViewSuppliers" element={<ViewSuppliers/>} exact/>
      <Route path = "/ViewAllItems" element={<ViewAllItems/>} exact/>
      <Route path = "/items/:id" element={<ItemDetails/>} exact/>
      <Route path = "/suppliers/:id" element={<SupplierDetails/>} exact/>
      </Routes>
     </main>
     
     

      <footer>
        <br></br>
      <Footer/>
      </footer>
        
      </React.Fragment>
   
  );
}


export default App;
