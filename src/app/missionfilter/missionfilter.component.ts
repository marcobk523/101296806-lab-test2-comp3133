import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { SpaceXService } from '../space-x.service';
import { Launch } from '../launch';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})

export class MissionfilterComponent implements OnInit {

  years: number[] = this.generateYearsArray();
  @Output() yearSelected: EventEmitter<string> = new EventEmitter();

  filteredLaunches: Launch[] = []; // Holds the filtered launches

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.populateYears();
  }

  populateYears() {
    const currentYear = new Date().getFullYear();
    for (let year = 2006; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  filterLaunches(event: MatSelectChange) {
    const selectedYear = event.value;
    this.spaceXService.getLaunchesByYear(selectedYear).subscribe((launches: Launch[]) => {
      this.filteredLaunches = launches;
    });
    this.yearSelected.emit(event.value); // Emit the selected year
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
