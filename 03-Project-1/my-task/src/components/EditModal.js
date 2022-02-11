import React, { Component } from 'react'
import Button from './Button'
import '../styles/EditModal.css'

export default class EditModal extends Component {
  render() {
    const {edit , close, data, change, update} = this.props
      if(edit) {
      return (
        <div className='modal-container'>
          <div className="modal-box">
            <h3>Edit Task</h3>
              <div className="input">
                <input type="text" value={data.title} onChange={change} />
              </div>
              <div className="btn-group">
                <Button text='Save' variant='primary' action={update} />
                <Button text='Cancel' variant='warning' action={close} />
              </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  } 
}
