import PropTypes from 'prop-types';

import '../App.css';

export default function Exibir({ animal, deletarAnimal, mudarStatus, index }) {
    return (
        <>
            <article className="animal">
                <img src={animal.URL} alt={animal.Raça} width={250} />
                <h3>{animal.Raça}</h3>
                <p>{animal.Local}</p>
                <p>{animal.Status}</p>
                <div className="actions">
                    <button  onClick={() => { deletarAnimal(index) }}>Deletar</button>
                    <button id='statusChange' style={animal.Status === 'Perdido' ? {backgroundColor: 'red'} : {backgroundColor: '#4caf50'}} onClick={() => { 
                        mudarStatus(index)
                    }}>{animal.Status}</button>
                </div>
            </article>
        </>
    );
}

Exibir.propTypes = {
    animal: PropTypes.shape({
        URL: PropTypes.string.isRequired,
        Raça: PropTypes.string.isRequired,
        Local: PropTypes.string.isRequired,
        Status: PropTypes.string.isRequired,
    }),
    deletarAnimal: PropTypes.func.isRequired,
    mudarStatus: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};
