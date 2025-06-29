import { Routes } from "@angular/router";
import { DashboardComponent } from "../component/dashboard/dashboard.component";
import { NoteFormComponent } from "../component/note-form/note-form.component";

export const noteRoutes: Routes = [
    // {path: '', component: DashboardComponent},
    // {path: 'new', component: NoteFormComponent}

    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
]
