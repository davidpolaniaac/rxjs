import { Observable, Observer } from 'rxjs';


const observe : Observer<any> = {
    next: value => console.log("next", value),
    error: error => console.warn('error', error),
    complete: () => console.log('Complete') 
};


const interval$ = new Observable<number>( subscriber => {
    let count: number = 1;
    const interval = setInterval(()=> {
        subscriber.next(count++);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () =>{
        clearInterval(interval);
        console.log('Interval clean')
    };
});

const subscription1 = interval$.subscribe(observe);
const subscription2 = interval$.subscribe(observe);
const subscription3 = interval$.subscribe(observe);
const subscription4 = interval$.subscribe(observe);

subscription3.add(subscription4);

setInterval(()=> {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();
    //subscription4.unsubscribe();
}, 6000);


