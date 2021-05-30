'use strict'
const fs = require('fs');
import { dataProcessor } from './dataProcessor'

const args = process.argv.slice(2);
if (args && args.length>0) {
    fs.readFile(process.argv[2],'utf-8', (err:any, data:string) => {
        if(err){
            console.error("Error reading file:",err?.message); 
            return;
        }
        console.log(dataProcessor(data));
    });
}else{
    console.error("Invalid file input");
}