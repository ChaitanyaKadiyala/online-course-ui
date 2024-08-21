import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PlansAndPlanningComponent } from '../plans-and-planning/plans-and-planning.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, PlansAndPlanningComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
