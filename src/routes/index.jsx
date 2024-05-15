import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAuthContext } from "../providers/authProvider";
import { Header } from "../components/Header/Header";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { DecksPage } from "../pages/DecksPage/DecksPage";
import { AddDeckPage } from "../pages/AddDeckPage/AddDeckPage";
import { DeckDetailsPage } from "../pages/DeckDetailsPage/DeckDetailsPage";
import { PlayGamePage } from "../pages/PlayGamePage/PlayGamePage";
import { SetupGamePage } from "../pages/SetupGamePage/SetupGamePage";
import { CardsPage } from "../pages/CardsPage/CardsPage";

export const Router = () => {
  const { user } = useAuthContext();

  const publicRoutes = [];

  const noAuthRoutes = [
    {
      path: "/login",
      element: (
        <>
          <Header />
          <LoginPage />
        </>
      ),
    },
  ];

  const authRoutes = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Navigate to="/decks" />,
        },
        {
          path: "/decks",
          element: <DecksPage />,
        },
        {
          path: "/decks/add",
          element: <AddDeckPage />,
        },
        {
          path: "/decks/:deckId",
          element: <DeckDetailsPage />,
        },
        {
          path: "/decks/:deckId/play",
          element: <PlayGamePage />,
        },
        {
          path: "/decks/:deckId/play/setup",
          element: <SetupGamePage />,
        },
        {
          path: "/cards",
          element: <CardsPage />,
        },
        {
          path: "/login",
          element: <Navigate to="/" />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!user ? noAuthRoutes : []),
    ...authRoutes,
  ]);

  return <RouterProvider router={router} />;
};
