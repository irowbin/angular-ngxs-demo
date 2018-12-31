import { Action, State, StateContext } from '@ngxs/store';
import { switchMap, tap, mergeMap } from 'rxjs/operators';
import { AppService } from 'src/service/app.service';

export class AddAnimal {
    static readonly type = '[Zoo] Add Animal';
    constructor(public add: { animal: string }) { }
}

export class AddedAnimal {
    static readonly type = '[Zoo] Added Animal';
    constructor(public added: any) { }
}

@State<string[]>({
    name: 'animals'
})
export class AnimalsState {

    constructor(private appService: AppService) { }

    @Action(AddAnimal)
    AddAnimalInit(ctx: StateContext<any>, action: any) {

        return this.appService.addAnimal(action.add).pipe(
            tap(_ => {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    ...action
                });
            }),
            mergeMap(res => ctx.dispatch(new AddedAnimal(res)))

        );
    }

    @Action(AddedAnimal)
    AddAnimalDone(ctx: StateContext<any>, action: any) {
        const state = ctx.getState();
        action.animal = action.animal + ' adding success!!';
        ctx.setState({
            ...state,
            ...action
        });

    }

}
