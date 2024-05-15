import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const FavoritePage = lazy(() => import("./views/FavoritePages"));
const IndexPages = lazy(() => import("./views/IndexPages"));
import Layout from "./layouts/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path=""
            element={
              <Suspense fallback="Cargando">
                <IndexPages />
              </Suspense>
            }
            index
          />
          <Route
            path="/favoritos"
            element={
              <Suspense fallback="Cargando">
                <FavoritePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//Lazy y Susspend sirven para mejorar el performance de la pagina web
