import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './LoginPage.css';
function LoginPage() {
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
            <MDBRow className="w-100 d-flex justify-content-center">
                <MDBCol col='4' md='6' className="bg-dark text-white p-4 rounded" style={{ maxWidth: '500px' }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" className="text-white"/>
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" className="text-white"/>

                    <div className="d-flex justify-content-between mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#" className="text-white">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>

                    <div className="text-center">
                    <a href="#!" className="text-white">Not a member? Register</a>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}


export default LoginPage;