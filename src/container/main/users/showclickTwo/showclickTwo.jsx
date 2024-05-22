import st from './showClickContent.module.css';

const objStyle = {
    Ivan: {
        name: 'Ivan',
        background: 'coral',
        text: 'Hello world!',
        border: '3px solid blueviolet',  
    },
    Pavel: {
        background: 'orange',
        text: 'Hello world!', 
        border: '3px solid yellow',   
    },
    Alex: {
        background: 'tomato',
        text: 'Hello world!',   
        border: '3px solid crimson', 
    },
};

const ShowclickTwo = (props) => {
    let backGroun;
    let contentText;

    for(let key in objStyle) {
       if(key === props.propsName) {
            backGroun = objStyle[key];
            contentText = objStyle[key].text + ' Hello ' + key + '!';
       }
    }
    
    return (
        <div>
            <p className={st.showClickContent}  style={backGroun}>
                {props.propsName}<br/>{props.propsAdress}<br/>{contentText}
            </p>

        </div>
    );
};

export default ShowclickTwo;