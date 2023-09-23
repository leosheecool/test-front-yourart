import React from 'react';
import { ImEye } from 'react-icons/im';
import { TbBrandUnity } from 'react-icons/tb';
import styles from './ImageViewer.module.scss';
import utilsStyles from 'styles/utils.module.scss';

type Props = {
  entity: {
    imageUrl: string;
    title: string;
  };
};

const ImageViewer = ({ entity }: Props) => {
  return (
    <div className={styles.container}>
      <img src={entity.imageUrl} alt={entity.title} className={styles.image} />
      <div className={styles.viewOptionsContainer}>
        <div className={utilsStyles.textWithIconContainer}>
          <ImEye size={18} />
          <p>View in a room</p>
        </div>
        <div className={utilsStyles.textWithIconContainer}>
          <TbBrandUnity size={18} />
          <p>AR view</p>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
