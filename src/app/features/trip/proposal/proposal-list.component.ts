import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/ApiService';
import { error } from 'util';
import { TripModel } from 'app/services/TripModel';
@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
})
export class ProposalListComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  listTrip: TripModel[]
  tripModel: TripModel;
  fromDt: '';
  toDate: ''
  ngOnInit() {
    this.getNews(this.fromDt, this.toDate);
  }

  getNews(fromDt, toDate) {
    fromDt = '01/10/2018';
    toDate = '01/10/2019' 
    this.apiService.getTrip(fromDt, toDate).subscribe((data) => {
      this.listTrip = data['listTrip'];
    }, error => {
      console.log(error)
    });
  }

  postTrip() {
    this.tripModel = this.listTrip[1];
    this.apiService.postTrip(this.tripModel).subscribe((data) => {
      this.listTrip = data.body['listTrip'];
    }, error => {
      console.log(error)
    });
  }
}
