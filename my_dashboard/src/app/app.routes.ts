import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SkillSetComponent } from './pages/skill-set/skill-set.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

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
        path: 'about-me',
        component: AboutMeComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
