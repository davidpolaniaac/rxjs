import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.put( url, {
//     id: 1,
//     name: 'David'
// }, {
//     'token': 'ABC123'
// }).subscribe( console.log  );

ajax({
    url: url,
    method: 'DELETE',
    headers: {
        'token': 'ABC123'
    },
    body: {
        id: 1,
        name: 'David'
    }
}).subscribe( console.log );
