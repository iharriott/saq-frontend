import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Emitters } from '../emitters/emitter';
import { QuoteDataTableDataSource, QuoteDataTableItem } from './quote-data-table-datasource';

@Component({
  selector: 'app-quote-data-table',
  templateUrl: './quote-data-table.component.html',
  styleUrls: ['./quote-data-table.component.css']
})
export class QuoteDataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<QuoteDataTableItem>;
  dataSource: QuoteDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['enabled','eventType','eventCategory','jobCode','componentCode','sort'];

  eventList: QuoteDataTableItem[] = [];
  constructor() {
    this.dataSource = new QuoteDataTableDataSource();
  }

  ngAfterViewInit(): void {

    Emitters.eventLisEmitter.subscribe(qevent =>{
      console.log('afterview init', qevent);
      this.eventList.push(qevent);
      this.dataSource.data = [...this.eventList];
      console.log('mat data after view inti ',  this.dataSource.data);
    })
    
    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    console.log('mat data source after view init ',  this.table.dataSource);
  }
}
