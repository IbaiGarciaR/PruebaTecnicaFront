import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from './app/components/user-form/user-form.component';
import { UserListComponent } from './app/components/user-list/user-list.component';

const routes = [
  { path: '', component: UserListComponent },
  { path: 'user/new', component: UserFormComponent },
  { path: 'user/edit/:id', component: UserFormComponent },
  { path: 'user/:id', component: UserFormComponent },
];

bootstrapApplication(UserListComponent, {
  providers: [
    importProvidersFrom(FormsModule, RouterModule.forRoot(routes))
  ]
}).catch(err => console.error(err));
