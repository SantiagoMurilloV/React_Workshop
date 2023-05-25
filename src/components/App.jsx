import React, { useState } from "react";
import { CharacterData } from "../swapi";
import { CharacterCardModel } from "./CharacterCards";
import { Button } from "./ButtonUpdate";
import CharacterImage from "./image";
import R2 from '../image/R2-D2_Droid.png'


import BBO from '../image/BBO.png'

export const CharacterCard = () => {

    const [imageSrc, setImageSrc] = useState(BBO);
    const [character, setCharacter] = useState('');


    const fetchCharacterData = async () => {
        const data = await CharacterData();
        if (data.results.length > 0) {
            const random = Math.floor(Math.random() * data.results.length);
            setCharacter(data.results[random]);
        }
    };

    if (!character) {
        fetchCharacterData();
        return <p>Loading...</p>;
    }

    const handleUpdate = () => {
        fetchCharacterData();
    };

    const changeImage = () => {
        const newImage = imageSrc === BBO ? R2 : BBO;
        setImageSrc(newImage);
    };

    const handleButtonClick = () => {
        handleUpdate();
        // changeImage();
    };

    return (
        <div className="CharacterCard">
            <div className="ImageWrapper">
                <CharacterImage logo={imageSrc} className="CardImage" />
            </div>
            <CharacterCardModel character={character} />
            <Button text={''} onClick={handleButtonClick} />        
        </div>
    );
};
