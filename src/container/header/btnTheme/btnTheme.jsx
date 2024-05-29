import st from './brnTheme.module.css';

const BtnTheme = () => {

function themeToggle(e) {

    e.currentTarget.classList.toggle(st.btnDark)
}


    return (
        <div className={st.wrapBtnTheme}>
            <button onClick={themeToggle} className={[st.btnLight, st.btnTheme].join(' ')}></button>
        </div>
    );
};

export default BtnTheme;