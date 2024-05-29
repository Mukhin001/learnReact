import st from './showImg.module.css';

const ShowImg = (props) => {

    return (
        <div>
            <h5>showImg! {props.propsImg.name}</h5>
            <div className={st.showImg}>
                <img src={props.propsImg.imgSrc} alt="img"/>
                
            </div>
        </div>
    );
};


export default ShowImg;