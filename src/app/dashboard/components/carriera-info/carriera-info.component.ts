import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carriera-info',
  templateUrl: './carriera-info.component.html',
  styleUrls: ['./carriera-info.component.scss']
})
export class CarrieraInfoComponent implements OnInit {

	@Input() user;

  constructor() { }

  ngOnInit() {
		console.log("user: ", this.user);
  }

}
