import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StandardJobService } from '../services/standardjob.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  opened = false;
  dataSource = new MatTableDataSource();
  columns = ['EnableInd','EventTypeDesc','EventCategoryDesc','JobCode','ComponentCode','ModifierCode','BusinessGroup','QuantityCode',
            'WorkAppCode','CabTypeCode','JobLocationCode','JobConditionCode','ShopFieldDesc','Sort'];

  constructor(private standardJobService: StandardJobService) { }

  ngOnInit(): void {

    this.standardJobService.standardJob().subscribe(
      standardJobs =>{

         this.dataSource.data = standardJobs;
      }
    );    
  }
}
