import Link from 'next/link';
import Head from 'next/head';

const Header = () => (
    <div className="header">
        <Head>
            <title>Evans Houseplants</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Courgette&display=swap"
                rel="stylesheet"
            ></link>
        </Head>
        <div className="header__image">
            <h1 className="header__title">Evans Houseplants</h1>
        </div>
        <div className="header__links">
            <Link href="/">
                <a className="header__anchor">Home</a>
            </Link>
            <Link href="/about">
                <a className="header__anchor">About</a>
            </Link>
        </div>
    </div>
);

export default Header;
