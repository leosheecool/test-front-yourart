import React from 'react';
import { ReactComponent as NotFound } from 'assets/illustrations/404 Error.svg';
import styles from './NotFoundPage.module.scss';
import utilsStyles from 'styles/utils.module.scss';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <NotFound className={styles.illustration} />
      <h1>Page Not Found</h1>
      <button
        className={utilsStyles.button}
        style={{ width: 'fit-content' }}
        onClick={() => navigate('/')}
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
