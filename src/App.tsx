import { useState } from 'react';
import styles from './FunnyButtons.module.css';
import backgroundImage from './background.jpg'; // Certifique-se de ter uma imagem de plano de fundo apropriada na mesma pasta

const FunnyButtons = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [buttonText, setButtonText] = useState('Não');

  const handleYesClick = () => {
    setShowPopup(true);
  };

  const handleNoMouseOver = () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
    setNoButtonStyle({ position: 'absolute', left: randomX, top: randomY });

    // Mudar o texto do botão "Não" para algo engraçado
    const funnyTexts = ['Nunca!', 'Jamais!', 'Nem pensar!', 'Desista!', 'Não, não, não!'];
    const randomText = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
    setButtonText(randomText);
  };

  const handleRandomBackgroundColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor }}>
      <h1 className={styles.title}>Você me ama?</h1>
      {showPopup && <div className={styles.popup}>Te amo também!</div>}
      
      <div>
        <button
          style={noButtonStyle}
          className={styles.noButton}
          onMouseOver={handleNoMouseOver}
          onClick={handleNoMouseOver}
        >
          {buttonText}
        </button>
        <button className={styles.yesButton} onClick={() => { handleYesClick(); handleRandomBackgroundColor(); }}>
          Sim
        </button>
      </div>
    </div>
  );
};

export default FunnyButtons;
