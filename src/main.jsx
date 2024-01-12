import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './pages/ErrorPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import MainPage from './pages/MainPage.jsx';
import PageEdit from './pages/PageEdit.jsx';
import Autorization from './pages/Autorization.jsx';
import Registration from './pages/Registration.jsx';
import Catalog from './pages/Catalog.jsx';
import Category from './pages/Category.jsx';
import OrderPage from './pages/OrderPage.jsx';
import Buscket from './pages/Buscket.jsx';
import Account from './pages/Account.jsx';
import Search from './pages/Search.jsx';

const routes = [
  {
    index: true,
    path: '/',
    element: <MainPage />,
    title: 'Главная',
  },
  {
    path: '/Search',
    element: <Search />,
    title: 'поиск',
  },
  {
    path: '/AdminPage',
    element: <AdminPage />,
    title: 'Четвертая страница',
  },
  {
    path: '/Autorization',
    element: <Autorization />,
    title: 'авторизация',
  },
  {
    path: '/Registration',
    element: <Registration />,
    title: 'регистрация',
  },
  {
    path: '/Catalog',
    element: <Catalog />,
    title: 'каталог',
  },
  {
    path: '/Category/:id?',
    element: <Category />,
    title: 'категория',
  },
  {
    path: '/OrderPage',
    element: <OrderPage />,
    title: 'оформление',
  },
  {
    path: '/Buscket',
    element: <Buscket />,
    title: 'корзина',
  },
  {
    path: '/Account',
    element: <Account />,
    title: 'кабинет',
  },
  {
    path: '/page-edit',
    element: <PageEdit />,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App routes={routes} />,
    children: routes,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
