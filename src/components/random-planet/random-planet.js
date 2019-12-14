import React,{ Component, Fragment } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-services';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state={
        planet:{},
        loading: true,
    }

    componentDidMount(){
        this.updatePlanet();
    }


    updatePlanet = () =>{
        const id = Math.floor(Math.random()*20)+2;

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    onPlanetLoaded = (planet) =>{
        this.setState({
            planet,
            loading:false,
            error:false
        })
    }

    onError = (err) =>{
        this.setState({
            error:true,
            loading:false,
        })
    }



    render(){

        const { planet,loading,error } = this.state;

        const show = !( error || loading );

        const content = show ? <PlanetView planet={planet} /> : null;
        const errorShow = error ? <ErrorIndicator /> : null;
        const loadingShow = loading ? <Spinner/> : null;

        return(
            <div className="random-planet jumbotron rounded">
                {content}
                {errorShow}
                {loadingShow}
            </div>
        )
    }
}



const PlanetView = ({ planet }) => {

    const { id, name, population,
      rotationPeriod, diameter } = planet;
  
    return (
      <Fragment>
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
             alt="planet" />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  };
  