import React, { Component } from 'react'
import Button from './Button'
import '../styles/EditModal.css'

export default class EditModal extends Component {
  render() {
    const { edit, close, data, change, update } = this.props
    if (edit) {
      return (
        <div className='modal-container'>
          <div className='modal-box'>
            <h3>Edit List</h3>
            <div class='input'>
              <input
                type='text'
                value={data.title}
                onChange={change}
                autoFocus
              />
            </div>
            <div className='btn-group'>
              <Button text='Save' variant='success' action={update} />
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
