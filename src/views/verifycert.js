import React from 'react';
import { Button, Container, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';


class VerifyCertPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cert_file: null,
			private_key: '',
			verify: ''
		};
		this.handleImageUpload = this.handleImageUpload.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handlePrivateKeyEnter = this.handlePrivateKeyEnter.bind(this)
	}

	async handleSubmit() {
		const _backend = "http://localhost:8080/check_cert";
		let formData = new FormData();
		formData.append(
			"Data",
			this.state.cert_file
		);
		formData.append(
			"PublicKey",
			this.state.private_key
		)
		let res = await axios.post(_backend, formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		})
		console.log(res.data)
		this.setState({ verify: res.data.Verification ? "real" : "fake" })
	}

	handlePrivateKeyEnter(e) {
		this.setState({ private_key: e.target.value })
	}

	handleImageUpload(e) {
		this.setState({ cert_file: e.target.files[0] })
	}

	render() {
		return (
			<Container>
				<h2>Verify a document certificate</h2>
				<form encType="multipart/form-data" action="">
					<label>Enter Public Key:</label><br />
					<FormControl as="textarea" name="privateKey" onChange={this.handlePrivateKeyEnter}></FormControl><br />
					<FormGroup controlId="formFile" className="mb-3">
						<FormControl type="file" name="certFile" onChange={this.handleImageUpload} size="sm"></FormControl><br />
					</FormGroup>
					<Button onClick={this.handleSubmit}>Check</Button>
				</form>
				<h3><span color="green">{this.state.verify}</span></h3>
			</Container>
		);
	}
}

export default VerifyCertPage;