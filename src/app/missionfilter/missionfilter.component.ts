import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { SpaceXService } from '../space-x.service';
import { Launch } from '../launch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})

export class MissionfilterComponent implements OnInit {

  years: number[] = this.generateYearsArray();
  @Output() yearSelected = new EventEmitter<string>();

  filteredLaunches: Launch[] = [];

  constructor(private spaceXService: SpaceXService, private router: Router) {}

  ngOnInit(): void {
    this.years = this.generateYearsArray(); // Ensure this method correctly populates the array
}

  onYearSelect(year: string): void {
    this.yearSelected.emit(year);
  }

  populateYears() {
    const currentYear = new Date().getFullYear();
    for (let year = 2006; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  filterLaunches(event: MatSelectChange) {
    const selectedYear = event.value;
    console.log("Filter launches called with event:", event);
    console.log("Emitting year:", event.value); // Debug log
    this.router.navigate(['/missions'], { queryParams: { year: selectedYear } });
  }

  private generateYearsArray(): number[] {
    let currentYear = new Date().getFullYear();
    let years: number[] = [];
    for (let year = 2006; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  }
}
