import React from 'react';
import { Button, Container, FormControl } from 'react-bootstrap';
import axios from 'axios';

class KeyGenPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			PublicKey: "",
			PrivateKey: ""
		};
		this.get_keys = this.get_keys.bind(this)
		this.setState(this.state)
	}

	async get_keys() {
		let res = null;
		const _backend = "http://localhost:8080/keygen";
		try {
			res = await axios.get(_backend)
			//let parsed_res = JSON.parse(res.data)
			this.setState(res.data)
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		return (
			<Container>
				<h2>KeyGen</h2>
				<p>Generate a Private and Public key. <b>STORE THESE KEYS CAREFULLY</b> as you will never be able to generate the same pair again.
					The Private key will be used to generate certificates for you files <b>AND WILL NOT BE SHARED</b>. The public key can be shared anywhere you would like.
				</p>
				<Button onClick={this.get_keys}>Keygen</Button>
				<h3>Public Key</h3>
				<FormControl as='textarea' value={this.state.PublicKey} />
				<h3>Private Key</h3>
				<FormControl as='textarea' value={this.state.PrivateKey} />
			</Container>
		);
	}
}

export default KeyGenPage
