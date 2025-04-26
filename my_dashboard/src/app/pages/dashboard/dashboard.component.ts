import { AfterViewInit, Component, ViewChild, viewChild } from '@angular/core';
import { Chart } from 'chart.js/auto'

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit{
  canvas: any;
  canvas2: any;
  ctx: any;
  ctx2: any;

  public data = {
    labels: [
      'Datanow Solutions LLP',
      'Infosys Ltd.',
      'Accenture Solutions Pvt Ltd.'
    ],
    datasets: [{
      label: 'Experience in Years',
      data: [1.8, 1.8, 1.1],
      backgroundColor: [
        'rgb(235, 63, 15)',
        'rgb(54, 162, 235)',
        'rgb(112, 21, 168)'
      ],
      hoverOffset: 4
    }]
  };

 public data2 = {
    labels: [
      'Html',
      'CSS',
      'Angular',
      'Bootstrap'
    ],
    datasets: [{
      label: 'Technologies Ratings',
      data: [7.5, 7.5, 7, 7],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  public config = {
    type: 'doughnut',
    data: this.data,
  };

  public config2  = {
    type: 'bar',
    data: this.data2,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  }

  
  @ViewChild('pieCanvas') pieCanvas!: {nativeElement: any};

  @ViewChild('barCanvas') barCanvas!: {nativeElement: any};


  pieChart: any;
  barChart: any;
  ngAfterViewInit(): void {
    this.pieChartGenerator();
    this.barChartGenerator();
  }

  pieChartGenerator() {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.pieChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: this.data,
    })
  }

  barChartGenerator() {
    this.canvas2 = this.barCanvas.nativeElement;
    this.ctx2 = this.canvas2.getContext('2d');
    this.barChart = new Chart(this.ctx2, {
      type: 'bar',
      data: this.data2,
    })
  }
}
