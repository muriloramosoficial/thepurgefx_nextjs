import { useState, useEffect } from "react";

const TelegramCount = () => {
    const [inscritos, setInscritos] = useState(null);

    useEffect(() => {
        const obterNumeroDeInscritos = async () => {
            const response = await fetch('/api/telegram');
            const { membersCount } = await response.json();
            setInscritos(membersCount);
        };

        obterNumeroDeInscritos();
    }, []);

    return (
        <div>
            {inscritos ? (
                <p>{inscritos}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TelegramCount;
