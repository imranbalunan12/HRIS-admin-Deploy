import React, {useState} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
    Container,Col, CardDeck,FormGroup,
    Input, Form,InputGroup,InputGroupAddon,InputGroupText, Row, CardHeader,
    Button,
    DropdownMenu, UncontrolledDropdown, DropdownToggle, Dropdown,
    CustomInput, Modal, ModalHeader, ModalBody, Label, ModalFooter
} from "reactstrap";

import Header from "components/Headers/Header.js";
import hbd from '../../assets/img/brand/myHBD.png';

function EmpMemos(props) {

  const [input, setInput] = useState('');
      const [input2, setInput2] = useState('');
      const [input3, setInput3] = useState('');



      const handleChange = e => {
        setInput(e.target.value);
      };
      const handleChange2 = e => {
        setInput2(e.target.value);
      };
      const handleChange3 = e => {
        setInput3(e.target.value);
      };



const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text:  input,
          text2: input2,
          text3: input3,
        });
        setInput('');
        setInput2('');
        setInput3('');
      };
 
   
 


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
        <Header />
      
      
       
      
        <Container className="mt--9" fluid>
    <Row>
      <Form className="navbar-search d-md-flex ml-md-auto" style={{float:"right", color: "lightblue"}}>
                    <FormGroup className="mt--5">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-search" style={{color: "lightblue"}} />
                          </InputGroupText>
                        </InputGroupAddon >
                        <Input placeholder="Search" type="text" style={{color: "white"}}/>
                      </InputGroup>
                    </FormGroup>
        </Form>
    </Row>
          {/* //-------------------------------------- */}
          <div class="d-flex flex-row-reverse mx-1">       
                <Button color="success" type="button" onClick={toggle} style={{marginTop:"60px", marginBottom: "10px"}}>Create memo</Button>


                    <Modal isOpen={modal} toggle={toggle} onSubmit={handleSubmit}  size="lg" centered>
                        <ModalHeader ><h2>Create Memo
                                    <button type="button" onClick={toggleNested} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-640px"}}>
                                        <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                    </button></h2>
                        
                        </ModalHeader>





                        <ModalBody>
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
                                                        onChange={handleChange}
                                                        value={input}
                                                      
                                                        
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
                                     </Row>
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
                                                     onChange={handleChange2}
                                                     value={input2}
                                                 
                                                     
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
                                                            onChange={handleChange3}
                                                             value={input3}
                                                        
                                                           
                                                            required
                                                        />            
                                                    </div>
                                                </Col >
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row style={{ float: "right"}}>

                                        <Col sm="9">
                                            <div >
                                            <FormGroup row>
                                                <CustomInput 
                                                    type="file" 
                                                    id="exampleCustomFileBrowser" 
                                                    name="customFile" 
                                                    label="Upload Image"
                                                  
                                                    >
                                                    
                                                    </CustomInput>
                                            </FormGroup>
                                        
                                            </div>
                                        </Col>
                                        </Row>
                        <br />
                        
                        
                                    <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined} centered>
                                        <ModalHeader><h2>Cancel Memo
                                                <button type="button" onClick={toggleNested} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-340px"}}>
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
                                                <Button color="success" type='submit' onClick={handleSubmit}>Send Memo</Button>
                                                    <Modal isOpen={modalDone} toggle={toggleFinished} onClosed={closeAll ? toggle : undefined} centered>
                                                        <ModalHeader><h2>Success!
                                                                <button type="button" onClick={toggleFinished} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-390px"}}>
                                                                    <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                                                </button></h2>

                                                        </ModalHeader>
                                                            <ModalBody> 
                                                                Memo has been sent.<br/>
                                                               
                                                            </ModalBody>
                                                        <ModalFooter>
                                                            <Button color="success" onClick={toggleFinished}>Ok</Button>
                                                        </ModalFooter>
                                                    </Modal>
                                            </ModalFooter>
                    </Modal>
                            
        </div> 
      {/* //-------------------- */}
  


        <Row>
        <div className="col" style={{marginBottom:50}}>
            <Card className="shadow" style={{backgroundColor:'#F1FAEE', paddingBottom:40}}>
              <CardHeader className="border-0" style={{display:"flex",backgroundColor:'#F1FAEE' }}>
                <h2 className="mb-0" style={{color:"indigo"}}>TODAY</h2>
              </CardHeader>


              <CardDeck   style={{padding:30}}>
           
           <Col xl='4'>
               <Card style={{padding:25, height:400, marginBottom:50}}>
               <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
               <div class="d-flex mt--3" >
                 <label class="p-2" style={{fontSize:10, color:'gray'}} >From Janet Doe</label>
                 <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()}</label>

               </div>
               <CardImg top width="50%" src={hbd} alt="Card image cap"  />
               <CardBody>
               <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
               </CardBody>
               </Card>
             
           </Col>

           <Col xl='4'>
               <Card style={{padding:25, height:400, marginBottom:50}}>
               <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
               <div class="d-flex mt--3" >
                 <label class="p-2" style={{fontSize:10, color:'gray'}} >From Janet Doe</label>
                 <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()}</label>

               </div>
               <CardImg top width="100%" src={hbd} alt="Card image cap"  />
               <CardBody>
               <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
               </CardBody>
               </Card>
           </Col>



           <Col xl='4'>
               <Card style={{padding:25, height:400, marginBottom:50}} >
               <CardTitle tag="h2">Suspension of Work</CardTitle>
               <div class="d-flex mt--3" >
                 <label class="p-2" style={{fontSize:10, color:'gray'}} >From Janet Doe</label>
                 <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()}</label>

               </div>
      
               <CardBody>
               <CardText >Due to the storm that is occurring, work will be suspended until further notice. Take care and God bless!</CardText>
               </CardBody>
               </Card>
           </Col>

            </CardDeck>
            </Card>
          </div>
        </Row>




        <Row>
        <div className="col" style={{marginBottom:50}}>
            <Card className="shadow" style={{backgroundColor:'#F1FAEE', paddingBottom:40}}>
              <CardHeader className="border-0" style={{display:"flex",backgroundColor:'#F1FAEE' }}>
                <h2 className="mb-0" style={{color:"indigo"}}>MARCH 8,2021</h2>
              </CardHeader>


              <CardDeck   style={{padding:30}}>
           
           <Col xl='4'>
               <Card style={{padding:25, height:400, marginBottom:50}}>
               <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
               <div class="d-flex mt--3" >
                 <label class="p-2" style={{fontSize:10, color:'gray'}} >From Janet Doe</label>
                 <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()}</label>

               </div>
               <CardImg top width="50%" src={hbd} alt="Card image cap"  />
               <CardBody>
               <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
               </CardBody>
               </Card>
             
           </Col>

           <Col xl='4'>
               <Card style={{padding:25, height:400, marginBottom:50}}>
               <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
               <div class="d-flex mt--3" >
                 <label class="p-2" style={{fontSize:10, color:'gray'}} >From Janet Doe</label>
                 <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()}</label>

               </div>
               <CardImg top width="100%" src={hbd} alt="Card image cap"  />
               <CardBody>
               <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
               </CardBody>
               </Card>
           </Col>



           <Col xl='4'>
               <Card style={{padding:25, height:400, marginBottom:50}} >
               <CardTitle tag="h2">Suspension of Work</CardTitle>
               <div class="d-flex mt--3" >
                 <label class="p-2" style={{fontSize:10, color:'gray'}} >From Janet Doe</label>
                 <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()}</label>

               </div>
      
               <CardBody>
               <CardText >Due to the storm that is occurring, work will be suspended until further notice. Take care and God bless!</CardText>
               </CardBody>
               </Card>
           </Col>

            </CardDeck>
            </Card>
          </div>
          
        </Row>


        <Row>
        <div className="col" style={{marginBottom:50}}>
            <Card className="shadow" style={{backgroundColor:'#F1FAEE', paddingBottom:40}}>
              <CardHeader className="border-0" style={{display:"flex",backgroundColor:'#F1FAEE' }}>
                <h2 className="mb-0" style={{color:"indigo"}}>MARCH 9,2021</h2>
              </CardHeader>


              <CardDeck   style={{padding:30}}>
           
           <Col xl='4'>
               <Card style={{padding:25, height:400, marginBottom:50}}>
               <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
               <div class="d-flex mt--3" >
                 <label class="p-2" style={{fontSize:10, color:'gray'}} >From Janet Doe</label>
                 <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()}</label>

               </div>
               <CardImg top width="50%" src={hbd} alt="Card image cap"  />
               <CardBody>
               <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
               </CardBody>
               </Card>
             
           </Col>


            </CardDeck>
            </Card>
          </div>
          
        </Row>



        <Row>
        <div className="col" style={{marginBottom:50 }}>
            <Card className="shadow" style={{backgroundColor:'#F1FAEE', paddingBottom:40}}>
              <CardHeader className="border-0" style={{display:"flex",backgroundColor:'#F1FAEE'}}>
                <h2 className="mb-0" style={{color:"indigo"}}>MARCH 10,2021</h2>
              </CardHeader>


              <CardDeck   style={{padding:30,}}>
           
           <Col xl='4'>
               <Card style={{padding:25, height:400 , marginBottom:50}}>
               <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
               <div class="d-flex mt--3" >
                 <label class="p-2" style={{fontSize:10, color:'gray'}} >From Janet Doe</label>
                 <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()}</label>

               </div>
               <CardImg top width="50%" src={hbd} alt="Card image cap"  />
               <CardBody>
               <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
               </CardBody>
               </Card>
             
           </Col>

           <Col xl='4'>
               <Card style={{padding:25, height:400, marginBottom:50}}>
               <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
               <div class="d-flex mt--3" >
                 <label class="p-2" style={{fontSize:10, color:'gray'}} >From Janet Doe</label>
                 <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()}</label>

               </div>
               {/* <div class="d-flex">
               <CardSubtitle class="p-2">From: Janet Doe 
               <label class="ml-auto p-2"> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
               </div> */}
               <CardImg top width="100%" src={hbd} alt="Card image cap"  />
               <CardBody>
               <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
               </CardBody>
               </Card>
           </Col>



           <Col xl='4'>
               <Card style={{padding:25, height:400, marginBottom:50}} >
               <CardTitle tag="h2">Suspension of Work</CardTitle>
               <div class="d-flex mt--3" >
                 <label class="p-2" style={{fontSize:10, color:'gray'}} >From Janet Doe</label>
                 <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()}</label>

               </div>
      
               <CardBody>
               <CardText >Due to the storm that is occurring, work will be suspended until further notice. Take care and God bless!</CardText>
               </CardBody>
               </Card>
           </Col>

           <Col xl='4'>
               <Card style={{padding:25, height:400, marginBottom:50}} >
               <CardTitle tag="h2">Suspension of Work</CardTitle>
               <div class="d-flex mt--3" >
                 <label class="p-2" style={{fontSize:10, color:'gray'}} >From Janet Doe</label>
                 <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}> {new Date().getMonth()+ 1}/{new Date().getDate()}/{new Date().getFullYear()}</label>

               </div>
      
               <CardBody>
               <CardText >Due to the storm that is occurring, work will be suspended until further notice. Take care and God bless!</CardText>
               </CardBody>
               </Card>
           </Col>

            </CardDeck>
            </Card>
          </div>
          
        </Row>



        

      
      </Container>

        </>
    )
}

export default EmpMemos
