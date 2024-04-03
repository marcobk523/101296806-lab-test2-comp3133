import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../space-x.service';
import { Launch } from '../launch';
import { Location } from '@angular/common';
import { FilterResetService } from '../services/filter-reset.service'; // Adjust the path as necessary

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})

export class MissionlistComponent implements OnInit {
  
  @Input() launches: Launch[] = [];

  constructor(
    private router: Router, 
    private spaceXService: SpaceXService, 
    private breakpointObserver: BreakpointObserver, 
    private route: ActivatedRoute,
    private location: Location,
    private filterResetService: FilterResetService
    ) { }

  // ngOnInit(): void {
  //   this.getLaunches();
  // }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const year = params['year'];
      if (year) {
        this.spaceXService.getLaunchesByYear(year).subscribe(launches => {
          this.launches = launches; // Assuming you use 'launches' to display data
        });
      } else {
        this.getLaunches();
      }
    });
  }

  getLaunches(): void {
    this.spaceXService.getLaunches().subscribe((data: any) => {
      this.launches = data;
    });
  }

  goToDetail(flightNumber: string): void {
    this.router.navigate(['/details', flightNumber]);
  }

  getGridCols(): number {
    if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      return 1;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      return 2;
    } else {
      return 3;
    }
  }

  viewDetails(flightNumber: string) {
    this.router.navigate(['/details', flightNumber]);
  }

  goBack() {
    this.filterResetService.callReset();
    this.router.navigate(['/missions']);
  }
}
