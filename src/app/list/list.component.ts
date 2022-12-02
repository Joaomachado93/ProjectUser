import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { User, UserInformation } from '../user';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  userInfo: UserInformation;

  newEmployeeClicked = false;

  employees = [
    { name: 'Kevin', position: 'Front-End Dev'},
    { name: 'Michael', position: 'Recruiter Manager'},
    { name: 'Neil', position: 'Bar Tender'}
  ];

  color:any;

  constructor(public userService: UserService) {
    this.userInfo = {} as UserInformation;
   }
   removeItem(i: number): void {
    console.log(i)
    this.userInfo.data.splice(i, 1);
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((response: UserInformation) => {
      console.log(response);
      this.userInfo.page = response?.page;
      this.userInfo.per_page = response?.per_page;
      this.userInfo.total = response?.total;
      this.userInfo.total_pages = response?.total_pages;
      this.userInfo.data = response?.data?.map((item) => {
        var user = {} as User;
        user.avatar = item?.avatar;
        user.email = item?.email;
        user.first_name = item?.first_name;
        user.last_name = item?.last_name;
        user.id = item?.id;
        return user;
      });
    });
    
  }

  
  // model: any = {};
  // model2: any = {}; 

  // addEmployee() {
  //   console.log(this.model)
  //   this.userInfo.data.push(this.model);
  //   this.model = {};
  // }

  // deleteEmployee(i:any) {
  //   this.userInfo.data.splice(i);
  //   console.log(i);
  // }

  // myValue:any;

  // editEmployee(editEmployeeInfo:any) {
  //   this.model2.name = this.employees[editEmployeeInfo].name;
  //   this.model2.position = this.employees[editEmployeeInfo].position;
  //   this.myValue = editEmployeeInfo;
  // }

  // updateEmployee() {
  //   let editEmployeeInfo = this.myValue;
  //   for(let i = 0; i < this.userInfo.data.length; i++) {
  //     if(i == editEmployeeInfo) {
  //       this.userInfo.data[i] = this.model2;
  //       this.model2 = {};
  //     }
  //   }
  // }





  // addNewEmployeeBtn() {
  //   this.newEmployeeClicked = !this.newEmployeeClicked;
  // }

  //  changeColorOne() {
  //    this.color = !this.color;
  //    if (this.color) {
  //      return '#ffffff';
  //    } else {
  //     return '#f6f6f6';
  //    }
  // }

}
