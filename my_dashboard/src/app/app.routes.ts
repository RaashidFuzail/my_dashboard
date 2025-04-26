import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SkillSetComponent } from './pages/skill-set/skill-set.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component:  DashboardComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'skill-set',
        component: SkillSetComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
