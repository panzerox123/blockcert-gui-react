import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KeyGenPage from './views/keygen';
import NewCertPage from "./views/newcert";
import VerifyCertPage from "./views/verifycert";

class App extends React.Component {

	navbar = function () {
		return (
			<Navbar>
				<Container>
					<NavbarBrand href="/">BlockCert</NavbarBrand>
					<Nav className="me-auto">
						<Nav.Link href="/keygen">Generate Keys</Nav.Link>
						<Nav.Link href="/newcert">Create Certificate</Nav.Link>
						<Nav.Link href="/verifycert">Verify Signature</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		);
	}

	render() {
		return (
			<Router>
				<this.navbar></this.navbar>
				<Switch>
					<Route path="/keygen"><KeyGenPage /></Route>
					<Route path="/newcert"><NewCertPage /></Route>
					<Route path="/verifycert"><VerifyCertPage /></Route>
					<Route path="/"><Container>
						<h1>
							BlockCert: Blockchain based certificates
						</h1>
						</Container></Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
