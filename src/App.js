import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Skeleton from "./pages/skeleton";
import DefaultGallery from "./pages/default/Default";

// Lazy load the gallery components
const Neha = lazy(() => import("./pages/neha/Neha"));
const Pooja = lazy(() => import("./pages/pooja/Pooja"));
const Other = lazy(() => import("./pages/others/Other"));
function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Default root route */}

        <Route path="/" element={<Main />}>
          <Route index element={<DefaultGallery />} />

          {/* Nested routes with lazy loading */}
          <Route
            path="neha"
            element={
              <Suspense fallback={<Skeleton count={10} />}>
                <Neha />
              </Suspense>
            }
          />
          <Route
            path="pooja"
            element={
              <Suspense
                fallback={
                  <div>
                    <Skeleton count={10} />
                  </div>
                }
              >
                <Pooja />
              </Suspense>
            }
          />

             <Route
            path="other"
            element={
              <Suspense
                fallback={
                  <div>
                    <Skeleton count={10} />
                  </div>
                }
              >
                <Other />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
