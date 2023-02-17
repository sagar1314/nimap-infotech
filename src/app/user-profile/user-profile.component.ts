import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {


  constructor(private serv: ServicesService, private actv:ActivatedRoute){}
nameProfile:any
  ngOnInit(){
      this.actv.params.subscribe((user)=>{
        this.nameProfile = user['name']
        console.log(this.nameProfile)
      })
      this.getUser();
  }

  userdata:any
  getUser(){
    this.serv.getUser().subscribe((data)=>{
        this.userdata=data
        console.log(this.userdata)
    })
  }
}
