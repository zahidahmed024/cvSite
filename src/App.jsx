import { Route, Routes } from "react-router-dom"
import { AdminDashboard, Dashboard, Login } from "./pages"


export default function App() {
  let isLoggedIn = false

  return (
    <Routes>
      {/* {
        !isLoggedIn ? <Route path="/" element={<Login />} /> : (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </>
        )
      } */}
      <Route path="/" element={<Login />} />
      <Route path="/user-dashboard" element={<Dashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  )
}