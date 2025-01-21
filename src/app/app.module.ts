import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

// "Module" is a decorator that allows us to group components together in Angular

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ], //delcare all the components(not standalone) that belong to this module or need to work together
  bootstrap: [AppComponent], //specify the root component of the application
  imports: [BrowserModule, SharedModule, TasksModule], //import other components(standalone) that are required by this module
})
export class AppModule{}
