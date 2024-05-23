import st from './showImg.module.css';

const ShowImg = (props) => {
    console.log(props);
    return (
        <div>
            <h5>showImg!</h5>
            <div className={st.showImg}>
                <img src="images/all/dark-theme.jpg" alt="img"/>
                
            </div>
        </div>
    );
};

export default ShowImg;