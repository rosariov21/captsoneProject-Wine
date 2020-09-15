import React from 'react'
import { Col,Form,Button } from 'react-bootstrap'
export default function WebContact() {
    return (
        
            <div className="contactParent">
                <div className="contacts">
                <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                    
                <h5 style={{textAlign: 'center', color: 'Bl' , marginTop: '100px' }}>
                    Contact Us|Location
                    </h5>  
                    <h3 style={{textAlign: 'center', color: 'Bl' , marginTop: '100px' }}>
                    Phone Number: 212-956-9093<br/>
                    Address: 
                    West Side, NY, Ny -10025
                    </h3>
                    <h3 style={{textAlign: 'center', color: 'Bl' , marginTop: '100px' }}>
                    Email: WineAnyTime@gmail.com
                    <br/>
                    <span>Hours of Business Operations </span><br/>
                    Mon-Saturday:10:00 am-11:30 pm</h3>
                    <hr/>
                </div>
              
            <div>
                  
            </div>
        </div>
       
    )
}