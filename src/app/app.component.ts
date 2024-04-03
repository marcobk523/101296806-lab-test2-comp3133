import { Component } from '@angular/core';
import { SpaceXService } from './space-x.service';
import { Launch } from './launch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101296806-lab-test2-comp3133';
  filteredLaunches: Launch[] = [];

  constructor(private spaceXService: SpaceXService) {}

  onYearSelected(year: string) {
    this.spaceXService.getLaunchesByYear(year).subscribe((launches: Launch[]) => {
      this.filteredLaunches = launches;
    });
  }
}
