import React from 'react';
import './styles.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

function FeaturedMovie( { item } ) {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }
  let description = item.overview.length > 200 ? item.overview.substring(0, 200) + '...' : item.overview;

  return (
    <section 
        className="featured" 
        style={{
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundImage: `url(https://i.ibb.co/cthCShQ/Whats-App-Image-2022-07-10-at-11-22-42-AM.jpg)`
        }}
    >
        <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">Tu y yo</div>
                
                <div className="featured--info">
                    <div className="featured--points">20/10 puntos</div>
                    <div className="featured--year">Enero 2022</div>
                    <div className="featured--seasons">Primera temporada</div>
                </div>

                <div className="featured--description">Esta es una historia donde un par de amigos experimentaron la sensación de lo duro que es la vida con sus sentimientos. Liz y Andres, no pensaron que era posible ilusionarse entre ellos dos. Las circunstancias estan haciendo que se siga formando algo bonito.    </div>
                <div className="featured--buttons">
                    <a disabled className="featured--watchbutton"><div><PlayArrowIcon /> Reproducir</div></a>
                    <a disabled className="featured--mylistbutton"><div><AddIcon />Agregar a lista</div></a>
                </div>
                <div className="featured--genres"><strong>Generos:</strong> Romance, Comedia, Drama</div>
            </div>
        </div>
    </section>
  );
}

export default FeaturedMovie;
