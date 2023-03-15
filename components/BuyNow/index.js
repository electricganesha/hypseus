
import Image from 'next/image';
import Link from 'next/link';
import styles from './BuyNow.module.scss';
import {cleanUpCloudinaryURL , convertToCloudinaryBlurURL} from '../../utils/cloudinary';
import { useState } from 'react';
import cc from 'classcat';

const BuyNow = ({
  item
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const name = item.the ?  `${item.the && "The "}${item.name}` : item.name;

    const toggleVisibility = (event) => {   
        event.preventDefault();
        setIsVisible(!isVisible);
    }

    return <>
            <Link href={item.affiliate}>
                <a className={cc([
                        styles.buyNow,
                        {
                            [styles['buyNow--hide']]: !isVisible
                        },
                    ])}>
                    <div className={styles.cross} onClick={toggleVisibility}/>
                    <p className={styles.buyNow__title}>Buy {name} now on Amazon</p>
                    <Image
                        className={styles.buyNow__image}
                        placeholder="blur"
                        blurDataURL={convertToCloudinaryBlurURL(item.image)}
                        src={cleanUpCloudinaryURL(item.image)}
                        alt={name}
                        layout='fill'
                    />
                </a>
            </Link>
        </>
}

export default BuyNow;
