import React from 'react';
import cn from 'classnames';
import styles from './InformationSection.module.scss';

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
      <h2 className={styles.title} onClick={handleClick}>
        {title}
      </h2>
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
