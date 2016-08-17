
import React from 'react';
import { MenuItem, DropdownButton, ButtonToolbar } from 'react-bootstrap'
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

class Menu extends React.Component{
 
  
    render (){

        return(
            <div>
              <ButtonToolbar>
                <DropdownButton bsSize="large" title="Large button" id="dropdown-size-large">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
                </ButtonToolbar>
                </div>
        );
    }
}


export default Menu;

