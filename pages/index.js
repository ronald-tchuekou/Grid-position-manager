import React from 'react';
import Head from 'next/head';
import CardItem from '../components/CardItem';

const COUNT_COLUMN = 5,
    COUNT_ROW = 4;

export default function Home() {
    const [grids, setGrids] = React.useState([]);

    React.useEffect(() => {
        let result = [];
        for (let i = 0; i < COUNT_COLUMN * COUNT_ROW; i++) {
            result.push(i);
        }
        setGrids(result);
    }, []);

    return (
        <div className={''}>
            <Head>
                <title>Gestion des positionnements avec les grids.</title>
                <meta
                    name="description"
                    content="Gestion des positionnements avec les grids."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={'container'}>
                {grids.map((item) => (
                    <CardItem
                        key={item}
                        count_row={COUNT_ROW}
                        count_column={COUNT_COLUMN}
                    />
                ))}
            </main>
        </div>
    );
}
