import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() filterEmitter = new EventEmitter<string>();
  @Output() dropFilterEmitter = new EventEmitter();

  @ViewChild('f') filterForm!: NgForm;

  filterText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeFilter() {
    this.filterText = this.filterForm.value.filterText;
  }

  onFilterSubmit() {

    this.filterForm.reset();

    if (!this.filterForm.value.filterText) {
      this.filterText = '';
    }
  }

}
