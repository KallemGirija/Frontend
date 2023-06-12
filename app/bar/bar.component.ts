import { Component } from '@angular/core';
import{Chart,registerables} from 'chart.js';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {

 constructor(){
  Chart.register(...registerables)
 }
 ngOnInit():void{
  this.createchart();
 }
 public chart:any;
 createchart()
 {
  this.chart=new Chart("barChart",{type:'bar',
  data:{
    labels:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
    datasets:[
      {
        label:"sales",
        data:['10','20','10','20','15','25','20','30','10','15','10'],
        backgroundColor:'blue'
          
        },
        {
        label:"Target",
        data:['25','20','30','35','60','50','20','10','40','25','30'],
        backgroundColor:'orange'
      }
    ]
  },
  options:{
    aspectRatio:2.5
  }
})
 }
}


