
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../../../redux/dictionary/dictionaryActions';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const AddWordModal = ({ isOpen, closeModal }) => {
    const [spanish, setSpanish] = useState('');
    const [english, setEnglish] = useState('');
    const [portuguese, setPortuguese] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addWord({ spanish, english, portuguese }));
        closeModal();
    };

    const h1Style = {
        textAlign: 'center',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        textAlign: 'center',
    };

    const labelStyle = {
        marginBottom: '5px',
        fontWeight: 'bold',
    };

    const buttonContainer = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center' ,
        marginTop: '30px'
        /* Centra el botón horizontalmente */
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '40px',
        cursor: 'pointer'
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Agregar Palabra"
        >
            <button style={closeButtonStyle} onClick={closeModal}>&times;</button>
            <h2>Modal Agregar Palabra</h2>
            <h1 style={h1Style}>Traductor USIP</h1>
            <div style={formStyle}>
                    <div>
                        <label style={labelStyle}>Español:</label>
                        <input value={spanish} onChange={e => setSpanish(e.target.value)} placeholder="Español" />
                    </div>
                    <div>
                        <label style={labelStyle}>Inglés:</label>
                        <input value={english} onChange={e => setEnglish(e.target.value)} placeholder="Inglés" />
                    </div>
                    <div>
                        <label style={labelStyle}>Portugués:</label>
                        <input value={portuguese} onChange={e => setPortuguese(e.target.value)} placeholder="Portugués" />
                    </div>
            </div>
            <div style={buttonContainer}>
                <button onClick={handleSubmit}>Agregar</button>
            </div>     
        </Modal>
    );
};

export default AddWordModal;
