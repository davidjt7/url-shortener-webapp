import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header(props: any) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">{props.name}</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
