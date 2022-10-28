import React from 'react';
import './styles/style.css'
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Main from "./pages/main";
import City from "./pages/city";
import Contacts from "./pages/contacts";
import Documents from "./pages/documents";
import Phones from "./pages/city/phones";
import Invest from "./pages/city/invest";
import Managers from "./pages/administration/Managers";
import Manager from "./pages/administration/Managers/[id]";
import Feedback from "./pages/feedback";
import Photogallery from "./pages/city/photogallery";
import Example from "./pages/city/example";

const router = createBrowserRouter(createRoutesFromElements(
    <Route >
        <Route path="/" element={<Main />} />

        <Route path="/city" element={<City />} />
        <Route path="/city/phones" element={<Phones />} />
        <Route path="/city/invest" element={<Invest />} />
        <Route path="/city/photogallery" element={<Photogallery />} />
        <Route path="/city/example" element={<Example />} />

        <Route path="/administration/managers" element={<Managers />} />
        <Route path="/administration/managers/:id" element={<Manager />} />
        <Route path="/documents" element={<Documents />} />

        <Route path="/feedback" element={<Feedback />} />

        <Route path="/contacts" element={<Contacts />} />

    </Route>
))

function App() {
  return (
      <>
        <RouterProvider router={router}/>
      </>
  )
}

export default App;
