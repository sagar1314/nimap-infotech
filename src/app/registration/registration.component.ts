import { Component, Inject } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private router: Router,private serv: ServicesService, private registeref:MatDialogRef<any>){}



  validForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    mobile:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    tags:new FormControl('',[Validators.required]),
    checked:new FormControl('',[Validators.required])
  })


  cls:any
  subForm(){
    console.log(this.validForm.value)
    this.serv.addUser(this.validForm.value).subscribe(()=>{
      alert('data added Successfully!')
    })
    location.reload();
  }

  newPage(name:any){
    this.router.navigate(['/user',name])
    this.registeref.close()
  }

  get name(){
    return this.validForm.get('name')
  }

  get lastname(){
    return this.validForm.get('name')
  }


imgpath:any='https://cdn3.iconfinder.com/data/icons/business-vol-26/100/Artboard_2-1024.png'
  editImg(valim:any){

    this.imgpath=valim
    console.log(this.imgpath)

  }



  formatLabel(value: number): string {

    return `${value}`;
  }

feildintrest:any=[]
num:any =1
  intrest(val:any){
   let obj:any={}

    obj["id"]=this.num
    obj["data"]=val
    this.feildintrest.push(obj)
    console.log(this.feildintrest)
    this.num++
  }

  cross(pid:any){
    console.log(pid)
    for(let obj in this.feildintrest){
      if(this.feildintrest[obj].id == pid){
        this.feildintrest.splice(obj,1)
      }
      else{
        console.log('invalid data!')
      }
    }


  }
}
