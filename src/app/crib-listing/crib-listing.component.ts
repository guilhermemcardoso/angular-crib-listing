import { Component, OnInit } from '@angular/core';
import { CribsService } from '../services/cribs.service';
import { Crib } from '../crib';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css'],
})
export class CribListingComponent implements OnInit {
  cribs: Array<Crib> = [];
  error: string = '';
  sortDirection: string = 'asc';
  sortField: string = 'price';
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type',
  ];
  constructor(
    private cribsService: CribsService,
    public utilService: UtilService
  ) {}

  handleAddCrib(data: any) {
    this.cribs = [data, ...this.cribs];
  }

  handleResponse(data: any) {
    this.cribs = data as Crib[];
  }

  handleError(error: any) {
    this.error = error.statusText;
  }

  ngOnInit() {
    //make an http request
    this.cribsService.getAllCribs().subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this),
    });

    this.cribsService.newCribSubject.subscribe({
      next: this.handleAddCrib.bind(this),
      error: this.handleError.bind(this),
    });
  }
}
