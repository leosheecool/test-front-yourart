import React from 'react';
import styles from './MainEntityInfoContainer.module.scss';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

type Props = {
  entity: {
    fullname: string;
    artistShort: {
      fullname: string;
      country: string;
    };
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    price: number;
  };
  isFav?: boolean;
};

const MainEntityInfoContainer = ({ entity, isFav }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.artworkName}>{entity.fullname}</h1>
        <p className={styles.authorName}>
          {entity.artistShort.fullname} {entity.artistShort.country}
        </p>
        <p className={styles.dimensions}>
          {entity.dimensions.width}W x {entity.dimensions.height}H x{' '}
          {entity.dimensions.depth}D in
        </p>
        <p className={styles.price}>{entity.price}€</p>
      </div>
      {isFav ? <AiFillStar size={24} /> : <AiOutlineStar size={24} />}
    </div>
  );
};

export default MainEntityInfoContainer;
