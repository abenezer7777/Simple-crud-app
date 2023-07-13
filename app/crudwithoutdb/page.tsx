"use client"
import React from 'react'
import Crud from "../components/CrudWithoutDb"
import { QueryClient, QueryClientProvider } from "react-query";
const CrudWithoutDb = () => {
  
  return (
    <div className='max-w-4xl mx-auto mt-4'>
        <div className='my-10'>
            <h1 className='text-3xl font-bold'>User Management</h1>
            <QueryClientProvider client={new QueryClient()}>    <Crud/></QueryClientProvider>
        </div>
        </div>
  );
};

export default CrudWithoutDb;