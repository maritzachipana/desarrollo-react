import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeWord } from '../../../redux/dictionary/dictionaryActions';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const DeleteWordModal = ({ isOpen, closeModal }) => {
    const [selectedWordId, setSelectedWordId] = useState(''); 
    const words = useSelector((state) => state.dictionary.words) || []; 
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (selectedWordId) {
            dispatch(removeWord({ id: selectedWordId })); 
            closeModal();
            setSelectedWordId('');  
        }
    };
    
    
    const handleCloseModal = () => {
        closeModal();
        setSelectedWordId(''); 
    };

    const h1Style = {
        textAlign: 'center',
    };
    const buttonContainer = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        marginTop: '30px',
    };

    const labelStyle = {
        marginBottom: '5px',
        fontWeight: 'bold',
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '40px',
        cursor: 'pointer',
    };

    const input = {
        gap: '10px',
        textAlign: 'center',
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Eliminar Palabra"
        >
            <button style={closeButtonStyle} onClick={handleCloseModal}>&times;</button>
            <h2>Modal Eliminar Palabra</h2>
            <h1 style={h1Style}>Traductor USIP</h1>
            <h3 style={h1Style}>¿Qué palabra desea eliminar del diccionario?</h3>
            <div className="modal">
                <div style={input}>
                    <label style={labelStyle}>Palabra:</label>
                    <select
                        value={selectedWordId}
                        onChange={e => setSelectedWordId(e.target.value)}
                    >
                        <option value="">Seleccione una palabra</option>
                        {words.map(word => (
                            <option key={word.id} value={word.id}>
                                {word.spanish} (ID: {word.id})
                            </option>
                        ))}
                    </select>
                </div>

                {words.length > 0 ? (
                    <div style={buttonContainer}>
                        <button onClick={handleDelete} disabled={!selectedWordId}>Eliminar</button>
                    </div>
                ) : (
                    <p>No hay palabras para eliminar.</p>
                )}
            </div>
        </Modal>
    );
};

export default DeleteWordModal;