import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'startsWith' })
  export class startsWithPipe implements PipeTransform {
    transform(value: any[], term: string): any[] {
      return value.filter((x: any) => x.name.toLowerCase().startsWith(term.toLowerCase()) || x.surname.toLowerCase().startsWith(term.toLowerCase()))
    }
  }

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

