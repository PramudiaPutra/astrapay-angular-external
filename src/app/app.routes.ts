import { Routes } from '@angular/router';
import { noteRoutes } from './module/route/note.route';
import { DashboardComponent } from './module/component/dashboard/dashboard.component';
import { NoteFormComponent } from './module/component/note-form/note-form.component';

export const routes: Routes = [
    // {
    //     path: '', 
    //     redirectTo: 'dashboard', 
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'dashboard',
    //     children: noteRoutes,
    // },
    // {
    //     path: '**', 
    //     redirectTo: 'dashboard'
    // },
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'note/new', component: NoteFormComponent },
    // { path: '**', redirectTo: 'dashboard' }

    {
        path: '', 
    loadComponent: () =>
        import('./module/component/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
        )
    }
];
