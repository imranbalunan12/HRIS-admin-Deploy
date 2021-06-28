
import React, {useState} from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
  CardBody
} from "reactstrap";

// core components
import HeaderMssg from "components/Headers/HeaderMssg.js";

      

   



const EmpLeaves = () => {

       //----------MODAL---------------------
       const [modal, setModal] = useState(false);

       const toggle = () => setModal(!modal);
    //--------------------------------------------
 
    const [modalIsOpen, setModalisOpen] = useState(false);
 
    const open = () => setModalisOpen(!modalIsOpen);

  return (
    <>
      <HeaderMssg />
      {/* Page content */}
      <Container className="mt--7" fluid >
      <div class="d-flex flex-row-reverse mx-1 mb-3">     
            <form  class="modal fade needs-validation" novalidate id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                </form> 
      </div>

        <Row>
        <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{display: "flex"}}>
                <h1 style={{color:"indigo", marginRight: "950px"}}>Survey</h1>
               
                <span >06/02/2021</span>
        
              </CardHeader>
              <CardBody className="mt-12" height="auto">
                 <p style={{marginBottom: "100px", color: "black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis orci sit amet metus aliquam vulputate. Curabitur ultricies metus vel auctor 
                    fermentum. Pellentesque et scelerisque leo, pretium congue justo. 

                    Ut rutrum nibh in eros fringilla aliquet. Praesent sodales augue ut odio vehicula semper. 
                    Nunc at quam vitae augue tempor egestas vel a nulla. 

                    Fusce et suscipit velit, nec semper ligula. Integer non ligula cursus, pulvinar elit in, molestie orci. 
                    Cras laoreet erat ut nunc finibus bibendum.
                    </p> 

                    <h3>Jane Doe</h3>
                    <span>HR Head</span>
              </CardBody>
            </Card>
          </div> 
        </Row>
      </Container>
    </>
  );
};

export default EmpLeaves;
