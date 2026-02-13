import { Component, inject, OnInit } from '@angular/core';
import { BandsInTownService } from '../../services/api/bandsintown.service';

@Component({
  selector: 'app-concerts',
  imports: [],
  templateUrl: './concerts.page.html',
  styleUrl: './concerts.page.css',
})
export class ConcertsPage implements OnInit {
  public bandsInTownApi = inject(BandsInTownService);

  public ngOnInit() {
    console.log('on init');
    this.bandsInTownApi.loadConcerts();
  }
}
