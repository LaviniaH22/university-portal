import { HashRouter, Routes, Route, Link, Navigate } from 'react-router';
import ProfessorClasses from './Pages/professorclasses.jsx';
import GradeDistribution from './Pages/gradedistribution.jsx';
import CourseSections from './Pages/coursesections.jsx';
import StudentHistory from './Pages/studenthistory.jsx';
import uniLogo from './assets/university-svgrepo-com.svg';
import barGraphLogo from './assets/magnifying-glass-bar-chart-svgrepo-com.svg';
import bookLogo from './assets/book-svgrepo-com.svg';
import gradCapLogo from './assets/grad-cap-svgrepo-com (1).svg';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/professorclasses" element={<ProfessorClasses />} />
        <Route path="/pages/gradedistribution" element={<GradeDistribution />} />
        <Route path="/pages/coursesections" element={<CourseSections />} />
        <Route path="/pages/studenthistory" element={<StudentHistory />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

function Home() {
  return (
    <main className="homePage"> 
      <h1>University Database Portal</h1>
      <div className="navContainer">
      <Link to="/pages/professorclasses">
        <div className="navButtons">
          <img src={uniLogo} alt="University Logo" />
          <h3>Find Professors' Classes</h3>
        </div>
      </Link>
      <Link to="/pages/gradedistribution">
        <div className="navButtons">
          <img src={barGraphLogo} alt="Bar Graph logo" />
          <h3>Courses' Grade Distribution</h3>
        </div>
      </Link>
      <Link to="/pages/coursesections">
        <div className="navButtons">
          <img src={bookLogo} alt="Book logo" />
          <h3>Find Course Sections</h3>
        </div>
      </Link>
      <Link to="/pages/studenthistory">
        <div className="navButtons">
          <img id="gradCapLogo" src={gradCapLogo} alt="Graduation Cap logo" />
          <h3>Student Course History</h3>
        </div>
      </Link>
      </div>
    </main>
  );
}

export default App;
