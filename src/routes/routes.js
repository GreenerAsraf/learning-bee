import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import CourseDetails from '../componants/CourseDetails/CourseDetails';
import Courses from '../componants/Courses/Courses';
import Main from '../componants/layout/Main/Main';
import Blog from '../componants/pages/Blog/Blog';
import Faq from '../componants/pages/Faq/Faq';
import TermsAndConditions from '../componants/pages/Others/Terms&conditions/TermsAndConditions';
import Profile from '../componants/pages/Profile/Profile';
import Home from '../componants/Shared/Home/Home';
import Login from '../componants/Shared/Login/Login';
import Register from '../componants/Shared/Register/Register';
import SideNav from '../componants/Shared/SIdeNav/SideNav';
import PrivateRoute from './PrivateRoute/PrivateRoute';


        
    export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
               
            },
              {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=> fetch ('https://programming-bee-server.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({params}) => fetch (`https://programming-bee-server.vercel.app/course/${params.id}`)

            },
            {
                path: '/sidenav',
                element: <SideNav></SideNav>,
                loader: ()=> fetch ('https://programming-bee-server.vercel.app/courses')
            },

            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/faq',
                element: <Faq></Faq>
        
            },
            {
                path: '/terms',
                element:<TermsAndConditions></TermsAndConditions>
            },
            



            // {
            //     path: '/category/:id',
            //     element: <Category></Category>,
            //     loader: ({params}) => fetch(`https://dragon-news-server-seven.vercel.app/category/${params.id}`)
            // },
            // {
            //     path: '/news/:id',
            //     element: <PrivateRoute><News></News></PrivateRoute>,
            //     loader: ({params}) => fetch(`https://dragon-news-server-seven.vercel.app/news/${params.id}`)
            // },
          
            // {
            //     path: '/terms',
            //     element: <TermsAndConditions></TermsAndConditions>
            // },
            
        ]
    }
])
