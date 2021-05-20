import styles from './Project.module.css';
import image from '../images/picture.png';

const AboutMe = () => {
  return (
    <div className={styles.projectContainer}>
      <h1>O mne</h1>
      <h2>Diana Nemčeková</h2>
      <div className={styles.image}>
        <img src={image} alt="Diana Nemčeková fotka" />
      </div>

      <p>
        Momentálne sa učím v{' '}
        <a href="https://www.czechitas.cz/en/" target="_blank">
          Czechitas
        </a>{' '}
        na kurze Digitálna akadémia WEB. Inak pracujem v logistickej firme, ale
        veľmi rada by som sa zamestnala v oblasti IT. Rada čítam knihy,
        plánujem, učím sa nové veci a viac sa o mne dozviete na{' '}
        <a
          href="https://www.linkedin.com/in/diana-nem%C4%8Dekov%C3%A1-11113896/"
          target="_blank"
        >
          LinkedIn
        </a>{' '}
        a o mojich projektoch na{' '}
        <a href="https://github.com/Dianka48" target="_blank">
          Github
        </a>
        .
      </p>
    </div>
  );
};

export default AboutMe;
