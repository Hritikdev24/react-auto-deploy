import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Skeleton from "./pages/skeleton";
// Lazy load the gallery components
const Neha = lazy(() => import("./pages/neha/Neha"));
const Pooja = lazy(() => import("./pages/pooja/Pooja"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default root route */}
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />}>
          {/* Nested routes with lazy loading */}
          <Route
            path="neha"
            element={
              <Suspense fallback={<Skeleton  count={10}/>}>
                <Neha />
              </Suspense>
            }
          />
          <Route
            path="pooja"
            element={
              <Suspense fallback={<div><Skeleton  count={10}/></div>}>
                <Pooja />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
