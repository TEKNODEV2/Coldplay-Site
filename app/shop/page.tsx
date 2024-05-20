"use client"
import { useEffect, useState } from 'react';

export default function ShopPage() {
    const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);

        // Pulizia dell'event listener quando il componente viene smontato
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div>
            <h1>{hash}</h1>
        </div>
    );
}
