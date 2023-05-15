import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gituser } from 'src/app/models/gituser';
import { Gitservice } from 'src/app/service/gitservice.service';

@Component({
  selector: 'app-gitlist',
  templateUrl: './gitlist.component.html',
  styleUrls: ['./gitlist.component.css']
})
export class GitlistComponent {

  gitUser: Gituser;
  user: string;
  existeUser: boolean;
  constructor(private gitService: Gitservice, private route: Router) { }

  ngOnInit() {
  }

   //lista el usuario
  findUser() {
    this.gitService.getUser(this.user).subscribe(data => {
      this.existeUser = true;
      this.gitUser = data;
      console.log("this.gitUser", this.gitUser)
    });
  }



}
