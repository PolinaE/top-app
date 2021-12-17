import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>My to - наш лучший топ</title>
			<link key={1} rel="icon" href="\favicon.ico" />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
