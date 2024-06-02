// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// //import Home from './Components/Home'; 
// //import AllItems from './Components/AllItems'; 
// import Registration from './Components/Registration';
// import Login from './Components/Login'; 

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         {/* <Route path="/all-items" element={<AllItems />} /> */}
//         <Route path="/register" element={<Registration />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import Login from './Components/Login'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
