import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'feature-comp',
    templateUrl: './feature.component.html'
})
export class FeatureComponent implements OnInit {
    item: any;

    @Select('animals', 'add') animalAdd$: Observable<any>;
    @Select('animals', 'added') animalAdded$: Observable<any>;
    constructor() { }

    ngOnInit() {
        this.animalAdd$.pipe(debounceTime(1000)).subscribe(res => {
            this.item = res && res.animal;
            console.log('adding...', res);
        });
        this.animalAdded$.pipe(debounceTime(2000)).subscribe(res => {
            this.item = res && res.status;
            console.log('added!! ', res);
        });
    }
}
