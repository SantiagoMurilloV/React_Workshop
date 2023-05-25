import React from 'react';


export const CharacterCardModel = ({ character }) => {
        return (
                <div>
                        <h2>{character.name}</h2>
                        <p>Hpeight: {character.height}</p>
                        <p>Mass: {character.mass}</p>
                        <p>Hair Color: {character.hair_color}</p>
                        <p className='line'>_____________________________<br />________</p>
                        
                </div>
        );
};

