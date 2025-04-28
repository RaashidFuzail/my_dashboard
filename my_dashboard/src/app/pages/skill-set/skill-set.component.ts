import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {data} from '../../shared/skills-data';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-skill-set',
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent implements OnInit{
  panelOpenState = false;
  skillsData: any[] = [];

  ngOnInit(): void {
    this.loadSkillsData()
  }

  loadSkillsData() {
    this.skillsData = data;
  }
}
