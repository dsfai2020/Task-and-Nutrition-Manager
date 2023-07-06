
import MainToDoList from './MainToDoList'

// You brought in the MainToDoList using this page as a main render for it.

const MainHeader = () => {
    return ( 
    <div>
      <h1>Main Header</h1>
      <MainToDoList />
    </div>)
    ;
  };
  
  export default MainHeader;