import { Routes } from '@angular/router';
import { noteRoutes } from './module/route/note.route';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'note', 
        pathMatch: 'full'
    },
    {
        path: 'note',
        children: noteRoutes,
    },
    {
        path: '**', 
        redirectTo: 'note'
    },
];
