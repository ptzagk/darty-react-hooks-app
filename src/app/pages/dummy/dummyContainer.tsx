import React, { useState, useEffect } from 'react';

import SummaryResultView from './summaryResultView';

import * as styles from '../../assets/styles.scss';

function DummyContainer() {
    const [ state, setState ] = useState({
        firstNumber: 4,
        secondNumber: 7,
        result: null,
    });

    useEffect(() => {
        const timer = setTimeout(
            () => setState({
                ...state,
                result: state.firstNumber + state.secondNumber,
            }),
            1000,
        );

        return () => clearTimeout(timer);
    });

    let summary;

    if (state.result === null) {
        summary = 'Calculating...';
    }
    else {
        summary = state.result;
    }

    return (
        <>
            <h1 className={styles.title}>Dummy</h1>

            <SummaryResultView firstNumber={state.firstNumber} secondNumber={state.secondNumber} summary={summary} />
        </>
    );
}

export {
    DummyContainer as default,
};
