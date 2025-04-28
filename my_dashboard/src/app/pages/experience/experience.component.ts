import { ChangeDetectionStrategy, Component, inject, model, OnInit, signal } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import { data } from '../../shared/experience-data';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogBoxComponent } from '../../component/dialog-box/dialog-box.component';

export interface DialogData {
[x: string]: any;
  animal: string;
  name: string;
}

@Component({
  selector: 'app-experience',
  imports: [MatIcon, CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent implements OnInit{
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);



  experiences: any[] = [];

  ngOnInit(): void {
    this.loadExperienceData();
  }

  loadExperienceData() {
    this.experiences = data;
  }

  openDialog(company: any, responsibilities: any): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: {
        name: company,
        responsibilities: responsibilities,
        animal: this.animal()
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}