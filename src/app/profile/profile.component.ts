import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user:User;

  constructor(private _httpService: HttpService) { 
  }

  ngOnInit() {
    this._httpService.getUser().subscribe((data:User) => {
      this.user = data[0]
      console.log(this.user);
    } );
  }

  editProfile() {
  //  console.log(this.user);
  }
}