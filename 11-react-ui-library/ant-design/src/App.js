import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd'
import './App.css';

function App() {
  const [show, setShow] = useState(false)
  const handleOk = () => setShow(false)
  const handleCancel = () => setShow(false)
  const openModal = () => setShow(true)

  return (
    <div className="App">
      <h1>Learning Ant Design</h1>
      <Button type='primary' onClick={openModal}>Primary</Button>
      <Modal visible={show} onOk={handleOk} onCancel={handleCancel}>
        My Modal
        <Input placeholder='enter your name' />
      </Modal>
    </div>
  );
}

export default App;
