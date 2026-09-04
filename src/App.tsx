import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const Home = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.Home })),
);
const Portfolio = lazy(() =>
  import("./pages/Portfolio").then((m) => ({ default: m.Portfolio })),
);
const About = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.About })),
);
const Contact = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.Contact })),
);
const ProjectDetailPage = lazy(() =>
  import("./pages/ProjectDetail").then((m) => ({ default: m.ProjectDetailPage })),
);

function Fallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper text-ink-soft">
      <span className="text-sm uppercase tracking-widest">Loading…</span>
    </div>
  );
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Fallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/portfolio/:id", element: <ProjectDetailPage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
