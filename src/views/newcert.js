import React from 'react';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';


class NewCertPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cert_file: null,
			private_key: ''
		};
		this.handleImageUpload = this.handleImageUpload.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handlePrivateKeyEnter = this.handlePrivateKeyEnter.bind(this)
	}

	async handleSubmit(){
		const _backend = "http://localhost:8080/new_cert";
		let formData = new FormData();
		formData.append(
			"Data",
			this.state.cert_file
		);
		formData.append(
			"PrivateKey",
			this.state.private_key
		)
		let res = await axios.post(_backend, formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		})
	}

	handlePrivateKeyEnter(e){
		this.setState({private_key: e.target.value})
	}

	handleImageUpload(e){
		this.setState({cert_file: e.target.files[0]})
	}

	render() {
		return (
			<Container>
				<h2>Add a new file certificate to the BlockChain</h2>

				<form encType="multipart/form-data" action="">
					<label>Enter Private Key:</label><br/>
					<textarea name="privateKey" onChange={this.handlePrivateKeyEnter}></textarea><br/>
					<input type="file" name="certFile" onChange={this.handleImageUpload}></input><br/>
					<Button onClick={this.handleSubmit}>Add to chain</Button>
				</form>
			</Container>
		);
	}
}

export default NewCertPage;