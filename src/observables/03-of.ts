import { of } from 'rxjs';

const obs$ = of<number>(1, 2, 3, 4, 5, 6, 7, 8);
//const obs$ = of<any>([1,2],{ a:1, b:2}, function(){}, Promise.resolve(true) );

obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia ')
);

console.log('fin del obs$');