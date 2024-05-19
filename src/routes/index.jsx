import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAuthContext } from "providers";
import { Header } from "components";
import {
  LoginPage,
  DecksPage,
  AddDeckPage,
  DeckDetailsPage,
  PlayGamePage,
  SetupGamePage,
  CardsPage,
} from "pages";
import { ProtectedRoute } from "./ProtectedRoute";

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
