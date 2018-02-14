import React, { Component } from "react";
import { connect } from "react-redux";
import ConfirmationModal from "./ConfirmationModal";

export class ModalManager extends Component {
  render() {
    const { currentModal } = this.props;

    let renderedModal;

    if (currentModal) {
      const { modalProps = {} } = currentModal;
      renderedModal = <ConfirmationModal {...modalProps} />;
    }

    return <span>{renderedModal}</span>;
  }
}

function mapStateToProps(state) {
  return {
    currentModal: state.modalStore
  };
}

export default connect(mapStateToProps)(ModalManager);
