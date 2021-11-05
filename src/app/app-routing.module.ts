import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignsComponent } from './components/3D-Designs/designs.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BudgetComponent } from './components/budget/budget.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Home1Component } from './components/home1/home1.component';
import { PremiumComponent } from './components/premium/premium.component';
import { ProjectComponent } from './components/project/project.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'contact', component: ContactComponent }, 
  { path: 'projects/premium', component: PremiumComponent }, 
  { path: 'projects/budget', component: BudgetComponent },
  { path: 'projects/designs', component: DesignsComponent},
  { path: 'projects/premium/gallery', component: GalleryComponent }, 
  { path: 'projects/budget/gallery', component: GalleryComponent }, 
  { path: 'home', component: Home1Component },
  { path : 'reviews', component : CustomerReviewsComponent },
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
