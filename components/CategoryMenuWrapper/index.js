import React from 'react';
import styles from './CategoryMenuWrapper.module.scss'
import Menu from '../Menu';
import Image from 'next/image';

const CategoryMenuWrapper = ({onChangeCategoryFilter}) => {
    return (
        <div className={styles.wrapper}>
            <Menu onChangeCategoryFilter={onChangeCategoryFilter}/>
            <Image src="/hypseus/icons/double-arrow.png" alt="Filter by Category" width="48" height="48" />
        </div>
    );
};

export default CategoryMenuWrapper;
