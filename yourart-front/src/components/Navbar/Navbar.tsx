import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { Artwork } from 'types/data.type';

type Props = {
  entity: Artwork;
};

const Navbar = ({ entity }: Props) => {
  const formattedCategory =
    entity.category.charAt(0) + entity.category.slice(1).toLowerCase();

  const links = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: formattedCategory,
      url: `/${formattedCategory}`,
    },
    {
      label: `${entity.artistShort.fullname} Artworks`,
      url: `/author/${entity.artistId}`,
    },
    {
      label: entity.title,
      url: `/artwork/${entity._id}`,
    },
  ];

  return (
    <div className={styles.container}>
      {links.map((link, index) => {
        const isLastItem = index === links.length - 1;
        return (
          <Link
            to={link.url}
            key={link.label}
            className={`${styles.link} ${isLastItem ? styles.active : ''}`}
          >
            <span>{link.label}</span>
            {!isLastItem && <span>{' >'}</span>}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
