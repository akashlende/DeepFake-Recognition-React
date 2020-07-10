import React, { Component } from "react";
import {
	Modal,
	ModalBody,
	FormText,
	FormGroup,
	Label,
	Button,
	Row,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import Axios from "axios";
import config from "../config";

export default class LoginModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: localStorage.getItem("loggedIn") === "true",
			isLogin: true,
		};
		this.handleLogin = this.handleLogin.bind(this);
		this.handleSignup = this.handleSignup.bind(this);

		this.changeForm = this.changeForm.bind(this);
	}

	handleLogin(e) {
		e.preventDefault();
		const username = this.username.value;
		const password = this.password.value;

		Axios.post(`${config.serverURL}/users/login`, {
			username: username,
			password: password,
		})
			.then((res) => {
				if (res.data.success) {
					localStorage.setItem("loggedIn", "true");
					localStorage.setItem("user", JSON.stringify(res.data));
					this.setState({
						loggedIn: localStorage.getItem("loggedIn") === "true",
					});
					window.location.reload();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	changeForm() {
		this.setState({
			isLogin: !this.state.isLogin,
		});
	}

	handleSignup(e) {
		e.preventDefault();
		const username = this.username.value;
		const password = this.password.value;
		const fullName = this.fullName.value;
		const email = this.email.value;

		Axios.post(`${config.serverURL}/users/signup`, {
			username: username,
			password: password,
			name: fullName,
			email: email,
		})
			.then((res) => {
				if (res.data.success) {
					this.handleLogin(e);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<Modal isOpen={!this.state.loggedIn} toggle={this.toggleLoginModal}>
				<div className='modal-header'>
					<h4 className='modal-title' id='loginModal'>
						{this.state.isLogin
							? "Hello there! It looks like you're not logged in"
							: "Hello there! Please do register below"}
					</h4>
					<button
						type='button'
						className='close'
						data-dismiss='modal'
						aria-hidden='true'>
						<i className='tim-icons icon-simple-remove' />
					</button>
				</div>
				<ModalBody>
					<AvForm
						onValidSubmit={
							this.state.isLogin ? this.handleLogin : this.handleSignup
						}>
						<FormGroup hidden={this.state.isLogin}>
							<Label for='fullName' style={{ color: "black" }} className='h4'>
								Full Name
							</Label>
							<AvField
								innerRef={(node) => (this.fullName = node)}
								type='text'
								name='fullName'
								id='fullName'
								errorMessage='Full Name is required'
								bsSize='lg'
								placeholder='Enter full name'
								required={!this.state.isLogin}
								style={{ color: "black" }}
							/>
							<FormText color='muted'>
								We'll never share your username with anyone else.
							</FormText>
						</FormGroup>
						<FormGroup hidden={this.state.isLogin}>
							<Label for='email' style={{ color: "black" }} className='h4'>
								Email
							</Label>
							<AvField
								innerRef={(node) => (this.email = node)}
								type='email'
								name='email'
								id='email'
								errorMessage='Email is required'
								bsSize='lg'
								placeholder='Enter email'
								required={!this.state.isLogin}
								style={{ color: "black" }}
							/>
						</FormGroup>
						<FormGroup>
							<Label for='username' style={{ color: "black" }} className='h4'>
								Username
							</Label>
							<AvField
								innerRef={(node) => (this.username = node)}
								type='text'
								name='username'
								id='username'
								errorMessage='Username is required'
								bsSize='lg'
								placeholder='Enter username'
								required
								style={{ color: "black" }}
							/>
							<FormText color='muted'>
								We'll never share your username with anyone else.
							</FormText>
						</FormGroup>
						<FormGroup className='mb-4'>
							<Label for='password' className='h4' style={{ color: "black" }}>
								Password
							</Label>
							<AvField
								innerRef={(node) => (this.password = node)}
								type='password'
								name='password'
								validate={{
									pattern: {
										value: this.state.isLogin
											? ""
											: "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
									},
								}}
								id='password'
								errorMessage={
									this.state.isLogin
										? "Password is required"
										: "Password must have, at least 1 Uppercase Letter, at least 1 Lowercase Letter, at least 1 Number, at least one special symbol, 8 characters or more"
								}
								bsSize='lg'
								placeholder='Enter password'
								required
								autoComplete='off'
								style={{ color: "black" }}
							/>
						</FormGroup>
						<Row className='justify-content-center'>
							<Button color='primary' type='submit'>
								Submit
							</Button>
						</Row>
						<Row className='justify-content-center mt-3'>
							<h5 style={{ color: "black" }}>
								{this.state.isLogin
									? "Don't have an account?"
									: "Already have an account?"}
							</h5>
						</Row>
						<Row className='justify-content-center'>
							<Button color='info' onClick={this.changeForm}>
								{this.state.isLogin ? "Signup" : "Login"}
							</Button>
						</Row>
					</AvForm>
				</ModalBody>
			</Modal>
		);
	}
}

// validate={{
// 	pattern: {
// 		value:
// 			"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
// 	},
// }}
