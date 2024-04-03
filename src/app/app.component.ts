import { Component } from '@angular/core';
import { SpaceXService } from './space-x.service';
import { Launch } from './launch';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101296806-lab-test2-comp3133';
  filteredLaunches: Launch[] = [];

  constructor(private spaceXService: SpaceXService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      console.log('Navigation Event:', event);
    });
  }

  onYearSelected(selectedYear: string) {
    console.log("Selected year:", selectedYear); // Debug log
    this.spaceXService.getLaunchesByYear(selectedYear).subscribe(launches => {
      console.log("Fetched launches:", launches); // Debug log
      this.filteredLaunches = launches;
    });
  }
}
