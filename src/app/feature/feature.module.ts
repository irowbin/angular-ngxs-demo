import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [FeatureComponent],
    imports: [CommonModule, RouterModule.forChild([
        { path: '', component: FeatureComponent }
    ])],
    exports: [FeatureComponent],
    providers: [],
})
export class FeatureModule { }
