import React from 'react';

import * as styles from '../../assets/styles.scss';

function NotFoundContainer() {
    return (
        <>
            <h1 className={styles.title}>Not Found</h1>

            Page not found
        </>
    );
}

export {
    NotFoundContainer as default,
};
