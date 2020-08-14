import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Route:Router) { }

  ngOnInit() {
  }
  login = []
  submitform(myForm)
  {
    let userData=JSON.parse(localStorage.getItem("data"))
    console.log(myForm,"==================")
    let user=userData.find(function(v,i)
    {
      if(v.email==myForm.email && v.password==myForm.password)
      {
        return true;
      }
    })
    if(user)
    {
      this.Route.navigate(["firstpage"])

    }
    else
    {
      alert("bad credential")
    }
  }
}


