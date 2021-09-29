import React, { Children } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {AppBar, Container, Toolbar, Typography, Link} from '@material-ui/core'
import useStyles from '../utilis/styles';

export default function Layout({ title, children }) {
    const classes = useStyles();
    
    return (
        <div>
            <Head>
                <title>{title ? `${title} - Next Ecommerce` : 'Next Ecommerce'}</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                           <Typography className={classes.brand}>Ecommerce</Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/cart" passHref>
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
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
