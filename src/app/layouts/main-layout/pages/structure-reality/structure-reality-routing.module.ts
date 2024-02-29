import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructureRealityComponent } from './structure-reality.component';

const routes: Routes = [
  {
    path: '',
    component: StructureRealityComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructureRealityRoutingModule { }
