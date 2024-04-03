import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SpaceXService } from '../space-x.service';
import { Launch } from '../launch';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnChanges {
  @Input() flightNumber?: string;
  launchDetails: Launch | null = null;

  constructor(private spaceXService: SpaceXService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['flightNumber'] && this.flightNumber) {
      this.spaceXService.getLaunchDetails(this.flightNumber).subscribe(details => {
        this.launchDetails = details;
      });
    }
  }
}