import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersKidney} from '../../model/common-constants';


@Component({
  selector: 'app-carriera',
  templateUrl: './carriera.component.html',
  styleUrls: ['./carriera.component.scss']
})
export class CarrieraComponent implements OnInit {

	public users = UsersKidney;

	public items = [
		{ key: 'linkedin', descrizione: 'Linkedin'},
		{ key: 'facebook', descrizione: 'Facebook'},
		{ key: 'instagram', descrizione: 'Instagram'},
		{ key: 'twitter', descrizione: 'Twitter'}
	];

	public user;


	constructor( private route: ActivatedRoute, private router: Router) {

	}

  ngOnInit() {
		this.route.queryParams.subscribe(params => {
      const id = params.user;
			// tslint:disable-next-line:indent
			const userSelected = this.users.filter( user => user.id === id);
			this.user = userSelected[0];
      });
	}

	public goToDashboard() {
		this.router.navigate(['dashboard']);
	}

	public openMail(mail){
		console.log("mail:", mail);
		// let email = {
		// 	to: user.email,
		// 	subject: 'K.D.- Meditech',
		// 	body: '',
		// 	isHtml: true
		// }
		// this.emailComposer.open(email);

		// let linkmail ="mailto:" + user.email + "?subject=K.D.- Meditech";
		// window.open(linkmail, "_system");

		const linkmail ='mailto:' + mail + '?subject=K.D.- Meditech';
		window.open(linkmail, '_system');

 }

}
