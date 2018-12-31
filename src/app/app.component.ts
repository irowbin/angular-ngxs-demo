import { Component, AfterViewInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddAnimal } from 'src/app-store/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Welcome!';
  constructor(private store: Store) { }

  ngAfterViewInit() {
    this.store.dispatch(new AddAnimal({ animal: ' tiger' }));
  }
}
