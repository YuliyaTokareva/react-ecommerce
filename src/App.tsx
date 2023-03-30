import React from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import store from './store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter, LoaderFunction } from 'react-router-dom';

import { ROUTES } from './routes';

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />
  },
  {
    path: ROUTES.pageId(),
    element: <Product />
  }
  // {
  //   path: ROUTES.movieData(),
  //   element: <Product />,
  //   loader: fetchPersonByIdRouted as LoaderFunction
  // }
]);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Home />
//     </Provider>
//   );
// };

// export default App;
