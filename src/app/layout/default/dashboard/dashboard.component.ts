import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, VERSION } from '@angular/core';

import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend,MultiDataSet, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public pieChartOptions: ChartOptions = {
        responsive: true,
      };

      //Pie cahrt For 
      public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
      public pieChartData: SingleDataSet = [300, 500, 100];
      public pieChartType: ChartType = 'pie';
      public pieChartLegend = true;
      public pieChartPlugins = [];

      public barChartOptions: ChartOptions = {
        responsive: true,
      };
      public barChartLabels: Label[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      public barChartType: ChartType = 'bar';
      public barChartLegend = true;
      public barChartPlugins = [];
    
      public barChartData: ChartDataSets[] = [
        { data: [65, 59, 56, 81], label: 'ICT' },
        { data: [40, 99, 80, 36], label: 'Beauty' },
        { data: [65, 59, 80, 81], label: 'Business' },
        { data: [76, 59, 54, 81], label: 'Hospitality' },
        { data: [65, 59, 10, 81], label: 'Nutrition' },
        { data: [28, 48, 40, 19], label: 'Social Work' }
      ];


      //Departmental Balances proportional...
      doughnutChartLabels: Label[] = ['ICT', 'Social Work', 'Engineering','Hospitality','Beauty'];
      doughnutChartData: MultiDataSet = [
        [55, 25, 20,40,68]
      ];
      doughnutChartType: ChartType = 'doughnut';
    


      public chartType: string = 'doughnut';

      public chartDatasets: Array<any> = [
        { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
      ];
    
      public chartLabels: Array<any> = ['ICT', 'Business', 'Nutrition', 'Engineering', 'Hospitality'];
    
      public chartColors: Array<any> = [
        {
          backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
          hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
          borderWidth: 2,
        }
      ];
    
      public chartOptions: any = {
        responsive: true
      };
      public chartClicked(e: any): void { }
      public chartHovered(e: any): void { }
    
      constructor(private http: HttpClient) {
        monkeyPatchChartJsTooltip();
        monkeyPatchChartJsLegend();
      }

ngOnInit(){
  const headers = new HttpHeaders({
    'Authorization':`Bearer ${localStorage.getItem('token')}`
    
    });
    // this.http.post('http://127.0.0.1:8000/getregDetails',  {headers:headers}).subscribe(res=>{
      
    // });
}
  dt=new Date();
}