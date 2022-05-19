import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirebaseModule } from './Firebase.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin-dashboard/index/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManageUserComponent } from './admin-dashboard/manage-user/manage-user.component';
import { ManageCoursesComponent } from './admin-dashboard/manage-courses/manage-courses.component';
import { CalanderComponent } from './admin-dashboard/calander/calander.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContactComponent,
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ManageUserComponent,
    ManageCoursesComponent,
    CalanderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
