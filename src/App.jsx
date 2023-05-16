import "animate.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//loader
import projectLoader from "./loader/projectLoader";
import projectDetailsLoader from "./loader/ProjectDetailsLoader";

//layouts
import RootLayout from "./layouts/RootLayout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./Footer";

import NotFount from "./pages/NotFount";

// Projects
import Condominium from "./pages/projects/Condominium";
import Tonwhouse from "./pages/projects/Tonwhouse";
import ProjectDetails from "./pages/projects/ProjectDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />}>
        <Route
          path="tonwhouse"
          element={<Tonwhouse />}
          loader={projectLoader}
        />
        <Route
          path="condominium"
          element={<Condominium />}
          loader={projectLoader}
        />
        <Route
          path="/projects/condominium/:id"
          element={<ProjectDetails />}
          loader={projectDetailsLoader}
        />
        <Route
          path="/projects/tonwhouse/:id"
          element={<ProjectDetails />}
          loader={projectDetailsLoader}
        />
      </Route>
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<NotFount />} />
    </Route>
  )
);

function App() {
  return (
    <div className="h-auto flex flex-col">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
