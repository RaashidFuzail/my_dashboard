import { Component } from '@angular/core';
import {data} from '../../shared/projects-data';
import { CommonModule } from '@angular/common';

import { MatStep, MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStep,
    MatIcon
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectData: any[] = []
  ngOnInit(): void {
    this.loadProjectData();
  }
  loadProjectData() {
    this.projectData = data;
  }
}
