
import React, {useState, useEffect} from 'react'
import {
    Card,  CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col,CardImg,Row, Container, CardGroup,
    CardDeck,CardColumns, FormGroup
} from "reactstrap";
import myHBD from '../../assets/img/brand/myHBD.png';
import api from 'api/api'

function Memo({ memos, completeMemo, removeMemo }) {
    
    const getToken=localStorage.getItem('token')
    const [memoData, setMemoData] = useState([])
 
    const getMemo = () => {
        api.get(`engagements/memo/`, {headers: {Authorization: `Token ${getToken}`}})
        .then(res=>{
            console.log(res)
            setMemoData(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
   


    useEffect(()=>{
        getMemo()
      }, [])
    

    


    return memoData.map((memo, index) =>(
        
        <Container fluid   className={memo.isComplete ? 'memo-column complete' : 'memo-column'}
        key={index}  style={{ marginBottom:30, display:'inline-grid'}}>
            


           
            
      <Col xl='12' >
                                        <Card style={{padding:26 }}>
                                        <CardTitle onClick={() => completeMemo(memo.memo_id)} tag="h2">{memo.memo_subject}</CardTitle>
                                
                                        
                                          <div class="d-flex mt--3" >
                                            <label class="p-2" style={{fontSize:10, color:'gray'}}>from: </label>
                                          </div>
                                        
                                        
                                        <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}>{memo.date_created}</label>
                                       
                                        {/* <CardImg top width="100%" src={myHBD} alt="Card image cap"  /> */}
                                  
                                        <CardBody>
                                        
                                        <CardText key={memo.id} onClick={() => completeMemo(memo.memo_id)}>{memo.memo_content}</CardText>
                                        
                                        </CardBody>
                                        {/* <span class="d-flex flex-row-reverse" >
                                        <Button class="btn-danger" style={{background:'#E63946', color:'white', marginTop: "30px"}} onClick={() => removeMemo(memo.id)}>Delete</Button>
                                        </span> */}
                                        </Card>     

        </Col>                   
                   

       
            {/* <div key={memo.id} onClick={() => completeMemo(memo.id)}>
                {memo.text}
            </div>
            <div className='icons'>
                <button
                onClick={() => removeMemo(memo.id)}
                className='delete-icon'
                />
                <button
                onClick={() => setEdit({ id: memo.id, value: memo.text })}
                className='edit-icon'
                />
            </div> */}

        </Container>

    )
) 
}

export default Memo;
