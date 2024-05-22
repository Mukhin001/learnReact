import st from './users.module.css';
import { useState } from 'react';

import userObject from "./userobject.js";
import ShowClick from './showClick/showClick.jsx';
import ShowclickTwo from './showclickTwo/showclickTwo.jsx';

const Users = () => {
    const [active, setActive] = useState(null);
    const [adress, setAdress] = useState();

    return (
        <div className={st.Users}>
            <ul>
                {userObject.map((elem, i) => (
                    <li key={elem.name}
                        onClick={() => {setActive(elem.name); setAdress(elem.adress)}}
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
            <ShowClick propsOne={'i am props!'} propsTwo={' a am props two!'}/>
            <ShowclickTwo propsName={active} propsAdress={adress}/>
        </div>
    );
};

export default Users;