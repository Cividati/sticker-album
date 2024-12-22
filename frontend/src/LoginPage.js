import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import './LoginPage.css';

function App() {

    const inputText = {
        wrapperClass: 'mb-4 mx-5 w-100',
        labelClass: 'text-white',
        label: 'Email',
        id: 'formControlLg',
        type: 'email',
        size: 'lg',
        style: { backgroundColor: 'transparent', color: 'white' }
    };

    const socialIcons = {
        tag:'a',
        color:'none',
        className:'m-3 px-2',
        style:{ color: 'white' }
    }

    const smallText = {
        className: 'mb-0',
    }

    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                            <h2 className="fw-bold mb-5 text-uppercase">Login</h2>

                            <MDBInput {...inputText} />
                            
                            <MDBInput {...inputText} label='Password' type='password'/>

                            <p {...smallText}>
                                <a class="text-white 50 mb-5" href="#!">Forgot password?</a>
                            </p>
                            
                            <a class="text-white 50 mb-5" href="#!">Texto de teste</a>

                            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                                </MDBRow>


                            <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                                Login
                            </MDBBtn>

                            <div className='d-flex flex-row mt-3 mb-3'>
                                <MDBBtn {...socialIcons}>
                                    <MDBIcon fab icon='google' size="3x"/>
                                </MDBBtn>
                            </div>

                            <div>
                                
                                <a href="#!" style={{color: 'white'}} className="mb-0">Don't have an account? <br></br>Sign Up</a>
                                
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default App;