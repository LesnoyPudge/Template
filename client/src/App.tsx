import './App.css';
import logo from './logo.svg';

function App() {
    const qwe = 5;

    const zxc = () => {};

    let person = {
        name: 'Yoda',
        designation: 'Jedi Master ',
    };

    function trainJedi(jediWarrion: any) {
        if (jediWarrion.name === 'Yoda') {
            console.log('No need! already trained');
        }
        console.log(`Training ${jediWarrion.name} complete`);
    }

    trainJedi(person);
    trainJedi({ name: 'Adeel', designation: 'padawan' });

    return (
        <div className='App'>
            <header className='App-header'>
                <img
                    src={logo}
                    className='App-logo'
                    alt='logo'
                />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
            <div draggable={true}></div>
        </div>
    );
}

export default App;
