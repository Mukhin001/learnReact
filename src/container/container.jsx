import st from './container.module.css';

import Header from './header/header.jsx';
import Main from './main/main.jsx';

const Container = () => {
    return (
        <div className={st.container}>
            I am Container!
            <Header/>
            <Main/>
        </div>
    );
};

export default Container;