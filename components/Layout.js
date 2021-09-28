import React, { Children } from 'react';
import Head from 'next/head';
import {AppBar, Container, Toolbar, Typography} from '@material-ui/core'
import useStyles from '../utilis/styles';

export default function Layout({children}) {
    const classes = useStyles();
    
    return (
        <div>
            <Head>
                <title>Next Ecommerce</title>

            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>ecommerce</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>
                    All rights reserved. Next Ecommercer.
                </Typography>
            </footer>
        </div>
    )
}
