import { Navbar } from 'components';
import React, { useState } from 'react';
import cn from 'classnames';
import { GiSandsOfTime } from 'react-icons/gi';
import { ImEye } from 'react-icons/im';
import { TbBrandUnity } from 'react-icons/tb';
import { FaCheck, FaTruck, FaLocationPinLock } from 'react-icons/fa6';
import { MdTimer } from 'react-icons/md';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from './Artwork.module.scss';

const mockedArtwork = {
  _id: '6310ddf23ca3c5016657845f',
  title: 'Le feu',
  category: 'PAINTING',
  styles: ['figurative'],
  mediums: ['acrylic', 'oil'],
  materials: ['wood'],
  subjects: ['body'],
  description: 'Tête head dans le feu fire huile acrylique sur bois',
  dimensions: { depth: 5.08, height: 99.06, width: 99.06 },
  creationYear: 2017,
  imageUrl:
    'https://images.saatchiart.com/saatchi/426209/art/3927331/2997207-LEWATDHP-7.jpg',
  price: 8500,
  artistShort: {
    name: 'philippe-cottin699537',
    country: '',
    countryCode: '',
    fullname: 'Philippe Cottin',
  },
  fullname: 'Le feu',
  status: 'AVAILABLE',
  artistId: '6310ddf13ca3c50166575d4f',
  otherArtworkImages: [
    'https://images.saatchiart.com/saatchi/21544/art/2875749/1945642-ZIGMIECQ-7.jpg',
    'https://images.saatchiart.com/saatchi/72505/art/1566244/779350-GTHZQIQV-7.jpg',
    'https://images.saatchiart.com/saatchi/692810/art/4524203/3594043-WOTRWQVL-7.jpg',
    'https://images.saatchiart.com/saatchi/248035/art/1630118/825179-7.jpg',
    'https://images.saatchiart.com/saatchi/11413/art/1274499/579708-7.jpg',
    'https://images.saatchiart.com/saatchi/390024/art/572727/314242-7.jpg',
    'https://images.saatchiart.com/saatchi/43914/art/7443587/6512757-KEVCFTLX-7.jpg',
    'https://images.saatchiart.com/saatchi/15403/art/145915/75501-7.jpg',
    'https://images.saatchiart.com/saatchi/33670/art/1678241/864708-7.jpg',
    'https://images.saatchiart.com/saatchi/738294/art/2713079/1782972-RWNDXUJH-7.jpg',
    'https://images.saatchiart.com/saatchi/974953/art/3713286/2783170-DLDTVXWP-7.jpg',
    'https://images.saatchiart.com/saatchi/900784/art/3760192/2830076-HDTPIQTT-7.jpg',
    'https://images.saatchiart.com/saatchi/22325/art/3044083/2113976-KTOWZTGY-7.jpg',
    'https://images.saatchiart.com/saatchi/46893/art/2892043/1961936-BJVMNNBV-7.jpg',
    'https://images.saatchiart.com/saatchi/422414/art/2832885/1902778-XNTXOGNX-7.jpg',
    'https://images.saatchiart.com/saatchi/809941/art/3212526/2282413-IXGXXNZJ-7.jpg',
    'https://images.saatchiart.com/saatchi/702876/art/2190723/1269419-LOINGWJC-7.jpg',
    'https://images.saatchiart.com/saatchi/782417/art/2695214/1765107-IHZUTVPU-7.jpg',
    'https://images.saatchiart.com/saatchi/955923/art/3690970/2760855-YIIOJVHT-7.jpg',
    'https://images.saatchiart.com/saatchi/916018/art/3483847/2553734-EFDCGNLR-7.jpg',
    'https://images.saatchiart.com/saatchi/314974/art/440279/233151-7.jpg',
    'https://images.saatchiart.com/saatchi/244087/art/398363/208470-7.jpg',
    'https://images.saatchiart.com/saatchi/7824/art/1621749/816774-7.jpg',
    'https://images.saatchiart.com/saatchi/539339/art/8050783/7117816-XRDWNGMO-7.jpg',
    'https://images.saatchiart.com/saatchi/298084/art/3408790/2478677-QFHCBBHC-7.jpg',
    'https://images.saatchiart.com/saatchi/22634/art/2366584/1436735-7.jpg',
    'https://images.saatchiart.com/saatchi/497905/art/1890358/1021809-JUYQOGPE-7.jpg',
    'https://images.saatchiart.com/saatchi/390390/art/3323817/2393704-XAOQBWBR-7.jpg',
    'https://images.saatchiart.com/saatchi/342941/art/523872/286764-7.jpg',
    'https://images.saatchiart.com/saatchi/736921/art/2712479/1782372-JLQEIAPA-7.jpg',
    'https://images.saatchiart.com/saatchi/1004588/art/7686403/6754637-LCMNGWDI-7.jpg',
    'https://images.saatchiart.com/saatchi/69883/art/7877619/6945400-GUPOPRDQ-7.jpg',
    'https://images.saatchiart.com/saatchi/808137/art/6530035/5599707-JEYFTVGT-7.jpg',
    'https://images.saatchiart.com/saatchi/543930/art/1872145/1013117-GPPUHEKK-7.jpg',
    'https://images.saatchiart.com/saatchi/72477/art/2641057/1710950-SXSVKWIY-7.jpg',
    'https://images.saatchiart.com/saatchi/1125546/art/5084331/4154153-EDEBZEZV-7.jpg',
    'https://images.saatchiart.com/saatchi/343389/art/1882665/1021908-7.jpg',
    'https://images.saatchiart.com/saatchi/285058/art/1645375/837384-7.jpg',
    'https://images.saatchiart.com/saatchi/6433/art/60467/54594-7.jpg',
    'https://images.saatchiart.com/saatchi/880348/art/3244576/2314463-RLAMFBUY-7.jpg',
    'https://images.saatchiart.com/saatchi/865245/art/3136697/2206588-INRXLLDQ-7.jpg',
    'https://images.saatchiart.com/saatchi/656572/art/2416435/1486505-7.jpg',
    'https://images.saatchiart.com/saatchi/72862/art/639668/343302-7.jpg',
    'https://images.saatchiart.com/saatchi/71977/art/1986140/1104665-7.jpg',
    'https://images.saatchiart.com/saatchi/218221/art/1373656/650376-7.jpg',
    'https://images.saatchiart.com/saatchi/1178859/art/5640273/4710081-JUGHSWIL-7.jpg',
    'https://images.saatchiart.com/saatchi/86307/art/1580845/793594-7.jpg',
    'https://images.saatchiart.com/saatchi/698150/art/4093908/3163761-ZNWKMWZO-7.jpg',
    'https://images.saatchiart.com/saatchi/53305/art/7387729/6456933-VDNMSYUU-7.jpg',
  ],
};

const Artwork = () => {
  const [openSection, setOpenSection] = useState('');

  const entity = mockedArtwork;
  const isFav = false;

  const formattedEntity = {
    category: entity.category,
    title: entity.title,
    id: entity._id,
    author: {
      fullname: entity.artistShort.fullname,
      id: entity.artistId,
    },
  };

  const toggleOpenSection = (section: string) => {
    setOpenSection(section === openSection ? '' : section);
  };

  return (
    <div className={styles.container}>
      <Navbar entity={formattedEntity} />
      <div className={styles.salesContainer}>
        <div className={styles.imageContainer}>
          <img
            src={entity.imageUrl}
            alt={entity.title}
            className={styles.image}
          />
          <div className={styles.viewOptionsContainer}>
            <div className={styles.textWithIconContainer}>
              <ImEye size={18} />
              <p>View in a room</p>
            </div>
            <div className={styles.textWithIconContainer}>
              <TbBrandUnity size={18} />
              <p>AR view</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.mainInfoContainer}>
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
          <button className={styles.button}>Acquire</button>
          <button className={styles.button}>Make an offer</button>
          <div className={styles.textWithIconContainer}>
            <GiSandsOfTime size={18} />
            <p>PRE-RESERVE FOR 24HOURS</p>
          </div>
          <div className={styles.textWithIconContainer}>
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
          <div className={styles.textWithIconContainer}>
            <FaTruck />
            <p>Delivery fee is 129€</p>
          </div>
          <div className={styles.textWithIconContainer}>
            <FaLocationPinLock />
            <p>
              Free pickup in <strong>Bruxelles, Belgium</strong>
            </p>
          </div>
          <div className={styles.textWithIconContainer}>
            <MdTimer />
            <p>Try 14 days at home for free</p>
          </div>
          <div className={styles.overviewContainer}></div>
        </div>
      </div>
      <div className={styles.informationSectionsContainer}>
        <div className={styles.informationSection}>
          <h2
            className={styles.informationSectionTitle}
            onClick={() => toggleOpenSection('description')}
          >
            DESCRIPTION
          </h2>
          <div
            className={cn(styles.description, {
              [styles.hidden]: openSection !== 'description',
            })}
          >
            {entity.description}
          </div>
        </div>
        <div className={styles.informationSection}>
          <h2
            className={styles.informationSectionTitle}
            onClick={() => toggleOpenSection('subject')}
          >
            SUBJECT, MEDIUM, STYLE, MATERIALS
          </h2>
          <div
            className={cn(styles.tagsContainer, {
              [styles.hidden]: openSection !== 'subject',
            })}
          >
            {['subjects', 'mediums', 'styles', 'materials'].map((key) => {
              const value = entity[key as keyof typeof entity] as string[];
              return (
                <React.Fragment key={key}>
                  <h3>{key.toUpperCase()}</h3>
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
        </div>
      </div>
    </div>
  );
};

export default Artwork;
