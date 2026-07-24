import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from './../services/user';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm implements OnInit {

  isEditMode=false;

  user: User = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    mobile: '',
    gender: '',
    dateOfBirth: ''
  };

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;
      this.userService.getUserById(Number(id)).subscribe(response => {
        this.user = response.data;
      });
    }

  }

  saveUser(): void {
    if (this.isEditMode) {
      this.userService.updateUser(this.user).subscribe(() => {
        alert("User updated successfully");
        this.router.navigate(['/']);
      });
    } else {
      this.userService.createUser(this.user).subscribe(() => {
        alert("User created successfully");
        this.router.navigate(['/']);
      });
    }
  }
}
