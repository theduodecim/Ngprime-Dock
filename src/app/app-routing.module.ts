import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeDockComponent } from './components/prime-dock/prime-dock.component';

const routes: Routes = [
  {path: '', component: PrimeDockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
