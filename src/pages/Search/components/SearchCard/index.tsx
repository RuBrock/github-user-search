import React from 'react';
import ButtonAction from '../../../../core/components/ButtonAction';
import { User } from '../../../../core/types/User';
import './styles.scss';

type Props = {
    user: User;
}

const SearchCard = ({ user }: Props) => (
    <div className="search-card-container">
        <div className="search-card-user">
            <img src={user.avatar_url} alt="User Avatar" className="search-card-user-img"/>

            <ButtonAction text="Ver perfil" />
        </div>

        <div className="search-card-infos">
            <ul className="upper-infos">
                <li>
                    Repositórios públicos: {user.public_repos}
                </li>

                <li>
                    Seguidores: {user.followers}
                </li>

                <li>
                    Seguindo: {user.following}
                </li>
            </ul>

            <div className="main-infos">
                <h4>Informações</h4>

                <ul className="main-infos-list">
                    <li>
                        <span className="main-info-bold">Empresa:</span> {user.company}
                    </li>

                    <li>
                        <span className="main-info-bold">Website/Blog:</span> {user.blog}
                    </li>

                    <li>
                        <span className="main-info-bold">Localidade:</span> {user.location}
                    </li>

                    <li>
                        <span className="main-info-bold">Membro desde:</span> {user.created_at}
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default SearchCard;