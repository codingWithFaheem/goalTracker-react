import './App.css';
import Main from './components/Main';
import SidebarNav from './components/SidebarNav';

function App() {
  return (
    <div className="app flex   w-[46%] h-[54vh] pr-[1.8rem]  m-auto mt-[10rem] bg-[#CDC6F5] rounded-[22px]">
                  <SidebarNav />
                  <Main />
    </div>
  );
}

export default App;
