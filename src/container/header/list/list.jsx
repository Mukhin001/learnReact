import st from './list.module.css';
import { useState } from 'react';

import listArray  from "./listArray.js";

const List = () => {

    const [imgActive, imgSet] = useState('propsEmpty');

    console.log(imgActive);
    return (
        <div>
           <h4> List!</h4>
           <div  className={st.listContainer}>
                {
                    listArray.map((elem, i) => (
                        <ul key={i}>
                            {elem.name}
                            {
                                Object.keys(elem.list).map(key => (
                                   
                                    <li key={key}
                                        onClick={() => imgSet(key)}
                                    >{key}
                                        <div className={st.liWrapImg}>
                                            <img src={elem.list[key]} alt='img'/>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
           </div>
        </div>
    );
};

export default List;