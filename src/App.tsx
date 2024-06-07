import React, { useState } from 'react';
import styles from './FunnyButtons.module.css';
import backgroundImage from './background.jpg'; // Certifique-se de ter uma imagem de plano de fundo apropriada na mesma pasta

const FunnyButtons = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleYesClick = () => {
    setShowPopup(true);
  };

  const handleNoMouseOver = () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
    setNoButtonStyle({ position: 'absolute', left: randomX, top: randomY });
  };

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className={styles.title}>Você me ama?</h1>
      {showPopup && <div className={styles.popup}>Te amo também!</div>}
      
      <div>
        <button
          style={noButtonStyle}
          className={styles.noButton}
          onMouseOver={handleNoMouseOver}
          onClick={handleNoMouseOver}
        >
          Não
        </button>
        <button className={styles.yesButton} onClick={handleYesClick}>
          Sim
        </button>
      </div>
    </div>
  );
};

export default FunnyButtons;
