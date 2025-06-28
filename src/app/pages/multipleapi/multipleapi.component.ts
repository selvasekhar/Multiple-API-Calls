import { Component } from '@angular/core';
import { masterservice } from '../../master.services';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-multipleapi',
  standalone: true,
  imports: [ AsyncPipe],
  templateUrl: './multipleapi.component.html',
  styleUrl: './multipleapi.component.css'
})
export class MultipleapiComponent {
  public responseData1:any
  public responseData2:any
  public responseData3:any
data: any;

  constructor(private service:masterservice){
    this.service.requestmultipleapi().subscribe((data)=>{
      this.responseData1 = data[0];
      this.responseData1 = data[1];
      this.responseData1 = data[2];
    })
  }

}
