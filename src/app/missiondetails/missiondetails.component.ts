import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../space-x.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  flightNumber?: string;
  launchDetails: any;

  constructor(
    private route: ActivatedRoute,
    private spaceXService: SpaceXService,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.flightNumber = this.route.snapshot.paramMap.get('flight_Number') ?? '';
    if (this.flightNumber) {
      this.spaceXService.getLaunchDetails(this.flightNumber).subscribe(details => {
        this.launchDetails = details;
      });
    }
  }
}