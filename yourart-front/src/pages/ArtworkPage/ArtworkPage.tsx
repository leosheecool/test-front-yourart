import {
  ImageViewer,
  InformationSectionContainer,
  MainEntityInfoContainer,
  Navbar,
} from 'components';
import { GiSandsOfTime } from 'react-icons/gi';
import { FaCheck, FaTruck, FaLocationPinLock } from 'react-icons/fa6';
import { MdTimer } from 'react-icons/md';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getArtwork } from 'api/Artworks';
import { Artwork } from 'types/data.type';
import Loader from 'components/Loader/Loader';
import { ReactComponent as NotFound } from 'assets/illustrations/404 Error.svg';
import styles from './Artwork.module.scss';
import utilsStyles from 'styles/utils.module.scss';

const ArtworkPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: entity,
    error,
    isFetching,
  } = useQuery<Artwork, Error>({
    queryKey: ['artwork', id],
    queryFn: () => getArtwork(id),
  });
  const isFav = false;

  if (!entity)
    return (
      <div className={styles.tempContainer}>
        <Loader />
        {error && <NotFound className={styles.illustration} />}
        <h1>{isFetching ? 'Artwork Loading...' : 'Artwork not found'}</h1>
        {error && (
          <>
            <p>{error?.message}</p>
            <button
              className={utilsStyles.button}
              style={{ width: 'fit-content' }}
              onClick={() => history.back()}
            >
              Go Back
            </button>
          </>
        )}
      </div>
    );

  return (
    <div className={styles.container}>
      <Navbar entity={entity} />
      <div className={styles.salesContainer}>
        <ImageViewer entity={entity} />
        <div>
          <MainEntityInfoContainer entity={entity} isFav={isFav} />
          <button className={utilsStyles.button}>Acquire</button>
          <button className={cn(utilsStyles.button, utilsStyles.secondary)}>
            Make an offer
          </button>
          <div className={utilsStyles.textWithIconContainer}>
            <GiSandsOfTime size={18} />
            <p>PRE-RESERVE FOR 24HOURS</p>
          </div>
          <div className={utilsStyles.textWithIconContainer}>
            <FaCheck />
            <p>131€ estimated delivery fee for France</p>
          </div>
          <p className={styles.feeDescription}>
            In order to obtain an accurate delivery fee please enter your
            country of residence and zip code:
          </p>
          <div className={styles.inputsContainer}>
            <input type="text" placeholder="Country" />
            <input type="number" placeholder="Zip code" />
          </div>
          <div className={utilsStyles.textWithIconContainer}>
            <FaTruck />
            <p>Delivery fee is 129€</p>
          </div>
          <div className={utilsStyles.textWithIconContainer}>
            <FaLocationPinLock />
            <p>
              Free pickup in <strong>Bruxelles, Belgium</strong>
            </p>
          </div>
          <div className={utilsStyles.textWithIconContainer}>
            <MdTimer />
            <p>Try 14 days at home for free</p>
          </div>
          <div className={styles.overviewContainer}></div>
        </div>
      </div>
      <InformationSectionContainer entity={entity} />
    </div>
  );
};

export default ArtworkPage;
