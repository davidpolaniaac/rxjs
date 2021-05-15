import { Observable, Observer } from 'rxjs';


const observe : Observer<any> = {
    next: value => console.log("next", value),
    error: error => console.warn('error', error),
    complete: () => console.log('Complete')

    
};

const obs$ = new Observable<string>(subs => {

    subs.next('Hello');
    subs.next('World');
    subs.complete();
});

obs$.subscribe(observe);

obs$.subscribe(subs => console.log(subs));
obs$.subscribe(console.log);
obs$.subscribe(
    value => console.log('value', value),
    error => console.warn('error', error),
    () => console.info('Complete')
);






