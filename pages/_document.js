// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles'
import React from 'react';

export default class MyDocument extends Document {

    render(){
        return(
            <Html lang="pt-br">
                <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}


MyDocument.getInitialProps = async(ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>{
       return originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App{...props} />)
        });
    };
    const initalProps = await Document.getInitialProps(ctx);
    return {
        ...initalProps,
        styles: [
            ...React.Children.toArray(initalProps.styles), 
            sheets.getStyleElement(),
        ]
    }
};