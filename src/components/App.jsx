import React,{useState} from "react";
import { CharacterData } from "../swapi";
import { CharacterCardModel } from "./CharacterCards";
import { Button } from "./ButtonUpdate";
import CharacterImage from './image'

import BBO from '../image/BBO.png'


export const CharacterCard = () => {

    const [character, setCharacter] = useState({})

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

    return (
        
        <div className="CharacterCard">
        <img src={BBO} alt="Logo Star Wars" />
            <CharacterCardModel  character={character}/>
            <Button text={''} onClick={handleUpdate} />
        </div>

       
    )

}