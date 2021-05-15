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

    return () =>{
        clearInterval(interval);
        console.log('Interval clean')
    };


});

const subscription = interval$.subscribe(num => console.log('Num: ', num))

setInterval(()=> {
    subscription.unsubscribe();
}, 3000);

const subscription2 = interval$.subscribe(observe);

setInterval(()=> {
    subscription2.unsubscribe();
}, 5000);