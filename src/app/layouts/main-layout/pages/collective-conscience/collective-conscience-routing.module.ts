import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectiveConscienceComponent } from './collective-conscience.component';

const routes: Routes = [
  {
    path: '',
    component: CollectiveConscienceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructureRealityRoutingModule { }
