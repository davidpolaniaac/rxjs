import { Observable } from 'rxjs';

const obs$ = new Observable<string>(subs => {

    subs.next('Hello');
    subs.next('World');
    subs.complete();
});

obs$.subscribe(
    value => console.log('value', value),
    error => console.warn('error', error),
    () => console.info('Complete')
);






