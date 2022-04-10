import { delay, take } from 'rxjs/operators';
import { forkJoin, interval, of } from 'rxjs';

const numbers$   = of(1,2,3,4);
const interval$ = interval(1000).pipe( take(3) ); //0..1..2 
const letters$    = of('a','b','c').pipe( delay(3500) );

// forkJoin(
//     numbers$,
//     interval$,
//     letters$
// ).subscribe( console.log  )

// forkJoin(
//     numbers$,
//     interval$,
//     letters$
// ).subscribe( resp => {
//     console.log('numbers: ', resp[0] )
//     console.log('intérvalo: ', resp[1] )
//     console.log('letters: ', resp[2] )
// });

// forkJoin({
//     numbers$,
//     interval$,
//     letters$
// }).subscribe( resp => {
//     console.log(resp)
// });

forkJoin({
    num: numbers$,
    int: interval$,
    let: letters$
}).subscribe( resp => {
    console.log(resp)
});