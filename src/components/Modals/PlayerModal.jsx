import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import ReactPlayer from "react-player";
import config from "../../config";

export default class PlayerModal extends Component {
	render() {
		return (
			<Modal toggle={this.props.toggle} isOpen={this.props.isOpen} size='lg'>
				<div className='modal-header'>
					<h4 className='modal-title' id='loginModal'>
						{this.props.fileName}
					</h4>
					<button
						onClick={this.props.toggle}
						type='button'
						style={{ color: "black" }}
						className='close'
						data-dismiss='modal'
						aria-hidden='true'>
						<i className='fa fa-times' />
					</button>
				</div>
				<ModalBody>
					{this.props.isImage ? (
						<img
							src={`${config.serverURL}/get-image/image?imageFile=${this.props.file}`}
							alt=''
						/>
					) : (
						<ReactPlayer
							url={`${config.serverURL}/get-video/video?videoFile=${this.props.file}`}
							controls
							playing={true}
							width='parent'
						/>
					)}
				</ModalBody>
			</Modal>
		);
	}
}
