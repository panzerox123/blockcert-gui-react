import React from 'react';
import { Container } from 'react-bootstrap';


class NewCertPage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Container>
				<h2>Add a new file certificate to the BlockChain</h2>

				<form encType="multipart/form-data" action="">
					<input type="file" name="certFile"></input>
					<input type="submit" value="Upload"></input>
				</form>
			</Container>
		);
	}
}

export default NewCertPage;