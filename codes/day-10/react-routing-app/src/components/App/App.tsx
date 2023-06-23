import AppRoutes from '../../routes/AppRoutes';
import DashBoard from '../common/dashboard/DashBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <DashBoard />
      <br />
      <AppRoutes />
    </div>
  );
}

export default App;
