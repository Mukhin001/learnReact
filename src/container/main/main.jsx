import Input from './input/input.jsx';
import Users from './users/users.jsx';
import GreetUser from './greetUser/greetUser.jsx';

const Main = () => {
    return (
        <main> I am Main!
            <GreetUser/>
            <Input/>
            <Users/>
        </main>
    );
};

export default Main;