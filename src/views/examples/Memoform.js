import React, {useState} from "react";

// reactstrap components
import 'bootstrap';
import api from 'api/api'


import {
     Button, Row, 
    Container,Col,FormGroup, DropdownMenu, UncontrolledDropdown, DropdownToggle, Dropdown,
    Input, CustomInput, Modal, ModalHeader, ModalBody, Label, ModalFooter
} from "reactstrap";

// core components
import UserHeader from "components/Headers/UserHeader.js";
import "assets/css/overlay.css"

function Memoform  ( props )  {
   //----------Memo---------------------
      const [memo_subject, setMemoSubject] = useState(null);
      const [memo_content, setMemo_Content] = useState(null);
      const [memo_image, setMemo_Image] = useState(null);
      const [memo_receiver_employee, setMemo_Receiver_Employee] = useState(null);
      const [memo_posted_by, setMemo_Posted_by] = useState(null);
      const [memo_receiver_dept, setMemo_Receiver_Dept] = useState(null);
      



      const handleTo = e => {
        //setMemo_Receiver_Employee(e.target.value);
      };
      const handleSubject = e => {
        setMemoSubject(e.target.value);
      };
      const handleMessage = e => {
        setMemo_Content(e.target.value);
      };
      const handleImage = e => {
        setMemo_Image(e.target.value);
      };
      const getToken = localStorage.getItem('token')


      const handleSubmit = e => {
        e.preventDefault();
        const submit = {
            memo_subject,
            memo_content,
            memo_image,
            memo_posted_by: 'ba51a1e3-4254-4726-8560-9fcabefd8261',
            memo_receiver_employee: 'ba51a1e3-4254-4726-8560-9fcabefd8261',
            memo_receiver_dept,
        }
        api.post('engagements/memo/', submit, {headers: {Authorization: `Token ${getToken}`}})
        .then(res=>{
            console.log(res)
            toggleFinished();
        })
        .catch(err=>{
            console.log(err)
        })
       
      };
   //--------------------------------------------

   const [dropdownOpen, setDropdownOpen] = useState(false);

   const toggledrop = () => setDropdownOpen(prevState => !prevState);

   const [modal, setModal] = useState(false);
   const [nestedModal, setNestedModal] = useState(false);
   const [closeAll, setCloseAll] = useState(false);
   const [modalDone, setModalDone] = useState(false);

   const toggle = () => setModal(!modal);

   const toggleNested = () => {
     setNestedModal(!nestedModal);
     setCloseAll(false);
   }
   const toggleAll = () => {
     setNestedModal(!nestedModal);
     setCloseAll(true);
   }

   const toggleFinished = () => {
     setModalDone(!modalDone);
     setCloseAll(true);
   }

   

  return (
    <>
      <UserHeader />
      {/* Page content */}
     
      <Container className="mt--9 " fluid>
        <div class="d-flex flex-row-reverse mx-1 mb-3">       
                <Button color="success" type="button" onClick={toggle} style={{marginTop:"60px", marginBottom: "10px"}}>Create Announcement</Button>


                    <Modal backdrop={false} isOpen={modal} toggle={toggle} onSubmit={handleSubmit}  size="lg" centered>
                        <ModalHeader ><h2>Create Announcement
                                    <button type="button" onClick={toggleNested} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-180%"}}>
                                        <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                    </button></h2>
                        
                        </ModalHeader>





                        <ModalBody>
                                    {/* FOR SEND TO
                                    
                                    
                                    <Row>
                                        <Col sm="12">
                                            <FormGroup row>
                                                <label
                                                    class="col-sm-2 col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                    Send to:
                                                </label>
                                                <Col sm="9">
                                                    <Input
                                                        name="sendTo"
                                                        label="sendTo"
                                                        variant="filled"
                                                        onChange={handleTo}
                                                        
                                                        required
                                                    >
                                                    </Input>

                                                        <div style={{position:'absolute', left:520, top:2, height:20}}>
                                                        <UncontrolledDropdown>
                                                                <Dropdown isOpen={dropdownOpen} toggle={toggledrop}>
                                                                    <DropdownToggle
                                                                        tag="span"
                                                                        data-toggle="dropdown"
                                                                        aria-expanded={dropdownOpen}
                                                                    >
                                                                        <Button style={{height: "40px", width: "40px", borderRadius: "200px", backgroundColor: "#457B9D"}}class=" dropdown-toggle"  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" >
                                                                            <i className="ni ni-fat-add" style={{marginLeft: "-15px",  marginTop: "-6px",fontSize: "30px", color: "white"}}></i>
                                                                        </Button>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu right style={{marginTop: "10px",}} >
                                                                        <Label check style={{marginLeft: "30px"}}>
                                                                        <Input type="checkbox" /> Everyone
                                                                        </Label><br/>
                                                                        <Label check style={{marginLeft: "30px"}}>
                                                                        <Input type="checkbox" /> HR Department
                                                                        </Label><br/>
                                                                        <Label check style={{marginLeft: "30px"}}>
                                                                        <Input type="checkbox" /> Admin
                                                                        </Label><br/>
                                                                        <Label check style={{marginLeft: "30px"}}>
                                                                        <Input type="checkbox" /> IT Department
                                                                        </Label>
                                                                    </DropdownMenu>
                                                                </Dropdown>
                                                            </UncontrolledDropdown>    
                                                        </div>
                                                </Col>
                                            </FormGroup>
                                        </Col>
                                     </Row> */}
                                     <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-2 col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                    Subject:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                
                                                     name="subj"
                                                     label="subj"
                                                     variant="filled"
                                                     onChange={handleSubject}
                                                     
                                                     required
                                                    
                                                   
                                                />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                                    </Row>
                                    <Row>
                                         <Col sm="12">
                                            <FormGroup row>
                                                <label
                                                    class="col-sm-2 col-form-label"
                                                    for="validationCustom01"
                                                >
                                                    Message:
                                                </label>
                                                <Col sm="9">
                                            
                                                    <div className="pl-lg-0">
                                                        <Input
                                                        
                                                            id="validationCustom01"
                                                            class="form-control"
                                                            name="messg"
                                                            label="messg"
                                                            rows="6"
                                                            type="textarea"
                                                            onChange={handleMessage}
                                                           
                                                            required
                                                        />            
                                                    </div>
                                                </Col >
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    {/* <Row style={{ float: "right"}}>

                                        <Col sm="9">
                                            <div >
                                            <FormGroup row>
                                                <CustomInput 
                                                    type="file" 
                                                    id="exampleCustomFileBrowser" 
                                                    name="customFile" 
                                                    label="Upload Image"
                                                    onChange={handleImage}
                                                    >
                                                    
                                                    </CustomInput>
                                            </FormGroup>
                                        
                                            </div>
                                        </Col>
                                        </Row> */}
                        <br />
                        
                        
                                    <Modal backdrop={false} isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined} centered>
                                        <ModalHeader><h2>Cancel Announcement
                                                <button type="button" onClick={toggleNested} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-260px"}}>
                                                    <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                                </button></h2>

                                        </ModalHeader>
                                            <ModalBody> 
                                                All changes will not be saved.<br/>
                                                Are you sure you want to cancel?
                                            </ModalBody>
                                        <ModalFooter>
                                            <Button color="success" onClick={toggleAll}>Ok</Button>
                                        </ModalFooter>
                                    </Modal>
                        </ModalBody>
                                            <ModalFooter>
                                                <Button color="success" onClick={handleSubmit}>Send </Button>
                                                    <Modal isOpen={modalDone} toggle={toggleFinished} onClosed={closeAll ? toggle : undefined} centered>
                                                        <ModalHeader><h2>Success!
                                                                <button type="button" onClick={toggleFinished} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-390px"}}>
                                                                    <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                                                </button></h2>

                                                        </ModalHeader>
                                                            <ModalBody> 
                                                                Announcement has been sent.<br/>
                                                               
                                                            </ModalBody>
                                                        <ModalFooter>
                                                            <Button color="success" onClick={toggleFinished}>Ok</Button>
                                                        </ModalFooter>
                                                    </Modal>
                                            </ModalFooter>
                    </Modal>
                            
        </div> 
      </Container>
      
    </>
  );
};


export default Memoform;
