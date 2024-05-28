import st from './list.module.css';
import { useState } from 'react';

import listArray  from "./listArray.js";

const List = ({onClickLi}) => {

    function clickLi(e, img) {
       onClickLi(e, img); 
    }
   
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
                                         onClick={(e) => clickLi(key, e.currentTarget.children[0].children[0].src)}
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