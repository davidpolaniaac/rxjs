import { Observable, Observer, Subject } from 'rxjs';

const observe : Observer<any> = {
    next: value => console.log("next", value),
    error: error => console.warn('error', error),
    complete: () => console.log('Complete') 
};

const interval$ = new Observable<number>( subs => {

    const intervalId = setInterval(() => subs.next(Math.random()), 1000);

    return () => {
        clearInterval(intervalId);
        console.log('clean interval');
    }
});

// const subs1 = interval$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = interval$.subscribe(rnd => console.log('subs2', rnd));

/**
 * 1 - casteo multiple
 * 2 - tambien es un observer
 * 3 - next, error y complete
 */
const subject$ = new Subject<number>();
const subscription = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observe);
const subs2 = subject$.subscribe(observe);

setTimeout(() => {
    
    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();

}, 4000);