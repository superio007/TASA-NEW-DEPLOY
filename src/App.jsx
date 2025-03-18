import Homepage from "./pages/Homepage"
import NotFound from "./pages/NotFound"
import Contact from "./pages/ContactPage"
import MainLayout from "./Layouts/MainLayout"
import ProjectBrief from "./pages/ProjectBriefPage"
import Projects from "./pages/ProjectsPage"
import About from "./pages/AboutPage"
import Publications from "./pages/PublicationPage"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { RxFontRoman } from "react-icons/rx"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectBrief />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
