export const CharacterData = async () =>{
    try{
        const res =  await fetch(`https://swapi.py4e.com/api/people`);
        const data =  await res.json();
        return data;
    } catch(error){
        console.log(error)
    }
}