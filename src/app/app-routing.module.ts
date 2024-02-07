import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IxDemoComponent } from './ix-demo/ix-demo.component';

const routes: Routes = [
  { path: 'ix-demo', component: IxDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
