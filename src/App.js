import React, { useEffect } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { TopBar } from './parts/TopBar'
import { useRoutes } from './router'
function App() {
  const routes = useRoutes()
  
  useEffect(() => {
    document.title = "hello"
  })
  return (
    <div>
    <TopBar />
    <Router>
      {routes}
    </Router></div>
  )
}

export default App;
