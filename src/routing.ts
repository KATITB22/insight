import React from 'react';
import { PageRouting } from './types/interface';

const ComingSoon = React.lazy(() => import('./pages/ComingSoon'));

const PageNotFound = React.lazy(() =>
    import('./pages/Example').then((module) => ({
        default: module.PageNotFound,
    }))
);

const PageNotFoundRouting: PageRouting = {
    title: 'Page Not Found',
    path: '*',
    component: PageNotFound,
};

export const Routing: PageRouting[] = [
    {
        title: 'Coming Soon Page',
        path: '/',
        component: ComingSoon,
    },
    PageNotFoundRouting,
];
