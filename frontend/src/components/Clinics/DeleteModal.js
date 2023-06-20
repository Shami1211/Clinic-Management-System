import React from 'react'
import './deleteModal.css';
import ModalDelete from '../Clinics/img/modalDelete.png'
import Modal from 'react-modal'

function DeleteModal({show, onClose, handleDelete}) {

  const modalStyles = {overlay: {backgroundColor: 'rgba(0, 0, 0, 0.6)'}};
  return (
    <Modal style={modalStyles} className="delete-modal-container" ariaHideApp={false} isOpen={show} onRequestClose={onClose}>
      <img src={ModalDelete} alt="Delete Icon"></img>
      <div className='modal-header'>Are you sure?</div>
      <p>
        Do you really want to delete this clinic?
        This process cannot be undone.
      </p>

      <div className='modal-buttons'>
        <button className='modalButton' onClick={onClose}>Cancel</button>
        <button className='modalButton deleteButton' onClick={handleDelete}>Delete</button>
      </div>
    </Modal>
  )
}

export default DeleteModal