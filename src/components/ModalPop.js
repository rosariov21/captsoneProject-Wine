import {Button,Modal} from 'react-bootstrap'; 
import React from 'react';
class ModalPop extends React.Component{
    constructor()
    {
        super()
        this.state ={
            show:false
        }
    }
    handleModal()
    {
        this.setState({show:!this.state.show})
    }
    render(){
        return(
            <div>
                <Button onClick={()=>{this.handleModal()}}>Open Modal</Button>
                <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>Age Restrictions</Modal.Header>
                    <Modal.Body>
                        Please Enter Age to have access to this website , Must be over 21 !!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  onClick={()=>{this.handleModal()}}>
                            Close Modal
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ModalPop;