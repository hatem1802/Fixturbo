import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import HomePage1 from "./Views/HomePage1";
import ContactPage from "./Views/ContactPage";
import ServicePage from "./Views/ServicePage"
import ServiceDetailsPage from "./Views/ServiceDetailsPage";
import AboutPage from "./Views/AboutPage";
import ProjectsDetailsPage from "./Views/ProjectsDetailsPage";
import ProjectsPage from "./Views/ProjectsPage";
import TeamPage from "./Views/TeamPage";
import CheckOut from "./Views/CheckOut";
import ShopPage from "./Views/ShopPage";
import ErrorPage from "./Views/ErrorPage";
import CartPage from "./Views/CartPage";
import { CartProvider } from "react-use-cart";

const router = createHashRouter([
  {
    path: '/',
    element: (<HomePage1 />)
  },
  {
    path:'/about',
    element: (<AboutPage />)
  },
  {
    path:'/service',
    element: (<ServicePage />)
  },
  {
    path:'/services_details',
    element: (<ServiceDetailsPage />)
  },
  {
    path:'/projects',
    element: (<ProjectsPage />)
  },
  {
    path:'/projects_details',
    element: (<ProjectsDetailsPage />)
  },
  {
    path:'/team',
    element: (<TeamPage />)
  },
  {
    path:'/shop',
    element: (<ShopPage />)
  },
  {
    path:'/check_out',
    element: (<CheckOut />)
  },
  {
    path:'/contact',
    element: (<ContactPage />)
  },
  {
    path:'/cart',
    element: (<CartPage />)
  },
  {
    path:'*',
    element: (<ErrorPage />)
  },

])

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
)