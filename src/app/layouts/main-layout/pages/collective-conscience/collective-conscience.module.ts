import { NgModule } from '@angular/core';
import { StructureRealityRoutingModule } from './collective-conscience-routing.module';
import { SharedModule } from 'src/app/@shared/shared.module';
import { CollectiveConscienceComponent } from './collective-conscience.component';



@NgModule({
  declarations: [
    CollectiveConscienceComponent
  ],
  imports: [
    StructureRealityRoutingModule, SharedModule
  ]
})
export class CollectiveConscienceModule { }
