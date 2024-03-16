import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Footer() {
    return (
        <MDBFooter className='footer1 text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
          <MDBContainer className='pt-4'>
            <section className='mb-4'>
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='twitter' />
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='google' />
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='instagram' />
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='github' />
              </MDBBtn>
            </section>
          </MDBContainer>
    
          <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024 Copyright
          </div>
        </MDBFooter>
      );
}
