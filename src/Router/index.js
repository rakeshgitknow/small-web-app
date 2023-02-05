import { createBrowserRouter, createRoutesFromElements, defer, Route } from 'react-router-dom';

import { HomeLayout } from '../Component/Auth/HomeLayout';
import { ProtectedLayout } from '../Component/Auth/ProtectedLayout ';
import { AuthLayout } from '../Component/Auth/AuthLayout';
import { Activity, Checkout, Delivery, History, Login, Notifications, Settings } from '../Page';


const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<AuthLayout />}>

        <Route element={<HomeLayout />} loader={() => defer({ userPromise: getUserData() })}>
            <Route path="/" element={<Login />} />
        </Route>

        <Route path="/delivery" element={<ProtectedLayout />}>
            <Route path="home" element={<Delivery />} />
            <Route path="activity" element={<Activity/>} />
            <Route path="checkout" element={<Checkout/>} />
            <Route path="history" element={<History />} />
            <Route path='notifications' element={<Notifications/>}/>
            <Route path="settings" element={<Settings />} />

        </Route>

      </Route>
    </>
  )
);



