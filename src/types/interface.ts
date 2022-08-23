import { LazyExoticComponent } from 'react';

export interface PageRouting {
    title: string;
    path: string;
    component: LazyExoticComponent<any>;
}
