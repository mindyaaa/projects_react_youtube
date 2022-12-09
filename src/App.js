import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchHeader from './components/SearchHeader';

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
