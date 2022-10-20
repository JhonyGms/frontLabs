import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendedComponent } from './components/recommended/recommended.component';

const routes: Routes = [
  {
    path: '',
    component: RecommendedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
