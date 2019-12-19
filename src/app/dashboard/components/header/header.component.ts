import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public itemActive = 'home';

	@Output() itemEmitter: EventEmitter<any> = new EventEmitter();

	public items = [
		{key: 'about_us', descrizione: 'Chi siamo'},
		{key: 'kidney', descrizione: 'KidneyDose'},
		{key: 'contacts', descrizione: 'Contatti'}
	]

  constructor() { }

  ngOnInit() {
	}

	public clickItem(item){
		this.itemActive = item.key;
		this.itemEmitter.emit(item.key);
	}

}
