import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { translateWord } from '../../../redux/dictionary/dictionaryActions'; 
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TranslateWordModal = ({ isOpen, closeModal }) => {
    const [palabra, setPalabra] = useState('');
    const [idioma, setIdioma] = useState('Ingles');
    const dispatch = useDispatch();
    const traduccion = useSelector((state) => state.dictionary.translatedWord); // Obtenemos la traducción del estado
    const error = useSelector((state) => state.dictionary.error); // Obtenemos el error del estado

    const handleTranslate = () => {
        dispatch(translateWord(palabra)); // Dispatch de la acción para traducir
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
    const input = {
        marginTop: '15px',
        gap: '10px',
        textAlign: 'center',
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

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Traducir Palabra"
        >
            <button style={closeButtonStyle} onClick={closeModal}>&times;</button>
            <h2>Modal Traducir Palabra</h2>
            <h1 style={h1Style}>Traductor USIP</h1>
            <p style={h1Style}>¿Qué palabra desea traducir en el diccionario?</p>
            <p style={h1Style}>Agregue su palabra y después el idioma de traducción</p>
            <div className="modal">
                <div style={input}>
                    <label style={labelStyle}>Palabra a traducir:</label>
                    <input 
                        type="text" 
                        value={palabra} 
                        onChange={(e) => setPalabra(e.target.value)} 
                    />
                </div>
                <div style={input}>
                    <label style={labelStyle}>Idioma de traducción:</label>
                    <select 
                        value={idioma} 
                        onChange={e => setIdioma(e.target.value)}
                    >
                        <option value="english">Inglés</option>
                        <option value="spanish">Español</option>
                        <option value="portuguese">Portugués</option>
                    </select>
                </div>

                <div className="resultado-traduccion">
                    {traduccion ? (
                        <p>{traduccion[idioma.toLowerCase()] || 'Traducción no disponible'}</p>
                    ) : (
                        <p>{error}</p>
                    )}
                </div>

                <div style={buttonContainer}>
                    <button onClick={handleTranslate}>Traducir</button>
                </div>
            </div>
        </Modal>
    );
};

export default TranslateWordModal;