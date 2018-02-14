import React, { Component } from "react";
import { connect } from "react-redux";
import { Confirm } from "semantic-ui-react";
import { closeModal } from "../actions/modal-actions";

export class ConfirmationModal extends Component {
  confirmModal = () => {
    this.props.onConfirm();
    this.props.closeModal();
  }

  render() {
    return (
      <Confirm
        open={true}
        onConfirm={this.confirmModal}
        onCancel={this.props.closeModal}
      />
    );
  }
}

export default connect(null, { closeModal })(ConfirmationModal);
