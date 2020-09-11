import React from 'react';
import { Typography, Link } from '@material-ui/core';

function ResultText(props: any) {
    return (
        <div>
            <Link href={props.result || ''} target="_blank" variant="body2">
                <Typography variant="h6">{props.result}</Typography>
            </Link>
        </div>
    );
}

export default ResultText;
