
import React, {useState} from "react";

// reactstrap components
import {
 
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

      

   



const EmpLeaves = () => {

       //----------MODAL---------------------
       const [modal, setModal] = useState(false);

       const toggle = () => setModal(!modal);
    //--------------------------------------------
 
    const [modalIsOpen, setModalisOpen] = useState(false);
 
    const open = () => setModalisOpen(!modalIsOpen);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
      <div class="d-flex flex-row-reverse mx-1 mb-3">     
     
            <form  class="modal fade needs-validation" novalidate id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                </form> 
      </div>

        <Row>
        <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Payslip Records</h2>
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
                
                    <th scope="col" style={{color: "indigo"}}>FILENAME</th>
                    <th scope="col" style={{color: "indigo"}}>CUTOFF DATE</th>
                    <th scope="col" style={{color: "indigo"}}>DATE UPLOADED</th>
                    <th scope="col" style={{color: "indigo"}}>UPLOADED BY</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SSS Deductions.csv</td>
                    <td>April 10 - April 25, 2021</td>
                    <td>April 30, 2021</td>
                    <td>Edmark Johannes Reyes Bautista</td>
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
                          <DropdownItem
                            href="#"
                          
                          >
                             Download
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>PhilHealth Deductions.csv</td>
                    <td>April 10 - April 25, 2021</td>
                    <td>April 30, 2021</td>
                    <td>John Doe</td>
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
                          <DropdownItem
                            href="#"
                          
                          >
                             Download
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>Pag-IBIG Deductions.csv</td>
                    <td>September 10 - September 25, 2021</td>
                    <td>September 30, 2021</td>
                    <td>John Doe</td>
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
                          <DropdownItem
                            href="#"
                          
                          >
                             Download
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>BIR Deductions.csv</td>
                    <td>September 10 - September 25, 2021</td>
                    <td>September 30, 2021</td>
                    <td>John Doe</td>
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
                          <DropdownItem
                            href="#"
                          
                          >
                             Download
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>SSS Loan.csv</td>
                    <td>September 10 - September 25, 2021</td>
                    <td>September 30, 2021</td>
                    <td>John Doe</td>
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
                          <DropdownItem
                            href="#"
                          
                          >
                             Download
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>

              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        
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
                        href="#pablo"
                       
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                       
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
