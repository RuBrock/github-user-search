import React from 'react';
import ButtonAction from '../../core/components/ButtonAction';
import './styles.scss';

const Search = () => {
    return (
        <div className="search-container">
            <div className="search-form">
                <form>
                    <h1>Encontre um perfil Github</h1>

                    <input type="text"/>

                    <div className="btn-encontrar">
                        <ButtonAction text="Encontrar" />
                    </div>
                </form>
            </div>

            <div className="search-results">

            </div>
        </div>
    );
}

export default Search;