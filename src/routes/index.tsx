import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import StartPage from "../pages/StartPage";
import ParticipatePage from "../pages/ParticipatePage";
import CountDownPage from "../pages/CountDownPage";
import VotePage from "../pages/VotePage";
import ThankYouPage from "../pages/ThankYouPage";
import VoteDetails from "../pages/VoteDetails";
import ResultPage from "../pages/ResultPage";




const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/start',
                element: <StartPage />
            },
            {
                path: '/participate',
                element: <ParticipatePage />
            },
            {
                path: '/countdown',
                element: <CountDownPage />
            },
            {
                path: '/vote',
                element: <VotePage />
            },
            {
                path: '/thank',
                element: <ThankYouPage />
            },
            {
                path: '/details',
                element: <VoteDetails />
            },
            {
                path: '/result',
                element: <ResultPage />
            }
        ]
    }
])


export default router;