import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'GitHub Score';
    user = {
        username: '',
        public_repos: 0,
        followers: 0,
        score: 0,
        message: ''

    }

    constructor(private _httpService: HttpService) {}

    calculateGitUser(user_response) {
        this.user.public_repos = user_response.public_repos;
        this.user.followers = user_response.followers;
        this.user.score = this.user.public_repos + this.user.followers;
        if(this.user.score < 20 && this.user.score > 0 ) {
            this.user.message = 'Needs Work';
        } else if (this.user.score < 50 && this.user.score > 20) {
            this.user.message = 'A Decent Start';
        } else if (this.user.score < 100 && this.user.score > 50) {
            this.user.message = 'Doing Good';
        } else if (this.user.score < 200 && this.user.score > 100) {
            this.user.message = 'Great Job';
        } else if (this.user.score == 200 || this.user.score > 200) {
            this.user.message = 'Github Elite';
        }
    }

    onSubmit() {
        this._httpService.gitUserLogin(this.user.username)
          .then(response => this.calculateGitUser(response))
          .catch(err => console.log(err));
    }
}
