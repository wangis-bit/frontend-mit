import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { StudentsModel } from 'src/app/models/accounts.model';
import { cpass } from 'src/app/models/confirmpass.model';
import { generalUsersModel } from 'src/app/models/generalUsers.model';
import { HODModel } from 'src/app/models/hod.model';
import { HodModelLogin } from 'src/app/models/hodLogin.model';
import { registerModel } from 'src/app/models/register.model';
import { student_login } from 'src/app/models/student_login.model';
import { TutorHodModel } from 'src/app/models/tutorhod.model';
import { NotificationService } from 'src/app/notification.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { User } from '../user.model';
import { RegisterUserService } from './register-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  hoddepts:any;
  status!:number;
  course_name:any;
  TutorHodName!:any;
  course_id:any;
  data:any;
  cpas!:cpass;
  tutortdata:any;
  generalUsers!:generalUsersModel;
  deptdata:any;
  hodReg!:HodModelLogin;
  message!:string;
  deptcourse:any;
  HeadOfDept:any;
  loginData !: User;
  loginData2 !: TutorHodModel;
  roles!:any;
  rolesforTutorandHod:any;
  student_users !:student_login;
  hodnames!:any[];
  cpass:any;
  users_name :any;
  LoginMessage:any;
  users!:FormGroup;
  ConfirmPass:any;
  overal !: FormGroup;
  studentforlogin:any
  user !: registerModel
  delmessage:any;

  
  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['student_id','names','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;

  TutorNamesLogin!: MatTableDataSource<any>
  source_info2!:any
  columns2: string[]=['id','dept','names','operations'] 
  @ViewChild(MatSort, {static:true}) sort2!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator2!:MatPaginator;


  hodNamesLogin!: MatTableDataSource<any>
  source_info3!:any
  columns3: string[]=['dept_id','dept','names','operations'] 
  @ViewChild(MatSort, {static:true}) sort3!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator3!:MatPaginator;



  constructor(private _fb:FormBuilder, private serve:FormService, private notice:NotificationService, private confirm:DialogService, private route:Router, private userRoles:RegisterUserService) { }

  ngOnInit(): void {
$(document).ready(function(){
  $('#closeRib').click(function(){
    $('#ribbon').hide();
  })
})

$(document).ready(function(){
  $('#showribbon').click(function(){
    $('#ribbon').show();
  })
})

$(document).ready(function(){
  $('#first').hide()
  $('#second').hide()
  $('#third').hide()
  $('#back').hide()
  $('#fourth').hide()
})

$(document).ready(function(){
  $('#general').click(function(){
    $('#first').show()
    $('#back').show()
    $('#hod').hide()
    $('#tutor').hide()
    $('#student').hide()
  })
})
$(document).ready(function(){
  $('#hod').click(function(){
    $('#second').show()
    $('#back').show()
    $('#general').hide()
    $('#tutor').hide()
    $('#student').hide()
  })
})
$(document).ready(function(){
  $('#student').click(function(){
    $('#fourth').show()
    $('#back').show()
    $('#general').hide()
    $('#hod').hide()
    $('#tutor').hide()
    $('#student').show()
  })
})
$(document).ready(function(){
  $('#tutor').click(function(){
    $('#third').show()
    $('#back').show()
    $('#hod').hide()
    $('#general').hide()
    $('#student').hide()
  })
})

$(document).ready(function(){
  $('#back').click(function(){
    $('#first').hide()
    $('#back').hide()
    $('#second').hide()
    $('#third').hide()
    $('#fourth').hide()
    $('#hod').show()
    $('#tutor').show()
    $('#general').show()
    $('#student').show()
  })
})

  this.overal = this._fb.group({
    names : [''],
    role_id : [''],
    email :[''],
    password : ['']
  })
    
    this.userRoles.getRoles().subscribe(res=>{
      this.roles = res;
      
    })

    this.userRoles.getRolesForTutorAndHod().subscribe(res=>{
      this.rolesforTutorandHod = res;
      
    })

    this.student_users={
      role_id:'',
      id:'',
      course_level_id:''
    }


    this.loginData2={
      id:'',
      name:'',
      password:'',
      email:'',
      role_id:'',
    }


    this.loginData={
      id:'',
      name:'',
      password:'',
      email:'',
      role_id:'',
    }


    
    this.user = {
      names:'',
      pass:'',
      mail:'',
      roleNo:'',
    }

    this.hodReg = {
      role_id:'',
     
      id:'',
      dept_id:'',
    }

    this.generalUsers = {
      role_id:'',
      id:'',
      email:''
     
    }

    // this.userRoles.getLoginStudent().subscribe(res=>{
    //   this.source_info = res;
    //   this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
    //   this.StudentsAccountsInfo.sort = this.sort;
    // this.StudentsAccountsInfo.paginator = this.paginator;
    // })

   
    // this.userRoles.getloginhod().subscribe(res=>{
    //   this.source_info3 = res;
    //   this.hodNamesLogin= new MatTableDataSource(this.source_info3);
    //   this.hodNamesLogin.sort = this.sort3;
    // this.hodNamesLogin.paginator = this.paginator3;
    // })
    this.gethodForLogIn()
    this.getStudentsForLogIn();
    this.getTutorsFromsHods();
    this.getstudentforlogin();

  }




  getTutorsFromsHods(){
  this.userRoles.getLogininginTutor().subscribe(res=>{
    this.source_info2 = res;
    this.TutorNamesLogin= new MatTableDataSource(this.source_info2);
    this.TutorNamesLogin.sort = this.sort2;
  this.TutorNamesLogin.paginator = this.paginator2;
  })
}
getStudentsForLogIn(){
  this.userRoles.getLoginStudent().subscribe(res=>{
    this.source_info = res;
    this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
    this.StudentsAccountsInfo.sort = this.sort;
  this.StudentsAccountsInfo.paginator = this.paginator;
  })

}

gethodForLogIn(){
  this.userRoles.getloginhod().subscribe(res=>{
    this.source_info3 = res;
    this.hodNamesLogin= new MatTableDataSource(this.source_info3);
    this.hodNamesLogin.sort = this.sort3;
  this.hodNamesLogin.paginator = this.paginator3;
  })

}

// DelLoginTutor(id:number){

  
//   this.userRoles.DeleteLoginTutororhod(id).subscribe(res=>{

//   })
// }

// DeleteLoginTutororhodFromUsers(id:number){

  
//   this.userRoles.DeleteLoginTutororhodFromUsers(id).subscribe(res=>{

//   })
// }

  //For Appplying filter 
applySearch(event:any){
  const searchValue = (event.target as HTMLInputElement).value;
  this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
}

 //For Appplying filter 
 applySearch2(event:any){
  const searchValue = (event.target as HTMLInputElement).value;
  this.TutorNamesLogin.filter = searchValue.trim().toLowerCase();
}

applySearch3(event:any){
  const searchValue = (event.target as HTMLInputElement).value;
  this.hodNamesLogin.filter = searchValue.trim().toLowerCase();
}

 print(){
   console.log(this.overal.getRawValue())
  
 }

insertUsers(){

this.serve.insertUser( this.loginData).subscribe((res:any)=>{
 this.data=res;
 this.status = this.data.status;
 
 if(this.status==1){
  this.message = res.message;
}else{
 this.message = res.message;
}
 console.log(this.data)
  
})
    this.getTutorsFromsHods();
    this.getstudentforlogin();
  }

  insertUsers2(){

    this.serve.insertUser( this.loginData2).subscribe((res:any)=>{
     this.data=res;
     this.status = this.data.status;
     
     if(this.status==1){
      this.message = res.message;
    }else{
     this.message = res.message;
    }
     console.log(this.data)
      
    })
    this.getTutorsFromsHods();
    this.getstudentforlogin();
      }


  
  GetUserName(event:any){
   var obj={
     role_id : event.target.value
   }
   if(obj.role_id==3330){
    this.userRoles. adminName(obj).subscribe((res:any)=>{ 
      this.hodnames= res
      console.log(this.hodnames)
  });
     
   }
   else if(obj.role_id==3331)
    {
      this.userRoles.getprinciaplNme(obj).subscribe((res:any)=>{ 
        this.hodnames= res
        console.log(this.hodnames)
       
    });
    }
    else if(obj.role_id==3332)
    {
      this.userRoles.getdpName(obj).subscribe((res:any)=>{ 
        this.hodnames= res
        console.log(this.hodnames)
       
    });
    }
    else if(obj.role_id==3333)
    {
      this.userRoles.getHodNames(obj).subscribe((res:any)=>{ 
        this.hodnames= res
        console.log(this.hodnames)
       
    });
    }
    

    else if(obj.role_id==3336)
    {
      this.userRoles. accountantName(obj).subscribe((res:any)=>{ 
        this.hodnames= res
        console.log(this.hodnames)
    });
    }
    else if(obj.role_id==3337)
    {
      this.userRoles. RegistrarName(obj).subscribe((res:any)=>{ 
        this.hodnames= res
        console.log(this.hodnames)
    });
    }
    else if(obj.role_id==3338)
    {
      this.userRoles. DirectorName(obj).subscribe((res:any)=>{ 
        this.hodnames= res
        console.log(this.hodnames)
    });
    }
    else{
      console.log('No such user found');
      
    }

  }




  GetHODName(event:any){
    var obj={
      role_id : event.target.value
    }
    this.userRoles.getHodNames(obj).subscribe((res:any)=>{ 
      this.HeadOfDept= res
      // console.log(this.HeadOfDept)
  });

  }


  GetTutorName(event:any){
    var obj={
      role_id : event.target.value
    }

    if(obj.role_id==3333){
      this.userRoles.getHodNames(obj).subscribe((res:any)=>{ 
        this.TutorHodName= res
    });
       
     }
     else if(obj.role_id==3334)
      {
        this.userRoles.tutorName(obj).subscribe((res:any)=>{ 
          this.TutorHodName= res
          console.log(this.TutorHodName)
      });
    
      }else{
        console.log('no user account found');
        
      }
  }




 getstudentforlogin(){
  
  this.userRoles.studentName().subscribe(res=>{
    this.studentforlogin=res;
    this.user = this.studentforlogin;
    
    
  })
 }

 poststudentlogin(){
   this.userRoles.StudentLoginInsert(this.student_users).subscribe(res=>{
    this.data=res;
    this.LoginMessage = this.data.message;
    this.status = this.data.status;
    
    if(this.status==1){
     
     this.notice.success(this.LoginMessage)
     this.getstudentforlogin();
   }else{
    this.notice.delete(this.LoginMessage)
   }
     
   })
 }

 postHODlogin(){
  this.userRoles.HodLoginInsert(this.hodReg).subscribe(res=>{
   this.data=res;
   this.LoginMessage = this.data.message;
   this.status = this.data.status;
   
   if(this.status==1){
    this.LoginMessage;
    this.notice.success(this.LoginMessage)
    this.gethodForLogIn()
  }else{
    this.notice.delete(this.LoginMessage)
  }
    
  })
}

postTutorlogin(){
  this.userRoles.TutorLoginInsert(this.hodReg).subscribe(res=>{
   this.data=res;
   this.LoginMessage = this.data.message;
   this.status = this.data.status;
   
   if(this.status==1){
    
    this.notice.success(this.LoginMessage)
    
  }else{
    this.notice.delete(this.LoginMessage)
  }
    
  })
  this.getTutorsFromsHods();

}

AllUsersLoginInsert(){
  this.userRoles.AllUsersLoginInsert(this.generalUsers).subscribe(res=>{
   this.data=res;
   this.LoginMessage = this.data.message;
   this.status = this.data.status;
   
   if(this.status==1){
    this.LoginMessage;
  }else{
   this.LoginMessage;
  }
    
  })
}

OveralUserLoginInsert(){
  this.userRoles.OveralUsersLoginInsert(this.generalUsers).subscribe(res=>{
   this.data=res;
   this.LoginMessage = this.data.message;
   this.status = this.data.status;
   
   if(this.status==1){
    this.LoginMessage;
    this.notice.success(this.LoginMessage)
  }else{
    this.notice.delete(this.LoginMessage)
  }
    
  })
}



studentDeptCourse(event:any){
  var obj ={
    student_id: event.target.value,
  }
  this.userRoles.getStudentDeptCourse(obj).subscribe(res=>{
    this.deptcourse=res;
   this.course_id = this.deptcourse.course_level_id;
   this.course_name = this.deptcourse.course_level
    
  })
  
}
 

getDepIdForhod(event:any){
  var object ={
    id: event.target.value
  }
  this.userRoles.getHodDepartment(object).subscribe((res:any)=>{ 
    this.hoddepts= res
    this.deptdata = this.hoddepts.data;
    this.status = this.hoddepts.status;
    console.log(this.deptdata);
    
});
}

getidforgenerauser(event:any){
  var object ={
    id: event.target.value
  }
  this.userRoles.getHodDepartment(object).subscribe((res:any)=>{ 
    this.hoddepts= res
    this.deptdata = this.hoddepts.data;
    this.status = this.hoddepts.status;
    console.log(this.deptdata);
    
});
}

getDepIdFortutor(event:any){
  var object ={
    id: event.target.value
  }
  this.userRoles.getTutorDepartment(object).subscribe((res:any)=>{ 
    this.tutortdata= res
    console.log(this.tutortdata);
    
   
});
}


DelLoginTutor(AdmNumber:number){
  this.confirm.onpenConfirmDialog("Are you sure you want to delete this tutor?").afterClosed().subscribe((res:any) => {
    // this.getTutorsFromsHods();
    if(res){
      this.delmessage = res.messsage;
      
      
      this.userRoles.DeleteLoginTutororhod(AdmNumber).subscribe(res=>{
        this.notice.success('Tutor deleted successfully')
        this.getTutorsFromsHods();

      })
      this.userRoles.DeleteLoginTutororhodFromUsers(AdmNumber).subscribe(res=>{

      })
      // this.getTutorsFromsHods();
    } else{
      this.notice.success('deletion not sucessful')
    }
  
          })
          
    }

    DelLoginHoD(AdmNumber:number){
      this.confirm.onpenConfirmDialog("Are you sure you want to delete this tutor?").afterClosed().subscribe((res:any) => {
        this.gethodForLogIn();
        if(res){
          this.delmessage = res.messsage;
          
          this.gethodForLogIn();
          this.userRoles.DeleteLoginhod(AdmNumber).subscribe(res=>{
            this.notice.success('HOD deleted successfully')
            this.gethodForLogIn();
    
          })
          this.userRoles.DeleteLoginhodFromUsers(AdmNumber).subscribe(res=>{
    
          })
          this.gethodForLogIn();
        } else{
          this.notice.success('deletion not sucessful')
        }
        this.gethodForLogIn();
              })
              
        }

DelLoginStudent(AdmNumber:number){
          this.confirm.onpenConfirmDialog("Are you sure you want to delete this tutor?").afterClosed().subscribe((res:any) => {
            // this.getTutorsFromsHods();
            if(res){
              this.delmessage = res.messsage;
              
              this.getstudentforlogin();
              this.userRoles.DeleteLoginstudentFromUsers(AdmNumber).subscribe(res=>{
                this.notice.success('Student deleted successfully')
                this.getstudentforlogin();
        
              })
              this.userRoles.DeleteLoginstudent(AdmNumber).subscribe(res=>{
                this.getstudentforlogin();
              })
              this.getstudentforlogin();
            } else{
              this.notice.success('deletion not sucessful')
            }
          
                  })
                  
            }

}
