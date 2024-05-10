import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPages from "./views/IndexPages"
import FavoritePages from "./views/FavoritePages"
import Layout from "./layouts/Layout"

export default function AppRouter() {
  return (
    <BrowserRouter>
     <Routes>
      <Route element={<Layout/>}> 
        <Route path="" element={<IndexPages/>} index />
        <Route path="/favoritos" element={<FavoritePages/>} />
        </Route>
     </Routes>
    </BrowserRouter>
  )
}
