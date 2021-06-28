
import React, {useState, useEffect} from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Col,
  Row,
  Modal, 
  ModalHeader, 
  ModalBody, 
  Button,
  ModalFooter,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import "assets/css/overlay.css"
import api from "api/api"

const EmpLeaves = () => {

       //----------MODAL---------------------
       const [modal1, setModal1] = useState(false);

       const toggle1 = () => setModal1(!modal1);
    //--------------------------------------------
 
    const [modalIsOpenn, setModalisOpenn] = useState(false);
 
    const openn = () => setModalisOpenn(!modalIsOpenn);



    const getToken = localStorage.getItem('token')
    const [leave_type, setLeaveType] = useState(null);
    const [leave_reason, setLeaveReason] = useState(null);
    const [date_filed, setDateFiled] = useState(null);
    const [leaveData, setLeaveData] = useState([]);
    const employee_id = '57f7f8c6-5762-40ca-881f-9e23606c86e1'

    const fileLeave = () => {
      const leave = {
        employee_id,
        leave_type,
        leave_reason,
        date_filed
      }
      console.log(leave)
      api.post('leave/', leave, {headers: {Authorization: `Token ${getToken}`}})
      .then(()=>{
        return api.get(`leave/employee?employee_id=${employee_id}`, {headers: {Authorization: `Token ${getToken}`}})  
      })
      .then(res=>{
        setLeaveData(res)
      })
      .catch(err => {
        console.log(err)
      })
    }

    const getLeave = () => {
      api.get(`leave/list-own?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      .then(res=>{
        setLeaveData(res.results)
      })
    }
    console.log(leaveData)
    
    useEffect(()=>{
     getLeave()
  }, [])

  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
      <div class="d-flex flex-row-reverse mx-1 mb-3">     
      <Button  color="success" type="button"  data-toggle="modal" data-target="#exampleModalCenter"style={{ marginBottom: "10px"}} backdrop={false}>File Leave</Button>
      <form data-backdrop="false" backdrop={false}class="modal fade needs-validation" novalidate id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div backdrop={false} class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div backdrop={false} className="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title" id="exampleModalLongTitle">File Leave</h1>
                                    <button type="button"  class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                    </button>
                                    <Modal backdrop={false} className="modal-content" isOpen={modalIsOpenn} toggle1={openn} centered >
                                        <ModalHeader ><h2>Success!!</h2></ModalHeader>
                                        <ModalBody>
                                            Leave has been filed.
                                            
                                        </ModalBody>
                                        <ModalFooter >
                                        <Button color="success" onClick={openn}>Ok</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                                <div class="modal-body">
                              
                                {/* <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-3 col-form-label"
                                                    htmlFor="input-leave"
                                                >
                                                    Leave:
                                                </label>
                                                <Col sm="4">
                                            
                                                    <Input 
                                                      type="select" 
                                                      name="select" 
                                                      id="input-leave"
                                                      >
                                                    <option selected>Whole Day Leave</option>
                                                    <option>Half Day Leave</option>
                                                    </Input>
                                              
                                                </Col>
                                                </FormGroup>
                                            </Col>
                                </Row> */}
                                <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-3 col-form-label"
                                                    htmlFor="input-leavetype"
                                                >
                                                    Leave Type:
                                                </label>
                                                <Col sm="4">
                                            
                                                    <Input 
                                                    type="select" 
                                                    name="select" 
                                                    id="input-leavetype"
                                                    
                                                    onChange={e=> setLeaveType(e.target.value)}
                                                    >
                                                    <option disabled>Select</option>
                                                    <option>Vacation Leave</option>
                                                    <option>Sick Leave</option>
                                                    
                                                    </Input>
                                               
                                                </Col>
                                                </FormGroup>
                                            </Col>
                                </Row>
                                <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-3 col-form-label"
                                                    htmlFor="input-date"
                                                >
                                                    Date:
                                                </label>
                                                <Col sm="4">
                                                <Input   
                                                        type="date"
                                                        name="date"
                                                        id="input-date"
                                                        placeholder="YYYY-MM-DD"
                                                        onChange={e=> setDateFiled(e.target.value)}
                                                    />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                              </Row>
                              <div class="form-group row">
                                            <label
                                                class="col-sm-3 col-form-label"
                                                for="validationCustom01"
                                            >
                                                Reason:
                                            </label>
                                        <Col sm="9">
                                            <FormGroup row>         
                                            <Col>
                                                <div className="pl-lg-0">
                                                    <Input
                                                       
                                                        id="validationCustom01"
                                                        class="form-control"
                                                        name="messg"
                                                        label="messg"
                                                        rows="6"
                                                        type="textarea"
                                                        onChange={e=> setLeaveReason(e.target.value)}
                                                        required
                                                    />            
                                                </div>
                                            </Col >
                                            </FormGroup>
                                        </Col>
                             </div>
                                </div>
                                <div class="modal-footer mx-2">
                                   
                                    <button type="button" class="btn" data-dismiss="modal" aria-label="Close" style={{color:'white', backgroundColor:'#315A93'}} onClick={fileLeave} >FILE</button>
                                </div>
                                </div>
                            </div>
            </form> 
      </div>








        <Row>
        <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Leaves </h2>
                <Form className="navbar-search form-inline d-none d-md-flex ml-md-auto" style={{float:"right", color: "lightblue"}}>
                    <FormGroup className="mb-0">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-search" style={{color: "lightblue"}} />
                          </InputGroupText>
                        </InputGroupAddon >
                        <Input placeholder="Search" type="text" style={{color: "lightblue"}}/>
                      </InputGroup>
                    </FormGroup>
                  </Form>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light" >  
                  <tr >
                
                    <th scope="col" style={{color: "indigo"}}>LEAVE TYPE</th>
                    <th scope="col" style={{color: "indigo"}}>DATES FILED</th>
                    <th scope="col" style={{color: "indigo"}}>SICK LEAVE COUNT</th>
                    <th scope="col" style={{color: "indigo"}}>VACATION LEAVE COUNT</th>
                    <th scope="col" style={{color: "indigo"}}>STATUS</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
               
                <tbody>
                {leaveData.map((item)=>{
                    return(
                  <tr>
                    <td>{item.leave_type}</td>
                    <td>{item.date_filed}</td>
                    <td>{item.sick_leave_count}</td>
                    <td>{item.vac_leave_count}</td>
                    <td  >
                        <Badge style={{backgroundColor: "#03a9f4", color: "white"}}>{item.leave_status}</Badge>
                    </td>
                    {/* <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem onClick={toggle}>Mark As Approved</DropdownItem>
                            <Modal size="md"centered isOpen={modal} toggle={toggle} >
                              <ModalHeader style={{borderBottom: "2px solid #E5ECF3"}} stoggle={toggle} charCode="X"><h2>Confirmation</h2></ModalHeader>
                                <ModalBody style={{height: "100px"}}>
                                    Are you sure you want to approve this leave?
                                </ModalBody>
                                  <ModalFooter style={{borderTop: "2px solid #E5ECF3"}}>
                                    <Button color="success" onClick={toggs}  data-dismiss="modal">Approve</Button>
                                      <Modal size="md"centered isOpen={open} toggle={toggs} onClosed={closeAll ? toggle : undefined} >
                                          <ModalHeader style={{borderBottom: "2px solid #E5ECF3"}} stoggle={toggs}><h2>Success!</h2></ModalHeader>
                                          <ModalBody style={{height: "100px"}}>
                                              Leave is mark as approved!
                                          </ModalBody>
                                          <ModalFooter style={{borderTop: "2px solid #E5ECF3"}}>
                                          <Button color="success" onClick={toggleAll} >Ok</Button>{' '}
                                          </ModalFooter>
                                      </Modal>
                                  </ModalFooter>
                            </Modal>
                          <DropdownItem onClick={toggle2} data-toggle="modal">Mark As Not Approved</DropdownItem>
                            <Modal size="lg"centered isOpen={isOpen} toggle={toggle2} >
                                <ModalHeader style={{borderBottom: "2px solid #E5ECF3"}} stoggle={toggle2} charCode="X"><h2>Deny Leave</h2>
                                </ModalHeader>
                                  <ModalBody style={{height: "300px", display: "flex"}}>
                                    <h3 style={{marginRight: "50px"}}>Reason : </h3>
                                  <Col sm="10">
                                    <FormGroup row>
                                      <Col>
                                        <div className="pl-lg-0">
                                              <FormGroup>
                                              
                                                <Input
                                                  className="form-control-alternative"
                                              
                                                  rows="10"
                                              
                                                  type="textarea"
                                                />
                                              </FormGroup>
                                        </div>
                                      </Col >
                                    </FormGroup>
                                  </Col>
                                  </ModalBody>
                                    <ModalFooter style={{borderTop: "2px solid #E5ECF3"}}>
                                      <Button color="primary" onClick={toggs} data-dismiss="modal">Submit</Button>  
                                        <Modal size="md"centered isOpen={open} toggle={toggs} onClosed={closeAll ? toggle : undefined} >
                                            <ModalHeader style={{borderBottom: "2px solid #E5ECF3"}} stoggle={toggs}><h2>Confirmation!
                                                <button  type="button" onClick={toggs} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-340px"}}>
                                                      <span className=" flex-row-reverse" aria-hidden="true" style={{fontWeight: "bolder", color: "black",  }}>X</span>
                                                </button>  
                                              </h2></ModalHeader>
                                            <ModalBody style={{height: "100px"}}>
                                                Are you sure you want to deny this leave?
                                            </ModalBody>
                                            <ModalFooter style={{borderTop: "2px solid #E5ECF3"}}>
                                            <Button color="danger" onClick={toggle3} data-dismiss="modal">Deny</Button>
                                                <Modal size="md"centered isOpen={openDenie} toggle={toggle3} onClosed={closeAll ? toggle : undefined} >
                                                    <ModalHeader style={{borderBottom: "2px solid #E5ECF3"}} stoggle={toggle3}><h2>Deny Leave</h2></ModalHeader>
                                                    <ModalBody style={{height: "100px"}}>
                                                        Leave is denied.
                                                    </ModalBody>
                                                    <ModalFooter style={{borderTop: "2px solid #E5ECF3"}}>
                                                    <Button color="success" onClick={toggleAll} >Ok</Button>{' '}
                                                    </ModalFooter>
                                                </Modal>
                                            </ModalFooter>
                                        </Modal> 
                                    </ModalFooter>
                            </Modal>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td> */}
                  </tr>
                   )
                })}
                </tbody>






              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem >
                      <PaginationLink
                        onClick={prevPage}
                        
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
               
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                         onClick={nextPage}
                       
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
          
        </Row>
      </Container>
    </>
  );
};

export default EmpLeaves;
