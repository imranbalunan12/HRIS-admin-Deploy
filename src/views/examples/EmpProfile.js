
import React, {useState, useEffect} from "react";

// reactstrap components
import 'bootstrap';

import sign from '../../assets/img/brand/sign.png';
import api from 'api/api'



import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

import { v4 as uuidv4 } from 'uuid';
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { get } from "jquery";

function EmpProfile  ( props )  {
  

      const [modal, setModal] = useState(false);

      const toggle = () => setModal(!modal);

// ------------------- FOR ADD ROW BTTN
  

  const [inputFields8, setInputFields8] = useState([
    {id: uuidv4(),  NatureOff: '' ,  courtJuri: '', dateFiled: ''}
  ]);


  // const handleAddFields = () => {
  //   setInputFields([...inputFields, { Name: '', dateTaken: '', score: ''}])
  // }
 
  // const handleAddFields2 = () => {
  //   setInputFields2([...inputFields2, { Name2: '', dateTaken2: '',}])
  // }

  // const handleAddFields3 = () => {
  //   setInputFields3([...inputFields3, { empName: '' , empAdd: '',  empTelNo: '', empSuVisor: '', empTitle: '', empStartIncome: '', empLastIncone: '', empRFL: '', empYoN: '', empReason: '' }])
  // }

  // const handleAddFields4 = () => {
  //   setInputFields4([...inputFields4, { Name4: '', occupation: '', age: '', emp:''}])
  // }

  // const handleAddFields5 = () => {
  //   setInputFields5([...inputFields5, { Namechld: '', agechld: ''}])
  // }

  // const handleAddFields6 = () => {
  //   setInputFields6([...inputFields6, { Nameref: '' ,  occref: '', empref:''}])
  // }

  // const handleAddFields7 = () => {
  //   setInputFields7([...inputFields7, { NameOrg: '' ,  descOrg: '',}])
  // }

  // const handleAddFields8 = () => {
  //   setInputFields8([...inputFields8, {NatureOff: '' ,  courtJuri: '', dateFiled: ''}])
  // }



  const handleChangeInput8 = (id, event) => {
    const newInputFields8 = inputFields8.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields8(newInputFields8);
  }

  

// ---------------------------------

//-------FOR SALARY-----------------


// const handleAddFields9 = () => {
//     setInputFields9([...inputFields9, { prevSal: '' ,  amountInc: '', DOI: '', descSal:''}])
//   }

//   const handleChangeInput9 = (id, event) => {
//     const newInputFields9 = inputFields9.map(i => {
//       if(id === i.id) {
//         i[event.target.name] = event.target.value
//       }
//       return i;
//     })
//     setInputFields9(newInputFields9);
//   }
 //education


//getPersonalinfo
const emp_id = localStorage.getItem('id')
const getToken = localStorage.getItem('token')
const [educationData, setEducationData] = useState([])
const [personalData, setPersonalData] = useState([])
const [ExamsTakenData, setExamsTakenData] = useState([])
const [SkillsData, setSkillsData] = useState([])
const [SeminarData, setSeminarData] = useState([])
const [JobHistoryData, setJobHistoryData] = useState([])
const [FamilyData, setFamilyData] = useState([])
const [SiblingData, setSiblingData] = useState([])
const [ChildrenData, setChildrenData] = useState([])
const [MarriedData, setMarriedData] = useState([])
const [MedicalData, setMedicalData] = useState([])
const [RefData, setRefData] = useState([])
const [OrgData, setOrgData] = useState([])
const [OffenseData, setOffenseData] = useState([])
const [EmergencyData, setEmerencyData] = useState([])
const [SignatureData, setSignatureData] = useState([])



const getSignature = () => {
  api.get(`employees/signature/${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setSignatureData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getEmergency = () => {
  api.get(`employees/emergency/${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setEmerencyData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getOffense = () => {
  api.get(`employees/offense/${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setOffenseData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getOrg = () => {
  api.get(`employees/org?employee_id=${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setOrgData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getRef = () => {
  api.get(`employees/reference?employee_id=${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setRefData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getMedical = () => {
  api.get(`employees/med-history/${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setMedicalData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getChildren = () => {
  api.get(`employees/children?employee_id=${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setChildrenData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getMarried = () => {
  api.get(`employees/married/${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setMarriedData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getSibling= () => {
  api.get(`employees/sibling?employee_id=${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setSiblingData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getFamily = () => {
  api.get(`employees/family/${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setFamilyData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getJobHistory = () => {
  api.get(`employees/job-history?employee_id=${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setJobHistoryData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getSeminar= () => {
  api.get(`employees/seminars-taken?employee_id=${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setSeminarData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getSkills= () => {
  api.get(`employees/skills/${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setSkillsData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}


const getPersonalInfo = () => {
  api.get(`employees/list/${emp_id}`)
  .then(res=>{
    setPersonalData(res)
  })
  .catch(err => {
    console.log(err)
  })
}

const getEduc_bg = () => {
  api.get(`employees/education/${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setEducationData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}
const getExamsTaken= () => {
  api.get(`employees/exams-taken?employee_id=${emp_id}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    console.log(res)
    setExamsTakenData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}
const [profileData, setProfileData] = useState([])

  const getProfile = () => {
  api.get('employees/list/', {headers: {Authorization: `Token ${getToken}`}})
  .then(res=>{
    setProfileData(res)
  })
  .catch(err=>{
    console.log(err)
  })
}


useEffect(()=>{
    getProfile()
    getPersonalInfo()
    getEduc_bg()
    getExamsTaken()
    getSkills()
    getSeminar()
    getJobHistory()
    getFamily()
    getSibling()
    getMarried()
    getChildren()
    getMedical()
    getRef()
    getOrg()
    getOffense()
    getEmergency()
    getSignature()
}, [])




  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">A. PERSONAL INFORMATION</h2>
                  </Col>
                
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                
                <div className="pl-lg-0">
                <Row style={{display: "inline-flex", width: "100%"}}>
                <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-username"
                          >
                            Position:
                          </label>
                          <Col sm='8'>
                          <FormGroup>
                            <Input 
                              type="text" 
                              
                              class="form-control"
                              id="input-username"
                              disabled
                              placeholder="Sample"
                        
                             >
                           
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                 

                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-sa"
                          >
                          <span style={{display: "inline-flex"}}>S.A<br/>Number:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-sa"
                            type="text"
                            value={personalData.sa_no}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                     <Row style={{display: "inline-flex", width: "100%"}}>
                     <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-dept"
                          >
                            Department:
                          </label>
                          <Col sm='8'>
                          <FormGroup>
                            <Input 
                              type="text" 
                             
                              class="form-control"
                              id="input-dept"
                              placeholder="IT Department"
                              disabled
                      
                        
                             >
                           
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-company"
                          >
                            Company:
                          </label>
                          <Col sm='8'>
                          <FormGroup>
                            <Input 
                              type="text" 
                              
                              class="form-control"
                              id="input-company"
                              placeholder="Minedomain Inc."
                              disabled
                      
                        
                             >
                         
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                  
                     
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  "
                            htmlFor="input-deptRole"
                          >
                            Department <br/>Role:
                          </label>
                          <Col sm='8'>
                          <FormGroup>
                            <Input 
                              type="text"
                              class="form-control"
                              id="input-deptRole"
                              placeholder="Normal"
                              disabled
                      
                        
                             >
                        
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
             
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  "
                            htmlFor="input-empStat"
                          >
                            Employee Status:
                          </label>
                          <Col sm='8'>
                          <FormGroup>
                            <Input 
                              type="text" 
                              class="form-control"
                              id="input-empStat"
                              placeholder="Contractual"
                              disabled
                      
                        
                             >
                            <option >Select</option>
                              <option selected>Contractual</option>
                              <option>Probationary</option>
                              <option>Regular</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>


                    </Row>



                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-dateemp"
                          >
                              Date Employed:
                          </label>
                          <Col sm="5">
                    
                            <Input   
                              type="date"
                              name="date"
                              id="input-dateemp"
                              value={personalData.date_employed}
                              
                             
                              disabled
                            />
                        
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-supervisor"
                          >
                            Supervisor:
                          </label>
                          <Col sm='8'>
                          <FormGroup>
                            <Input 
                              type="text" 
                              class="form-control"
                              id="input-supervisor"
                              placeholder="Josiah P. Cavitana"
                              disabled
                      
                        
                             >
                            <option disabled selected>Select</option>
                              <option ></option>
                              <option></option>
                              <option></option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                
               
                   
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-empNo"
                          >
                              Employee Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empNo"
                            type="text"
                            value={personalData.employee_number}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-name"
                          >
                            Name:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-name"
                            type="text"
                            value={personalData.name}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                
                 
                    </Row>

                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-othName"
                          >
                              <span style={{display: "inline-flex"}}>Suffix:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-othName"
                            placeholder="(ex. Jr. Sr. III II )" 
                            type="text"
                            value={personalData.other_name}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-nickName"
                          >
                            Nickname:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nickName"
                            type="text"
                            value={personalData.nickname}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
             
                   
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-DoB"
                          >
                            Date of Birth:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-DoB"
                            type="date"
                            value={personalData.date_of_birth}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-Weight"
                          >
                            Weight:
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-Weight"
                            type="text"
                            value={personalData.weight}
                            disabled
                          />
                          </Col >
                          
                          <label
                            class="col-sm-2 col-form-label "
                            htmlFor="input-Height"
                          >
                            <span style={{display: "inline-flex"}}>Height:</span>
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-first-Height"
                            type="text"
                            value={personalData.height}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
               
                
                  
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-placeBirth"
                          >
                            Place of Birth:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-placeBirth"
                            type="text"
                            placeholder="Lorem Ipsum City"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "

                            htmlFor="input-civStatus"
                          >
                            Civil Status:
                          </label>
                          <Col sm="3">
                          <Input 
                              type="text" 
                              name="select"
                              id="input-civStatus"
                              value={personalData.civil_status}
                              disabled
                          
                             >
                            
                            </Input>
                          </Col >
                          
                          <label
                            class="col-sm-2 col-form-label  "
                            htmlFor="gender"
                          >
                            <span style={{display: "inline-flex"}}>Gender:</span>
                          </label>
                          <Col sm="3">
                          <Input 
                               disabled
                              type="text"
                              name="select" 
                              id="gender"
                              value={personalData.gender}
                              >
                           
                         
                            </Input>
                          </Col>
                        </FormGroup>
                      </Col>
             
  
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Religion"
                          >
                            Religion:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-Religion"
                            type="text"
                            value={personalData.religion}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-email"
                          >
                            Email:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-email"
                            type="text"
                            placeholder="Lorem@gmail.com"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
  
              
                
                  
                  
                    </Row>
                    {/* Need Ayusin */}
              

                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-landNo"
                          >
                            Landline Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-last-landNo"
                            type="text"
                            value={personalData.tel_no}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-cpNo"
                          >
                            Cellphone Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-cpNo"
                            type="text"
                            value={personalData.cel_no}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
               
               
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-provAdd"
                          >
                            Provincial Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-cpNo"
                            type="text"
                            value={personalData.prov_address}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-cityAdd"
                          >
                            <span style={{display: "inline-flex"}}>City<br/>Address:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-Religion"
                            type="text"
                            value={personalData.city_address}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>  
                  
               
                </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-pagibig"
                          >
                            Pag-Ibig Fund No.:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-pagibig"
                            type="text"
                            value={personalData.pagibig_no}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-sss"
                          >
                            <span style={{display: "inline-flex"}}>SSS<br/>Number:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-sss"
                            type="text"
                            value={personalData.sss_no}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                     
                 
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                    
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-philHealth"
                          >
                            PhilHealth Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-philHealth"
                            type="text"
                            value={personalData.philhealth_no}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-tin"
                          >
                            TIN:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-tin"
                            type="text"
                            value={personalData.tin_no}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>


                {/* EDUCATIONAL BG */}
               
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">B. EDUCATIONAL BACKGROUND</h1>
                      </Col>
                   </Row>
             
                  
                
                  <div className="pl-lg-0">
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-primSchool"
                          >
                           Primary School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-primSchool"
                            type="text"
                            value={educationData.primary_school}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-secondSchool"
                          >
                           Secondary School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-secondSchool"
                            type="text"
                            value={educationData.sec_school}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-primAddSchool"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-primAddSchool"
                            type="text"
                            value={educationData.primary_address}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-secondAddSchool"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-secondAddSchool"
                            type="text"
                            value={educationData.sec_address}
                            disabled

                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearGradPrim"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input 
                            type="text" 
                            name="select" 
                            id="yearGradPrim" 
                            value={educationData.primary_grad} 
                            disabled>
                            
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearGradSecond"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input 
                            type="text" 
                            name="select" 
                            id="yearGradSecond" 
                            value={educationData.sec_grad}   
                            disabled>
                          
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
          {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-4"></h1>
                      </Col>
                   </Row>
         {/* ---------------------------------------------------- */}

                   <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-college"
                          >
                          College:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-college"
                            type="text"
                            value={educationData.col_school}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-gradSch"
                          >
                           Graduate School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-gradSch"
                            type="text"
                            value={educationData.grad_school}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-addCollSch"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-addCollSch"
                            type="text"
                            value={educationData.col_address}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-addGradSch"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-addGradSch"
                            type="text"
                            value={educationData.grad_address}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-degColl"
                          >
                           Degree:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-degColl"
                            type="text"
                            value={educationData.col_degree}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-degGrad"
                          >
                           Degree:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-degGrad"
                            type="text"
                            value={educationData.grad_degree}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearColl"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input
                             type="text" 
                             name="select" 
                             id="yearColl" 
                             value={educationData.col_grad}
                             disabled>
                           
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearGrad"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input 
                            type="text"
                              name="text" 
                              id="yearGrad"
                              value={educationData.grad_grad}
                              disabled> 
                        
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-degGrad"
                          >
                           Others:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-degGrad"
                            type="text"
                            value={educationData.others}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">EXAMINATIONS TAKEN</h1>
                      </Col>
                   </Row>

                   <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-examName"
                          >
                            Name:
                          </label>
                          <Col sm="8">
                              <Input
                                  class="form-control"
                                  id="input-examName"
                                  name="Name"
                                  label="Name"
                   
                                  value={ExamsTakenData.exam_name}
                                  disabled
                               
                                />
                            </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6" >
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-examTaken"
                          >
                            Date Taken:
                          </label>
                            <Col sm="5" >
                                <Input
                                  type="text"
                                  class="form-control"
                                  id="input-examTaken"
                                  name="dateTaken"
                                  label="Name"
                                  value={ExamsTakenData.date_taken}
                                  disabled
                         
                                  
                                  
                                />
                             </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                              
                    <Row style={{display: "inline-flex", width: "100%"}}>
                        <Col  sm="6" >
                          <FormGroup row>
                              <label
                            
                                class="col-sm-3 col-form-label"
                                htmlFor="input-scoreExam"
                              >
                                Score:
                              </label>
                             <Col sm="5">
                                <Input
                                    class="form-control"
                                    id="input-scoreExam"
                                    name="score"
                                    variant="filled"
                                    value={ExamsTakenData.result + "%"}
                                    disabled
                                />
                             </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                  
                 
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">OTHER SKILLS / MACHINES OPERATED</h1>
                      </Col>
                   </Row>
                   
                   <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-skills"
                            
                          >
                            Skills:
                          </label>
                          <Col  >
                          <Input
                            class="form-control"
                            id="input-skills"
                            type="text"
                            value={SkillsData.skill_name}
                            disabled
                            
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">SEMINARS / TRAININGS ATTENDED</h1>
                      </Col>
                   </Row>
                  
                   
                             <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6" >
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-nameSeminar"
                          >
                            Name:
                          </label>
                     
                        
                      <Col md="9">
                    
                          <Input
                                class="form-control"
                                id="nameSeminar"
                                name="Name2"
                                label="Name"
                                value={SeminarData.seminar_name}
                                disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-seminarTaken"
                          >
                            Date Taken:
                          </label>
                     
                      
                      <Col sm="5">
                     
                          <Input
                            
                                  type="date"
                                  class="form-control"
                                  id="dateTaken"
                                  name="dateTaken2"
                                  label="Name"
                                  value={SeminarData.seminar_date}
                                  disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">C. EMPLOYMENT HISTORY</h1>
                      </Col>
                   </Row>
                      {/* ---------------------------------------------------- */}
                      <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3"
                            htmlFor="input-empName"
                          >
                            Employer Name:
                          </label>
                     
                       
                      <Col sm="9">
                      
                          <Input
                                class="form-control"
                                id="empName"
                                name="empName"
                                label="empName"
                                value={JobHistoryData.employer_name}
                                disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empAdd"
                          >
                            Address:
                          </label>
                     
                     
                      <Col sm="9">
                     
                          <Input
                             class="form-control"
                             id="empAdd"
                             name="empAdd"
                             label="empAdd"
                             value={JobHistoryData.company_address}
                             disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-empTelNo"
                          >
                           Telephone Number:
                          </label>
                          <Col sm="9">
                          <Input
                             class="form-control"
                             id="input-empTelNo"
                             name="empTelNo"
                             label="empTelNo"
                             value={JobHistoryData.company_contact_no}
                             disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empVisor"
                          >
                           Supervisor:
                          </label>
                          <Col sm="9">
                          <Input
                                class="form-control"
                                id="input-empVisor"
                                name="empSuVisor"
                                label="empSuVisor"
                                value={JobHistoryData.company_supervisor}
                                disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="empTitle"
                          >
                           Job Title:
                          </label>
                          <Col sm="9">
                          <Input
                               class="form-control"
                               id="empTitle"
                               name="empTitle"
                               label="empTitle"
                               value={JobHistoryData.job_title}
                               disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-empStartingIncome"
                          >
                           Starting Income:
                          </label>
                          <Col sm="9">
                          <Input
                              class="form-control"
                              id="input-empStartingIncome"
                              name="empStartIncome"
                              label="empStartIncome"
                              value={JobHistoryData.starting_income}
                              disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-empLastIncome"
                          >
                           <span style={{display: "inline-flex"}}>Last<br/>Income:</span>
                          </label>
                          <Col sm="9">
                          <Input
                              class="form-control"
                              id="input-empLastIncome"
                              name="empLastIncone"
                              label="empLastIncone"
                              value={JobHistoryData.last_income}
                              disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 "
                            htmlFor="empRFL"
                          >
                            Reason for Leaving:
                          </label>
                     
                       
                      <Col md="9">
                     
                          <Input
                                class="form-control"
                                id="empRFL"
                                name="empRFL"
                                label="empRFL"
                                value={JobHistoryData.reason_leave}
                                disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
               
                    <Row>
                      <Col sm="12" >
                        <FormGroup row >
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            Have you ever terminated in a job?
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                          <div class="form-check form-check-inline" >
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            name="terminated" 
                            id="inlineRadio1"
                            checked = {true ? [JobHistoryData.has_been_terminated] : false}

                            disabled
                            />
                            <label class="form-check-label" for="inlineRadio1">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            name="terminated" 
                            id="inlineRadio2" 
                           
                            disabled 
                            checked = {true ? [JobHistoryData.has_been_terminated] : false}
                             
                            />
                            <label class="form-check-label" for="inlineRadio2" >NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="11">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="details"
                          >
                             If yes, state the reason:
                          </label>
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    className="form-control-alternative"
                                    id="details"
                                    rows="5"
                                    
                                    disabled
                                    type="textarea"
                                
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>


                       {/* ---------------------------------------------------- */}
                       <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">D. FAMILY BACKGROUND</h1>
                      </Col>
                   </Row>
                      {/* ---------------------------------------------------- */}
                      <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-nameFather"
                          >
                          <span style={{display: "flex"}}>Father's<br/>Name:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nameFather"
                            type="text"
                            value={FamilyData.father_name}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-occuFather"
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-last-occuFather"
                            type="text"
                            value={FamilyData.father_occu}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                   
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  col-form-label"
                            htmlFor="input-bdayFather"
                          >
                            Birthday:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-bdayFather"
                            type="date"
                            value={FamilyData.father_birth}
                            disabled
                        
                          />
                          </Col >
                          
                          <label
                            class="col-sm-1  col-form-label"
                            htmlFor="input-ageFather"
                            
                          >
                             <span style={{display: "inline-flex"}}>Age:</span>
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="input-first-ageFather"
                            type="text"  
                            value={FamilyData.father_age}
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empFather"
                          >
                            Employer:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empFather"
                            type="text"
                            value={FamilyData.father_employer}
                            disabled
                         
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                      {/* ---------------------------------------------------- */}
                      <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
                     {/* ---------------------------------------------------- */}

                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-nameMother"
                          >
                           Mothers's Name:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nameMother"
                            type="text"
                            value={FamilyData.mother_name}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-occuMother"
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-occuMother"
                            type="text"
                            value={FamilyData.mother_occu}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-birthdayMother"
                          >
                            Birthday:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-birthdayMother"
                            value={FamilyData.mother_birth}
                            type="date"
                            disabled
                           
                          />
                          </Col >
                          
                          <label
                            class="col-sm-1 col-form-label"
                            htmlFor="input-ageMother"
                          >
                           <span style={{display: "inline-flex"}}>Age:</span>
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="input-ageMother"
                            type="text"
                            value={FamilyData.mother_age}
                            disabled
                       
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-empMother"
                          >
                            Employer:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empMother"
                            type="text"
                            placeholder="--"
                            value={FamilyData.mother_employer}
                            disabled
                      
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-addMother"
                          >
                            Address:
                          </label>
                     
                     
                      <Col md="8">
                   
                          <Input
                            class="form-control "
                            id="input-addMother"
                            type="text"
                           
                            value={FamilyData.family_address}
                            disabled
                            
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row >
                          <label
                            class="col-sm-3"
                            htmlFor="input-telMother"
                          >
                            Telephone Number:
                          </label>
                          <Col sm="8" >
                          <Input
                            class="form-control"
                            id="input-telMother"
                            type="text"
                            value={FamilyData.family_contact_no}
                            disabled
                         
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">BROTHERS & SISTERS</h1>
                      </Col>
                    </Row>

                                
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="nameBrother"
                          >
                            Name:
                          </label>
                     
                     
                      <Col md="9">
                     
                          <Input
                              class="form-control"
                              id="nameBrother"
                              name="Name4"
                              label="Name"
                              value={SiblingData.sibling_name}
                              disabled
                         
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-3 col-form-label"
                            htmlFor="occuBrother"
                          >
                            Occupation:
                          </label>
                     
                      
                      <Col sm="5" >
                          <Input
                              class="form-control"
                              id="occuBrother"
                              name="occupation"
                              label="Name"
                              value={SiblingData.sibling_occupation}
                              disabled
                        
                          />
                        </Col>
                                <label
                                  class="col-sm-1 col-form-label"
                                  htmlFor="ageBrother"
                                >
                                 <span style={{display: "inline-flex"}}>Age:</span>
                                </label>
                        
                          <Col sm="3">
                              <Input
                                  class="form-control"
                                  id="ageBrother"
                                  name="age"
                                  value={SiblingData.sibling_age}
                                  disabled
                              />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>



                    <Row style={{display: "inline-flex", width: "100%"}}> 
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="empBrother"
                          >
                            Employer:
                          </label>
                     
                        
                      <Col md="9">
                    
                          <Input
                              class="form-control"
                              id="empBrother"
                              name="emp"
                              label="Name"
                              value={SiblingData.sibling_employer}
                              disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                 


                    
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IF MARRIED</h1>
                      </Col>
                     </Row>

                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="nameSpouse"
                         
                          >
                            Name of Spouse:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="nameSpouse"
                            type="text"
                            value={MarriedData.spouse_name}
                            disabled
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="occuSpouse"
                          
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="occuSpouse"
                            type="text"
                            value={MarriedData.spouse_occupation}
                            disabled
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-birthdaySpouse"
                          >
                            Birthday:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-birthdaySpouse"
                            value={MarriedData.spouse_birth}
                            disabled
                     
                          />
                          </Col >
                          
                          <label
                            class="col-sm-1 col-form-label"
                            htmlFor="input-ageSpouse"
                            
                          >
                             <span style={{display: "inline-flex"}}>Age:</span>
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="input-first-ageSpouse"
                            type="text"
                            value={MarriedData.spouse_age}
                            disabled
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-empSpouse"
                          >
                            Employer Name:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empSpouse"
                            type="text"
                            value={MarriedData.spouse_employer}
                            disabled
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-spouseAdd"
                          >
                            Address:
                          </label>
                     
                     
                      <Col md="8">
                    
                          <Input
                            class="form-control "
                            id="input-spouseAdd"
                            type="text"
                            value={MarriedData.spouse_address}
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
 
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3"
                            htmlFor="input-nameChild"
                          >
                              <span style={{display: "inline-flex"}}>Name of<br/>Child:</span>
                          </label>
                     
                      
                      <Col sm="8" >
                     
                          <Input
                              class="form-control"
                              id="input-nameChild"
                              name="Namechld"
                              label="Name"
                              value={ChildrenData.child_name}
                              disabled
                          />
                          </Col>
                          </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label "
                            htmlFor="input-ageChild"
                          >
                            Age:
                          </label>
                     
                       
                     
                      <Col sm="2">
                      
                          <Input
                           class="form-control"
                           name="input-agechld"
                           id="ageChild"
                           value={ChildrenData.child_age}
                           disabled
                          />
                         
                      </Col>
                      </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">E. MEDICAL HISTORY</h1>
                      </Col>
                     </Row>
                     <Row >
                      <Col sm="12" >
                        <FormGroup row >
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            1. Have you had or do you have illnesses?
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                           
                          <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" name="illnesses" 
                            id="inlineRadio3" 
                            value="option1"
                            checked = {true ? [MedicalData.had_illness] : false} 
                            disabled />
                            <label class="form-check-label" for="inlineRadio3">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input"
                              type="radio" 
                              name="illnesses"
                              id="inlineRadio4" 
                              value="option2" 
                              disabled 
                              checked = {true ? [MedicalData.had_illness] : false} />
                            <label class="form-check-label" for="inlineRadio4">NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="11">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="details"
                          >
                            If yes, give details:
                          </label>
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    class="form-control"
                                    id="details"
                                    rows="5"
                                    disabled
                                    value={MedicalData.illness_details}
                                    type="textarea"
                                
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row >
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            2. Have you been hospitalized or under a doctor's care within the past 5 years?
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="hospitalized" 
                              id="inlineRadio5" 
                              value="option1" 
                              disabled
                              checked = {true ? [MedicalData.hospitalized] : false} />
                            <label class="form-check-label" for="inlineRadio5">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="hospitalized" 
                              id="inlineRadio6" 
                              value="option2"
                              disabled 
                              checked = {true ? [MedicalData.hospitalized] : false}/>
                            <label class="form-check-label" for="inlineRadio6">NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="11">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="details2"
                          >
                            If yes, give details:
                          </label>
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    class="form-control"
                                    id="details2"

                                    rows="5"
                                    
                                    disabled
                                    value={MedicalData.hospitalized_details}
                                    type="textarea"
                                   
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-5 col-form-label"
                            htmlFor="input-first-name"
                          >
                            3. Last Medical Checkup
                          </label>
                      
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="purpose"
                         
                          >
                           Purpose:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="purpose"
                            type="text"
                            value={MedicalData.last_checkup_purpose}
                            disabled
                       
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="place"
                         
                          >
                           Place:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="place"
                            type="text"
                            value={MedicalData.last_checkup_place}
                            disabled
                        
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="date"
                         
                          >
                           Date:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="date"
                            type="date"
                            value={MedicalData.last_checkup_date}
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                   

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>

                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-distMarks"
                          >
                            4. Distinguishing Marks:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-distMarks"
                            value={MedicalData.distinguishing_marks}
                            disabled
                            type="text"
                          
                         
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    {/* -------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">F. References</h1>
                      </Col>
                     </Row>
                     {/* -------------------------------------------- */}

                    
                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3   col-form-label"
                            htmlFor="input-Nameref"
                          >
                            Name:
                          </label>
                          <Col sm="9">
                          <Input
                           class="form-control"
                           id="nameRef"
                           name="Nameref"
                           label="Name"
                           value={RefData.ref_name}
                           disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  col-form-label"
                            htmlFor="input-Occuref"
                          >
                            Occupation:
                          </label>
                          <Col sm="9">
                          <Input
                        id="occRef"
                        class="form-control"
                        name="occref"
                        label="Name"
                        value={RefData.ref_occupation}
                        disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empref"
                          >
                            Employer:
                          </label>
                          <Col sm="9">
                          <Input
                           id="empRef"
                           class="form-control"
                           name="empref"
                           label="Name"
                           value={RefData.ref_employer}
                           disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>



                    {/* -------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">G. ORGANIZATIONS</h1>
                      </Col>
                     </Row>
                     {/* -------------------------------------------- */}
                   
                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3"
                            htmlFor="input-NameOrg"
                          >
                             <span style={{display: "inline-flex"}}>Organization<br/>Name:</span>
                          </label>
                     
                        
                      <Col sm="9">
                    
                          <Input
                                   id="nameOrg"
                                   class="form-control"
                                   name="NameOrg"
                                   label="Name"
                                   value={OrgData.org_name}
                                   disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Namedesc"
                          >
                          Descriptions:
                          </label>
                     
                       
                      <Col sm="9">
                      
                          <Input
                            id="descOrg"
                            class="form-control"
                            name="descOrg"
                            label="Name"
                            value={OrgData.org_desc}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>




                    <Row >
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            1. Have you ever been convicted, judicially or administratively of an offense or judicially declared 
                              insolvent, spendthrift, or incapacitated to contract? 
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="convicted" 
                              id="inlineRadio7" 
                              checked = {true ? [OffenseData.convicted] : false}
                              disabled />
                            <label class="form-check-label" for="inlineRadio7">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="convicted" 
                              id="inlineRadio8" 
                              checked = {true ? [OffenseData.convicted] : false}
                              disabled />
                            <label class="form-check-label" for="inlineRadio8">NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                       </Col>
                    </Row>
                     
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3"
                            htmlFor="input-NameOrg"
                          >
                            Nature of Offense:
                          </label>
                      <Col sm="9">
                    
                          <Input
                                class="form-control"
                                name="NatureOff"
                                label="Name"
                                value={OffenseData.offense_details}
                                disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 "
                            htmlFor="input-Namedesc"
                          >
                          Court of Jurisdiction:
                          </label>
                     
                       
                      <Col sm="9">
                      
                          <Input
                             class="form-control"
                             name="courtJuri"
                             label="Name"
                             value={OffenseData.offense_court}
                             disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="8">
                        <FormGroup row>
                              <label
                                      class="col-sm-3 col-form-label"
                                    >
                                    Date Filed :
                              </label>
                       
                      <Col sm="5">
                      
                          <Input
                              class="form-control"
                              name="dateFiled"
                              label="Name"
                              variant="filled"
                              type='date'
                              value={OffenseData.date_filed}
                              disabled
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                  
                    <Row >
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6"
                            htmlFor="input-first-name"
                            
                          >
                          2. Have you had a record of any denial of registration, or termination for cause, and of any disciplinary 
                            action taken,  or sanction imposed, upon by agency,  or by any exchange including any finding that
                            you were a cause of any disciplinary action or had violated any law?
                          </label>
                          <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                            <div class="form-check form-check-inline">
                              <input 
                                class="form-check-input" 
                                type="radio" 
                                name="termination" 
                                id="inlineRadio9" 
                                checked = {true ? [OffenseData.termination_record] : false}
                                disabled />
                              <label class="form-check-label" for="inlineRadio9">YES</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input 
                                class="form-check-input" 
                                type="radio" 
                                name="termination" 
                                id="inlineRadio10" 
                                value="option2" 
                                checked = {true ? [OffenseData.termination_record] : false}
                                disabled />
                              <label class="form-check-label" for="inlineRadio10">NO</label>
                            </div>

                          </Row >
                        </FormGroup>
                       </Col>
                    </Row>

                    

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 "
                            htmlFor="input-first-name"
                          >
                            3. Have you had a record of any denial, suspension, expulsion or revocation of any registration of a 
                            broker or dealer with which you were associated in any capacity when such action was taken?
                          </label>
                         <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="denial" 
                              id="inlineRadio11" 
                              value="option1"
                              checked = {true ? [OffenseData.revocation_record] : false} 
                              disabled />
                            <label class="form-check-label" for="inlineRadio11">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="denial" 
                              id="inlineRadio12" 
                              value="option2" 
                              disabled 
                              checked = {true ? [OffenseData.revocation_record] : false} />
                            <label class="form-check-label" for="inlineRadio12">NO</label>
                          </div>

                           </Row>
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 "
                            htmlFor="input-first-name"
                          >
                            4. Have you had a record of any permanent or temporary injunction entered against you or any broker 
                            or dealer with which you were associated in any capacity at the time such injunction was entered?
                          </label>
                   <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="injunction" 
                              id="inlineRadio13" 
                              
                              checked = {true ? [OffenseData.injuction_record] : false}
                              disabled/>
                            <label class="form-check-label" for="inlineRadio13">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            name="injunction" 
                            id="inlineRadio14" 
                            
                            disabled 
                            checked = {true ? [OffenseData.injuction_record] : false}/>
                            <label class="form-check-label" for="inlineRadio14">NO</label>
                          </div>

                           </Row>
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                            5. Have you had a record of any arrest or indictment for any felony, or any misdemeanor pertaining to 
                            securities, commodities, banking, insurance or real estate, fraud, false statements or omissions, 
                            wrongful taking of property or bribery, forgery, counterfeiting or extortion, and the disposition of the 
                            foregoing?
                          </label>
                        <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="indictment" 
                              id="inlineRadio15"
                             
                              disabled
                              checked = {true ? [OffenseData.arrest_record] : false}/>
                            <label class="form-check-label" for="inlineRadio15">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="indictment" 
                              id="inlineRadio16" 
                             
                              disabled 
                              checked = {true ? [OffenseData.arrest_record] : false}/>
                            <label class="form-check-label" for="inlineRadio16">NO</label>
                          </div>

                          </Row>
                        </FormGroup>
                       </Col>
                    </Row>
{/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IN CASE OF EMERGENCY, PLEASE NOTIFY:</h1>
                      </Col>
                     </Row>
{/* --------------------------------------------------- */}

                    <Row style={{display: "inline-flex", width: "100%"}} >
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerName"
                          >
                            Name:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="text"
                            value={EmergencyData.person_name}
                            disabled
                     
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerRelation"
                          >
                             <span style={{display: "flex"}}>Relationship:</span>
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerRelation"
                            type="text"
                            value={EmergencyData.person_relationship}
                            disabled
                       
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  col-form-label"
                            htmlFor="input-emerAdd"
                          >
                            Address:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerAdd"
                            type="text"
                            value={EmergencyData.person_address}
                            disabled
                     
                            
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-emerNum"
                          >
                            Phone Number:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerNumv"
                            type="text"
                            value={EmergencyData.person_phone}
                            disabled
                         
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IMPORTANT NOTICE:</h1>
                      </Col>
                     </Row>
                    {/* --------------------------------------------------- */}


                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                           I hereby certify that all information given above are true and correct to the best of my knowledge and belief and fully 
                           understand that any false statement herein, upon discovery thereof, will be sufficient cause for my immediate 
                           separation from the service of the Company.
                          </label>
                        </FormGroup>
                       </Col>
                    </Row>


                    
                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
                    {/* --------------------------------------------------- */}
                    <img src={sign} alt="sign" style={{ height:275, top:380}} />
                  
                    
                 

                   
                  </div>
              
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>


      
      </Container>
    </>
  );
};


export default EmpProfile;
