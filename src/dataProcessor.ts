'use strict'
import { BmiCalculator } from './BmiCalculator'
let bmiCalculator: BmiCalculator;

export function dataProcessor(input: any): string {
    let data ={};
    try{
        data = JSON.parse(input);
    }catch(err){
        return "JSON_PARSE_ERROR";
    }
    if(data && Array.isArray(data) && data.length>0){
        createBmiCalculator();
        let output = getBmiData(data).trim();
        if(output==""){
            return "INVALID_DATA_TYPE";
        }
        let overWeightCount = bmiCalculator.getOverWeightCount();
        output += `\nCount of OverWeight Persons:${overWeightCount}`;
        return output;
    }
    return "INVALID_LIST";
}

function getBmiData(persons:any):(string){
    let output = "Gender\tHeight(cm)\t\tWeight(Kg)\t\tBmi(Kg/m2)\t\tBmi Category\t\tHealth Risk \n\n";
    for (let i = 0; i < persons.length; i++) {
        let person = persons[i];
        if(person && person.gender && person.heightCm && person.weightKg){
            output+=bmiCalculator.getPersonData(person);
        }else{
            return "";
        }
    }
    return output;
}
function createBmiCalculator():void{
    bmiCalculator = new BmiCalculator();
}