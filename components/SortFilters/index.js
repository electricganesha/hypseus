import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SortFilters.module.scss';
import { useRouter } from "next/router";

const SortFilters = props => {
    const { query } = useRouter();
    const [isAlphabeticalDesc, setIsAlphabeticalDesc] = useState(true);
    const [isDateDesc, setIsDateDesc] = useState(true);

    return (
        <div className={styles.filters}>
            {isAlphabeticalDesc ?
                <Link href={{
                    query: { ...query, sort: 'name', order: 'desc',  }
                }}>
                    <a onClick={() => setIsAlphabeticalDesc(false)}>
                        <Image className={styles.filters__image} src="/from-a-to-z.png" alt="A to Z Filter" width="24" height="24" />
                    </a>
                </Link>
                :
                <Link href={{
                    query: { ...query, sort: 'name', order: 'asc',  }
                }}>
                    <a onClick={() => setIsAlphabeticalDesc(true)}>
                        <Image className={styles.filters__image} src="/from-z-to-a.png" alt="Z to A Filter" width="24" height="24" />
                    </a>
                </Link>
            }

            {isDateDesc ?
                <Link href={{
                    query: { ...query, sort: 'year', order: 'desc',  }
                }}>
                    <a onClick={() => setIsDateDesc(false)}>
                        <Image className={styles.filters__image} src="/date-descending.png" alt="Date Descending Filter" width="24" height="24" />
                    </a>
                </Link>
                :
                <Link href={{
                    query: { ...query, sort: 'year', order: 'asc',  }
                }}>
                    <a onClick={() => setIsDateDesc(true)}>
                        <Image className={styles.filters__image} src="/date-ascending.png" alt="Date Ascending Filter" width="24" height="24" />
                    </a>
                </Link>
            }

        </div>
    );
};

export default SortFilters;


