import {exec} from 'child_process';
import { log } from 'console';

const comando1 = 'ls -lh'; 
const comando2 = 'find /';

exec(comando1, (err,stdout,stderr)=>{
    if(err) {
        console.log(`Error =>  ${err.message}`);
        return;
    }
    if(stderr){
        console.log('STEDERR');
        console.log(stderr);
        return;
    }
    console.log(stdout);
    
});

console.log(`PID PRINCIPAL ===> ${process.pid}`);
