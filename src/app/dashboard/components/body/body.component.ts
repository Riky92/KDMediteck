import { Component, OnInit, OnChanges , Input } from '@angular/core';
import { UsersKidney} from '../../model/common-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnChanges {

  @Input() itemFocus;

  public users = UsersKidney;

  constructor(private router: Router) { }

  ngOnChanges() {
    if(this.itemFocus){
      this.checkItem(this.itemFocus);

    }

  }

  public checkItem(item){
    const element = document.getElementById(item);
    element.scrollIntoView();
  }

  public openMail(mail){
    const linkmail = 'mailto:' + mail + '?subject=K.D.- Meditech';
    window.open(linkmail, '_system');

 }

 public visualizzaCarriera(user){
   this.router.navigate(['carriera'],  { queryParams: { user: user.id}});
   window.scrollTo(0, 0);

 }

 goToPlayStore() {
  window.open('https://play.google.com/store/apps/details?id=com.kdmediteck.kidneydose');
 }

 goToPresentation(){
   window.open('https://prezi.com/view/6jtOk1U6bJobBVmqSsLk/');
 }

}
