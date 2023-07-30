import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tracker',
    pathMatch: 'full',
  },
  {
    path: 'job-list',
    loadChildren: () =>
      import('./job-list/job-list.module').then((m) => m.JobListModule),
  },
  {
    path: 'tracker',
    loadChildren: () =>
      import('./ip-address-tracker/ip-address-tracker.module').then(
        (m) => m.IpAddressTrackerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
