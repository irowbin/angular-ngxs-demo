import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { AnimalsState } from 'src/app-store/app-state';
import { AppService } from 'src/service/app.service';
import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { HomeComponent } from './home.component';
const r: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lazy-comp', loadChildren: './feature/feature.module#FeatureModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // FeatureModule,
    RouterModule.forRoot(r),
    NgxsModule.forRoot([AnimalsState], {
      developmentMode: true
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
