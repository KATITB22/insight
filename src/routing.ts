import React from 'react';
import { PageRouting } from './types/interface';

const ComingSoon = React.lazy(() => import('./pages/ComingSoon'));
const Insight = React.lazy(() => import('./pages/Insight'));

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
    {
        title: 'Main Page',
        path: '/insight',
        component: Insight,
    },
    PageNotFoundRouting,
];
