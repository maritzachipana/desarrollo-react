
import React, { useState } from 'react';
import AddWordModal from './AddWordModal';
import DeleteWordModal from './DeleteWordModal';
import TranslateWordModal from './TranslateWordModal';
import './Dictionary.css';

const Dictionary = () => {

    const [isAddWordModalOpen, setIsAddWordModalOpen] = useState(false);
    const [isDeleteWordModalOpen, setIsDeleteWordModalOpen] = useState(false);
    const [isTranslateWordModalOpen, setIsTranslateWordModalOpen] = useState(false);

    const openAddWordModal = () => setIsAddWordModalOpen(true);
    const closeAddWordModal = () => setIsAddWordModalOpen(false);
    const openDeleteWordModal = () => setIsDeleteWordModalOpen(true);
    const closeDeleteWordModal = () => setIsDeleteWordModalOpen(false);
    const openTranslateWordModal = () => setIsTranslateWordModalOpen(true);
    const closeTranslateWordModal = () => setIsTranslateWordModalOpen(false);

    return (
        <div className="dictionary-container">
            <h1>DICTIONARY USIP</h1>
            <p>
                Este módulo (diccionario) corresponde al módulo-7 ReactJS.
            </p>
            <p>
                URL: https://maritzachipana.io/desarrollo-react/dictionary
            </p>

            <div className="button-container">
                <div className="button-row">
                    <button onClick={openAddWordModal}>Agregar Palabra</button>
                    <button onClick={openDeleteWordModal}>Eliminar Palabra</button>
                    
                </div>

                <div className="translate-button">
                    <button onClick={openTranslateWordModal}>Traducir</button>
                </div>
                <AddWordModal isOpen={isAddWordModalOpen} closeModal={closeAddWordModal} />
                <DeleteWordModal isOpen={isDeleteWordModalOpen} closeModal={closeDeleteWordModal} />
                <TranslateWordModal isOpen={isTranslateWordModalOpen} closeModal={closeTranslateWordModal} />
            </div>
        </div>
    );
};

export default Dictionary;