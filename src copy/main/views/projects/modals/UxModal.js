import React from 'react';
import Modal from 'react-modal';

import Blytzux from './projectpages/uxprojects/Blytzux'

class UxModal extends React.Component {
    constructor() {
      super();
      this.state = {
      thumbActive1: false,
      thumbActive2: false,
      thumbActive3: false,
      thumbActive4: false,
        };
    this._toggleClass1 = this._toggleClass1.bind(this);
    this._toggleClass2 = this._toggleClass2.bind(this);
    this._toggleClass3 = this._toggleClass3.bind(this);
    this._toggleClass4 = this._toggleClass4.bind(this);
    }
    _toggleClass1(){
        const currentState = this.state.thumbActive1;
        this.setState((prevState) =>{
            return({
                ...prevState,
                thumbActive1: !currentState
                });
            });
    }
    _toggleClass2(){
        const currentState = this.state.thumbActive2;
        this.setState((prevState) =>{
            return({
                ...prevState,
                thumbActive2: !currentState
                });
            });
    }
    _toggleClass3(){
        const currentState = this.state.thumbActive3;
        this.setState((prevState) =>{
            return({
                ...prevState,
                thumbActive3: !currentState
                });
            });
    }
    _toggleClass4(){
        const currentState = this.state.thumbActive4;
        this.setState((prevState) =>{
            return({
                ...prevState,
                thumbActive4: !currentState
                });
            });
    }
  render() {
    return (
        <div>
          <Modal
            isOpen={this.props.uxModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.props.closeModal}
            className = "modal-container"
            visible = {this.props.uxModalIsOpen}
            contentLabel="Example Modal"
          >
          <div className = "modal-inner-container">
            <div className = "modal-close" onClick={this.props.closeModal}></div>
            </div>
            <div className = "modal-white-backing"></div>
            <div className = "modal-color-line"></div>
            <div className = "modal-content-container">
            <div className = "ux-texture"></div>
              <Blytzux
              thumbActive1 = {this.state.thumbActive1}
              thumbActive2 = {this.state.thumbActive2}
              thumbActive3 = {this.state.thumbActive3}
              thumbActive4 = {this.state.thumbActive4}
              _toggleClass1 = {this._toggleClass1}
              _toggleClass2 = {this._toggleClass2}
              _toggleClass3 = {this._toggleClass3}
              _toggleClass4 = {this._toggleClass4}/>
             <div
                className = {this.state.thumbActive1||this.state.thumbActive2||this.state.thumbActive3||this.state.thumbActive4
                  ? 'thumb-enlarge-background' : 'null'}></div>
            </div>
          </Modal>
        </div>
    );
  }
}

export default UxModal
