import React from 'react';

function SummaryResultView(props) {
    return (
        <>
            {props.firstNumber} + {props.secondNumber} = {props.summary}
        </>
    );
}

export {
    SummaryResultView as default,
};
