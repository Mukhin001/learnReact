import st from './users.module.css';
import { useState } from 'react';

import userObject from "./userobject.js";

const Users = () => {
    const [active, setActive] = useState(null);

    return (
        <div className={st.Users}>
            <ul>
                {userObject.map((elem, i) => (
                    <li key={elem.name}
                        onClick={() => setActive(elem.name)}
                    >
                        <div
                            className={elem.name === active ? st.UsersActiv : null}
                        >
                            <h4>{elem.name + '!'}</h4>
                            <div 
                                className={elem.name === active ? null : st.content}
                            >
                                <p>{'City-' + elem.adress}</p>
                                <p>{'Age-' + elem.age}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;