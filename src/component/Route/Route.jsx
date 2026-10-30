import {
    createBrowserRouter,
    
  } from "react-router";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import AddMoney from "../../pages/AddMoney/AddMoney";
import Dashboard from "../../pages/dashboard/Dashboard";
import DailyExpense from "../../pages/DailyExpense/DailyExpense";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {index:true, Component:Home},
        {path:"/login", Component:Login},
        {path:"/addMoney", Component:AddMoney},
        {path:"/dashboard", Component:Dashboard},
        {path:"/dailyExpense", Component:DailyExpense},
      ]
    },
  ]);