import React from 'react';
import Image from 'next/image';
import styles from './SortFilters.module.scss';

const SortFilters = ({isAlphabeticalDesc, onChangeAlphabeticalFilter, isDateDesc, onChangeDateFilter}) => {
    return (
        <div className={styles.filters}>
            {isAlphabeticalDesc ?
                    <a onClick={() => onChangeAlphabeticalFilter(false)}>
                        <Image className={styles.filters__image} src="/hypseus/icons/from-a-to-z.png" alt="A to Z Filter" width="24" height="24" />
                    </a>
                :
               
                    <a onClick={() => onChangeAlphabeticalFilter(true)}>
                        <Image className={styles.filters__image} src="/hypseus/icons/from-z-to-a.png" alt="Z to A Filter" width="24" height="24" />
                    </a>
            }

            {isDateDesc ?
                    <a onClick={() => onChangeDateFilter(false)}>
                        <Image className={styles.filters__image} src="/hypseus/icons/date-descending.png" alt="Date Descending Filter" width="24" height="24" />
                    </a>
                :
                    <a onClick={() => onChangeDateFilter(true)}>
                        <Image className={styles.filters__image} src="/hypseus/icons/date-ascending.png" alt="Date Ascending Filter" width="24" height="24" />
                    </a>
            }
        </div>
    );
};

export default SortFilters;


