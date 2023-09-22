import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

type Props = {
  entity: {
    category: string;
    title: string;
    id: string;
    author: {
      fullname: string;
      id: string;
    };
  };
};

const Navbar = ({ entity }: Props) => {
  const { category, title, author } = entity;

  const formattedCategory =
    category.charAt(0) + category.slice(1).toLowerCase();

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
      label: `${author.fullname} Artworks`,
      url: `/author/${author.id}`,
    },
    {
      label: title,
      url: `/artwork/${entity.id}`,
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
