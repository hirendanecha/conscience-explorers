import { NgModule } from '@angular/core';
import { StructureRealityRoutingModule } from './structure-reality-routing.module';
import { SharedModule } from 'src/app/@shared/shared.module';
import { StructureRealityComponent } from './structure-reality.component';



@NgModule({
  declarations: [
    StructureRealityComponent
  ],
  imports: [
    StructureRealityRoutingModule, SharedModule
  ]
})
export class StructureRealityModule { }
