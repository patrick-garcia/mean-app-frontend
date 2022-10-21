import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { AddPolicyComponent } from './views/add-policy/add-policy.component';
import { EditPolicyComponent } from './views/edit-policy/edit-policy.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'add-policy', component: AddPolicyComponent },
  { path: 'edit-policy/:policyid', component: EditPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
