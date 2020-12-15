import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.page.html',
  styleUrls: ['./list-doctor.page.scss'],
})
export class ListDoctorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  /*openAddDoctorPage() {
    this.router.navigate(['/add-doctor']);
  }*/

}
