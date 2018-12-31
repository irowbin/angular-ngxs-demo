import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable()
export class AppService {
    constructor() { }

    addAnimal(value: { animal: string }): Observable<any> {

        const sub = new Subject();

        setTimeout(() => {
          
            sub.next({ status: 'animal adding... ->' + value.animal });

        }, 2000);

        return sub;
    }

    addedAnimalDone(value: { animal: string }): Observable<any> {

        const sub = new Subject();

        setTimeout(() => {

            sub.next({ status: 'animal added!! ->' + value.animal });

        }, 2000);

        return sub;
    }
}
