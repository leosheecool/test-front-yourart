import React, { useState } from 'react';
import styles from './InformationSectionContainer.module.scss';
import InformationSection from './InformationSection/InformationSection';
import { Artwork } from 'types/data.type';
import cn from 'classnames';
import { Caroussel } from 'components';

type Props = {
  entity: Artwork;
};

const InformationSectionContainer = ({ entity }: Props) => {
  const [openSection, setOpenSection] = useState('');

  const toggleOpenSection = (section: string) => {
    setOpenSection(section === openSection ? '' : section);
  };

  return (
    <div>
      <InformationSection
        isHidden={openSection !== 'description'}
        onClick={() => toggleOpenSection('description')}
        title="DESCRIPTION"
      >
        {entity.description}
      </InformationSection>
      <InformationSection
        isHidden={openSection !== 'subject'}
        onClick={() => toggleOpenSection('subject')}
        title="SUBJECT, MEDIUM, STYLE, MATERIALS"
      >
        <div
          className={cn(styles.tagsContainer, {
            [styles.hidden]: openSection !== 'subject',
          })}
        >
          {['subjects', 'mediums', 'styles', 'materials'].map((key) => {
            const value = entity[key as keyof typeof entity] as string[];
            return (
              <React.Fragment key={key}>
                <h3 className={styles.tagTitle}>{key.toUpperCase()}</h3>
                <div>
                  {value.map((tag: string) => (
                    <span className={styles.tag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </InformationSection>
      <InformationSection
        isHidden={openSection !== 'other images'}
        onClick={() => toggleOpenSection('other images')}
        title={`${entity.artistShort.fullname.toUpperCase()}'S OTHER MASTERPIECES`}
      >
        <Caroussel images={entity.otherArtworkImages} />
      </InformationSection>
    </div>
  );
};

export default InformationSectionContainer;
