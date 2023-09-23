import React from 'react';
import cn from 'classnames';
import styles from './InformationSection.module.scss';
import { IoIosArrowDown } from 'react-icons/io';

type Props = {
  title: string;
  onClick: () => void;
  isHidden: boolean;
  children: React.ReactNode;
};

const InformationSection = ({
  title,
  isHidden,
  onClick: handleClick,
  children,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer} onClick={handleClick}>
        <h2 className={styles.title}>{title}</h2>
        <IoIosArrowDown
          className={cn(styles.arrow, { [styles.reversed]: !isHidden })}
          size={24}
        />
      </div>
      <div
        className={cn(styles.description, {
          [styles.hidden]: isHidden,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default InformationSection;
