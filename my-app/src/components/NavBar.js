import React, {Component} from "react";
import { Menu } from 'semantic-ui-react';
import Logo from "../Logo.svg";


//**************************************************** */	



const mainMenu={
	display: "flex",
    justifyContent:"center",
    fontSize: "1.3rem",
	background: "#f8f8f8",
	marginBottom: "140px",
}

const logoText={
	 fontSize: "48px",
     fontWeight: "800",
	 fontStyle: "normal",
	 marginRight: "580px",
}

const logo={
	width:"37px",
	height:"51px",
	marginTop: "21px",
    marginRight: "30px",
    marginLeft: "428px",
}

//***************************************************** */


export default class MenuExampleSecondary extends Component {
	
  
	
  
	render() {
	 
	  return (
		
		  <Menu secondary style={mainMenu}>
			
			<img src={Logo} style={logo}  alt="logo" />
            <h2 style={logoText}>My Github</h2>
		
		
		 
		</Menu>
	  )
	}
  }
  