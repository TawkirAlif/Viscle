import './App.css';
import LeftWidget from './Widgets/Left_Widgets/LeftWidget.js'
import Header from './Header/Header'
function App() {
  return (
    <div className="app">
      <div className='app__header'>
        <Header profilrPic="https://avatars1.githubusercontent.com/u/73068865?s=120&v=4"/>
      </div>
      <div className='app__body'>

      <div className='left__widget'>
        <LeftWidget RightWidgetMessage='Send Cryto to an Email Address'/>
      </div>
      <div className='main__feed'>
            <h1>body</h1>
      </div>
      <div className='right__widgets'>
           <h1>widget</h1>
      </div>
      </div>
 
    </div>
  );
}

export default App;
