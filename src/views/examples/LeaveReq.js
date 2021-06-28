
import React, {useState, useEffect} from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
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
import api from 'api/api'

// core components
import Header from "components/Headers/Header.js";
import "assets/css/overlay.css"

   



const LeaveReq = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    const [open, openModal] = useState(false);
    const toggs = () => openModal(!open);

    const [openDeny, openModalDeny] = useState(false);
    const toggleDeny = () => openModalDeny(!openDeny);
  
    const [openDeclined, openModalDeclined] = useState(false);
    const toggleDecline = () => openModalDeclined(!openDeclined);
  
    const [closeAll, setCloseAll] = useState(false);
  
    const toggleAll = () => {
        setModal(!modal);
        openModal(!open);
        setCloseAll(true);
      }
  
    const toggleAll2 = () => {
      openModalDeny(!openDeny);
      openModalDeclined(!openDeclined);
      setCloseAll(true);
    }
    
  

    const getToken = localStorage.getItem('token')
    const [leaveData, setLeaveData] = useState([])

    const getLeave = () => {
      api.get(`leave/list-requests?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      .then(res => {
        console.log(res)
        
      })
      .catch(err => {
        console.log(err)
      })
    }

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
        <Row>
        <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Leave Requests</h2>
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
                    <th scope="col" style={{color: "indigo"}}>EMPLOYEE NUMBER</th>
                    <th scope="col" style={{color: "indigo"}}>NAME</th>
                    <th scope="col" style={{color: "indigo"}}>DATE FILED</th>
                    <th scope="col" style={{color: "indigo"}}>LEAVE TYPE</th>
                    
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
                    <th scope="row">{item.employee_number}</th>
                    <td>{item.name}</td>             
                    <td>{item.leave_type}</td>
                    <td>{item.date_filed}</td>
                    <td>5</td>
                    <td  >
                        <Badge style={{backgroundColor: "#FB9400", color: "white"}}>{item.leave_status}</Badge>
                    </td>
                    <td className="text-right">
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
                        <DropdownItem onClick={toggle} >Approve Leave</DropdownItem>
                          <Modal backdrop={false} size="md" centered isOpen={modal} toggle={toggle} >
                              <ModalHeader  stoggle={toggle} charCode="X"><h2>Confirmation
                                                <button  type="button" onClick={toggle} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-340px"}}>
                                                      <span className=" flex-row-reverse" aria-hidden="true" style={{fontWeight: "bolder", color: "black",  }}>X</span>
                                                </button>  
                                  </h2></ModalHeader>
                                <ModalBody style={{height: "100px"}}>
                                    Are you sure you want to approve this leave?
                                </ModalBody>
                                  <ModalFooter >
                                    <Button color="success" onClick={toggs}  data-dismiss="modal">Approve </Button>
                                      <Modal backdrop={false} size="md"centered isOpen={open} toggle={toggs} onClosed={closeAll ? toggle : undefined} >
                                          <ModalHeader  stoggle={toggs}><h2>Success!</h2></ModalHeader>
                                          <ModalBody style={{height: "100px"}}>
                                              Leave is mark as approved!
                                          </ModalBody>
                                          <ModalFooter >
                                          <Button color="success" onClick={toggleAll} data-dismiss="open" aria-label="Close" >Ok</Button>
                                          </ModalFooter>
                                      </Modal>
                                  </ModalFooter>
                            </Modal>




                            <DropdownItem onClick={toggleDeny} data-toggle="modal">Deny Leave</DropdownItem>
                          <Modal backdrop={false} size="md" centered isOpen={openDeny} toggle={toggleDeny} >
                              <ModalHeader  stoggle={toggleDeny} charCode="X"><h2>Confirmation
                                                <button  type="button" onClick={toggleDeny} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-340px"}}>
                                                      <span className=" flex-row-reverse" aria-hidden="true" style={{fontWeight: "bolder", color: "black",  }}>X</span>
                                                </button>  
                                  </h2></ModalHeader>
                                <ModalBody style={{height: "100px"}}>
                                    Are you sure you want to deny this leave?
                                </ModalBody>
                                  <ModalFooter >
                                    <Button color="danger" onClick={toggleDecline}  data-dismiss="modal">Deny</Button>
                                      <Modal backdrop={false} size="md"centered isOpen={openDeclined} toggle={toggleDecline} onClosed={closeAll ? toggleDeny : undefined} >
                                          <ModalHeader  stoggle={toggleDecline}><h2>Deny Leave</h2></ModalHeader>
                                          <ModalBody style={{height: "100px"}}>
                                              Leave is denied!
                                          </ModalBody>
                                          <ModalFooter >
                                          <Button color="success" onClick={toggleAll2} data-dismiss="open" aria-label="Close" >Ok</Button>
                                          </ModalFooter>
                                      </Modal>
                                  </ModalFooter>
                            </Modal>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
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

export default LeaveReq;
