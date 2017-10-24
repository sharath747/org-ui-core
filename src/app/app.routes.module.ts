/**
 * Created by Admin on 25-09-2017.
 */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
// import { AuthenticationGuard } from '@nw/ui-core-shared/services/authentication.guard';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

// {path: '', component: HomeComponent, canActivate: [AuthenticationGuard]},
// export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
