import React from 'react';
import styles from './Project.module.css';

import image from '../images/friends.jpg';

const Project = () => {
  return (
    <div className={styles.projectContainer}>
      <h1>BookClub</h1>
      <div className={styles.image}>
        <img src={image} alt="Kamarátky čítajú" />
      </div>
      <p>
        BookClub je projekt, pre ľudí, ktorí radi čítajú a radi zdieľajú svoje
        názory na knižky s inými.
      </p>
      <p>
        Keď sa pripojíš do BookClubu, budeš si môcť pridávať prečítané knižky
        alebo si tvoriť svoj wishlist. Budeš môcť diskutovať o knihe mesiaca a
        prípadne knihy hodnotiť.
      </p>
    </div>
  );
};

export default Project;
