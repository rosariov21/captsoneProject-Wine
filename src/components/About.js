
import {Card} from 'react-bootstrap'; 
import React from 'react';



class About extends React.Component{
    render(){
      return(
        <div style={{ width: 400, marginTop: 20, marginBottom: 20 }}>
        <Card className="bg-dark text-white">
            <Card.Img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTe_YW_lJmz8/v2/560x-1.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title style={{textAlign: 'center', color: 'yellow', align:'center' }}>Let us help you </Card.Title>
                
               
            </Card.ImgOverlay>
        </Card>
    </div>

    
      );
    }
}


export default About;