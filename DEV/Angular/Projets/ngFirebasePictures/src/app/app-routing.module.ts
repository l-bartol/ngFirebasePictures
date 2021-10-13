import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full' // redirect to `aboutbs`
  }
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
