import React, { Component } from 'react';
import styled from 'styled-components';

const Modal = styled.button`
	outline: 1px dotted gray;
`;

class ReloadModal extends Component {
  state = {
    show: false
  };
  componentDidMount() {
    // グローバルイベントを引っ掛ける。
    window.addEventListener("newContentAvailable", () => {
      this.setState({
        show: true
      });
    });
  }
  onClick = () => {
    // リロードする
    window.location.reload(window.location.href);
  };
  render() {
	console.log(this.state.show);
    if (!this.state.show) {
      return null;
    }
    // <Modal> は単なる固定モーダルのコンポーネントなので省略。
    return (
      <Modal onClick={this.onClick}>
        <span> New Content Available!please reload </span>
      </Modal>
    );
  }
}

export default ReloadModal;

