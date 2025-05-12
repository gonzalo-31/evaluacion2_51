import React from 'react';
import NewsCard from './NewsCard';

function Newcards() {
    const news = [
        { title: 'Noticia 1', description: 'Esta es la descripción de la noticia 1.' },
        { title: 'Noticia 2', description: 'Esta es la descripción de la noticia 2.' },
        { title: 'Noticia 3', description: 'Esta es la descripción de la noticia 3.' },
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {news.map((item, index) => (
                <NewsCard key={index} title={item.title} description={item.description} />
            ))}
        </div>
    );
}

export default Newcards;
