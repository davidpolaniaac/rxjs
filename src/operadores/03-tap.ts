import { map, tap } from 'rxjs/operators';

import { range } from 'rxjs';

const numbers$ = range(1,5);

numbers$.pipe(
    tap( x => {
        console.log('before', x);
        return 100;
    }),
    map( val => val * 10 ),
    tap({
        next: valor => console.log('after', valor),
        complete: () => console.log('finished')
    })
)
.subscribe( val => console.log('subs', val ));