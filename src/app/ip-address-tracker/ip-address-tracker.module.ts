import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpAddressTrackerRoutingModule } from './ip-address-tracker-routing.module';
import { MapComponent } from './pages/map/map.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, ReactiveFormsModule, IpAddressTrackerRoutingModule],
})
export class IpAddressTrackerModule {}
