import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  headline: string = 'Angular 2 Demo!';
  subtitle: string = 'Please select a user from the menu on the left.'; 
  users: User[] = [
    { id: 25, name: 'Barry', username: 'bjrimell' },
    { id: 26, name: 'Carolina', username: 'KaroHuds' },
    { id: 27, name: 'Homer', username: 'hoju' }
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }
}