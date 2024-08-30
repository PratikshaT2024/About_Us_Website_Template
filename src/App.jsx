import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import AboutUs from './assets/Pages/AboutUs';

function App() {
  return (
    <div>

        
<BrowserRouter>

<Routes>
      <Route path="/" element={<AboutUs/>} />
      
    

      {/* Add other routes as needed */}
    </Routes>
</BrowserRouter>
    
    </div>
  )
}

export default App