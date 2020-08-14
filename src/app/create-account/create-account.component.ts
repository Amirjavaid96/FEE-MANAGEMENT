import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private link:Router) { }

  ngOnInit() {
  }
  array=[]
  submitform(thisForm)
  {
    


    this.array.push(thisForm.value)
    console.log(thisForm)
  

    let ArrayOfObj=JSON.stringify(this.array)
    localStorage.setItem("data",ArrayOfObj)

    //let user=JSON.stringify(localStorage.getItem("data"))
    //console.log(user);

    thisForm.reset();

  }
}

