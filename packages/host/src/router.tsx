import { RootRoute } from './routes/root.tsx';
import { RootIndexRoute } from './routes/root.index.tsx';
import type {
  PatchRoutesOnNavigationFunction,
  RouteObject,
} from 'react-router-dom';
import React, { Suspense } from 'react';

export const router: RouteObject[] = [
  {
    path: '/',
    id: 'root',
    element: <RootRoute />,
    children: [
      {
        index: true,
        element: <RootIndexRoute />,
      },
    ],
  },
];

export const opts: {
  patchRoutesOnNavigation: PatchRoutesOnNavigationFunction;
} = {
  async patchRoutesOnNavigation({ path, patch }) {
    if (path.startsWith('/settings')) {
      const Component = React.lazy(() => import('settings/Module'));
      patch('root', [
        {
          path: '/settings',
          element: (
            <Suspense fallback="Loading...">
              <Component />
            </Suspense>
          ),
        },
      ]);
    }
  },
};
