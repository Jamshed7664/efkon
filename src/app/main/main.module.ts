import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { UsersComponent } from './users/users.component';
import { LicenceComponent } from './licence/licence.component';
import { ViewLogsComponent } from './view-logs/view-logs.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UsersServicesService } from './users/users-services.service';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { UpdateLicenceComponent } from './update-licence/update-licence.component';
import { RenewLicenceComponent } from './renew-licence/renew-licence.component';
import { GenerateLicenceComponent } from './generate-licence/generate-licence.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { MyProjectDetailService } from '../Services/my-project-detail.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ProjectDetailComponent,
    UsersComponent,
    LicenceComponent,
    ViewLogsComponent,
    ChangePasswordComponent,
     CreateUserComponent,
    CreateProjectComponent,
    UpdateLicenceComponent,
    RenewLicenceComponent,
    GenerateLicenceComponent,
    UpdateUserComponent,
    UserRequestsComponent,
    UpdateProjectComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers :[UsersServicesService,MyProjectDetailService]
})
export class MainModule { }
