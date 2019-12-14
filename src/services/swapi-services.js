export default class SwapiService{

    _link = 'https://swapi.co/api';

    //connect server
    getResource = async(url) =>{
        const respons = await fetch(`${this._link}${url}`);

        if(!respons){
            throw new Error(`Error ${url}`);
        }
        return await respons.json();
    }

    getAllPerson = async () => {
        const respons = await this.getResource(`/people/`);
        return respons.results.map(this._transformPerson);
    }
    getAllPlanet = async () => {
        const respons = await this.getResource('/planets/');
        return respons.results.map(this._transformPlanet);
    }
    getAllStarship = async () => {
        const respons = await this.getResource('/starships/');
        return respons.results.map(this._transformStarship);
    }

    getPeople = async (id) => {
        const people = await this.getResource(`/people/${id}`);
        return this._transformPerson(people);
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet('planet');
    }
    getStarship = async (id) =>{
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarhip(starship);
    }
    //receiving id
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
      };


    //specific data
    _transformPlanet = (planet) =>{
        return{
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            gravity: planet.gravity,
            diameter: planet.diameter,
            climate: planet.climate
        }
    }
    _transformPerson = (person) =>{
        return{
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            mass: person.mass,
            skinKolor: person.skin_color,
            height:person.height
        }
    }
    _transformStarship = (starship) =>{
        return{
            id: this._extractId(starship),
            name: starship.name,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            model: starship.model,
        }
    }


}