import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent} from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
     path: '',
     component: SplashComponent
   },
   {
     path: 'about',
     component: AboutComponent
   },
   {
     path: 'members',
     component: MemberListComponent
   },
   {
     path: 'members/:id',
     component: MemberDetailsComponent
   },
   {
     path: 'admin',
     component: AdminComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
