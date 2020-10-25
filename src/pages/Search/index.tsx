import React, { useState } from 'react';
import { User } from '../../core/types/User';
import { makeRequest } from '../../core/utils/request';
import ButtonAction from '../../core/components/ButtonAction';
import SearchCard from './components/SearchCard';
import './styles.scss';
import SearchCardLoader from './components/Loaders/SearchCardLoader';

const Search = () => {
    const [userResponse, setUserResponse] = useState<User>();
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        makeRequest({ url: `/${username}` })
            .then(response => setUserResponse(response.data))
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="search-container">
            
            <div className="search-form">
                <form onSubmit={handleSubmit}>
                    <h1>Encontre um perfil Github</h1>

                    <input 
                        value={username}
                        type="text"
                        onChange={handleChangeUser}
                    />

                    <div className="btn-encontrar">
                        <ButtonAction text="Encontrar" />
                    </div>
                </form>
            </div>

            {isLoading ?
                <SearchCardLoader />
            :
                (userResponse ? <SearchCard user={userResponse}/> : '')
            }
        </div>
    );
}

export default Search;