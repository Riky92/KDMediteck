import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	public itemActive;

  constructor() { }

  ngOnInit() {
	}

	getItem(item){
		this.itemActive = item;
	}

}
