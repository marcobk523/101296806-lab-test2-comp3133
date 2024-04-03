import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpaceXService } from '../space-x.service';
import { Launch } from '../launch';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})

export class MissionlistComponent implements OnInit {
  
  @Input() launches: Launch[] = [];

  constructor(private router: Router, private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.getLaunches();
  }

  getLaunches(): void {
    this.spaceXService.getLaunches().subscribe((data: any) => {
      this.launches = data;
    });
  }

  goToDetail(flightNumber: string): void {
    this.router.navigate(['/detail', flightNumber]);
  }
}
