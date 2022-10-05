
import Sidebar from './components/Sidebar/Sidebar.component';
import {
  Routes,
  Route,
} from "react-router-dom";
import SearchTalent from './components/SearchTalent/SearchTalent.component';
import Dashboard from './components/Dashboard/Dashboard.component';
import CreateRequistion from './components/CreateRequistion/CreateRequistion.component';
import RequistionLog from './components/RequistionLog/RequistionLog.component';

function App() {
  return (
  <>
  <Routes>
      <Route path="/" element={<Sidebar/>}>
      <Route index element={<Dashboard/>} />
        <Route path="SearchTalent" element={<SearchTalent />} />
        <Route path="CreateRequistion" element={<CreateRequistion />} />
        <Route path="RequistionLog" element={<RequistionLog />} />


      </Route>
   
    </Routes>

  </>  );
}

export default App;
