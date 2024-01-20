import {of} from 'rxjs';
import {map} from 'rxjs/operators';

const numerosObservables = of(0,1,2,3,4,5,6,7,8,9)

numerosObservables.pipe(
    map(numero => numero % 2 === 1 ? numero: null)
)

.subscribe(numeroImpar => {
    if(numeroImpar !== null){
        console.log(numeroImpar)
    }
})