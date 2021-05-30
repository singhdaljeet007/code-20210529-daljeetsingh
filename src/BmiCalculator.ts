import { Person } from './interfaces/Person';

export class BmiCalculator {
    private bmiCategories: Array<string> = [];
    private healthRisks: Array<string> = [];
    private overWeightCount: number;

    constructor() {
        this.bmiCategories = ["Underweight", "Normal weight", "Overweight", "Moderately obese", "Severely obese", "Very severely obese"];
        this.healthRisks = ["Malnutrition risk", "Low risk", "Enhanced risk", "Medium risk", "High risk", "Very high risk"];
        this.overWeightCount = 0;
    }

    /**
     * 
     * @param height 
     * @param weight 
     * @returns 
     */
    calculateBmi(height: number, weight: number): number {
        //convert height to m
        height = height / 100;
        return parseFloat((weight / Math.pow(height, 2)).toFixed(1));
    }

    /**
     * 
     * @param persons 
     * @returns 
     */
    getPersonData(person: Person): string {
        let personDataStr = "";
        if (person && person.gender && person.heightCm && person.weightKg) {
            person.bmi = this.calculateBmi(person.heightCm, person.weightKg);
            if (person.bmi >= 25) {
                this.overWeightCount++;
            }
            person.bmiCategory = this.getBmiCategory(person);
            person.healthRisk = this.getHealthRisk(person);
            personDataStr += person.gender + "\t" + person.heightCm + "\t\t\t" + person.weightKg + "\t\t\t" + person.bmi + "\t\t\t" + ((person.bmiCategory.toString().length > 13) ? person.bmiCategory : person.bmiCategory.toString() + "\t") + "\t" + person.healthRisk + "\n";
            return personDataStr;
        } else {
            return "";
        }
    }

    /**
     * 
     * @param person 
     * @returns 
     */
    getBmiCategory(person: Person): string {
        if(!person.bmi){
            person.bmi=this.calculateBmi(person.heightCm,person.weightKg);
        }
        if (person.bmi && person.bmi <= 18.4) {
            return this.bmiCategories[0];
        } else if (person.bmi && person.bmi >= 18.5 && person.bmi <= 24.9) {
            return this.bmiCategories[1];
        } else if (person.bmi && person.bmi >= 25 && person.bmi <= 29.9) {
            return this.bmiCategories[2];
        } else if (person.bmi && person.bmi >= 30 && person.bmi <= 34.9) {
            return this.bmiCategories[3];
        } else if (person.bmi && person.bmi >= 35 && person.bmi <= 39.9) {
            return this.bmiCategories[4];
        } else if (person.bmi && person.bmi >= 40) {
            return this.bmiCategories[5];
        } else {
            return "NA";
        }
    }

    /**
     * 
     * @param person 
     * @returns 
     */
    getHealthRisk(person: Person): string {
        if(!person.bmi){
            person.bmi=this.calculateBmi(person.heightCm,person.weightKg);
        }
        if (person.bmi && person.bmi <= 18.4) {
            return this.healthRisks[0];
        } else if (person.bmi && person.bmi >= 18.5 && person.bmi <= 24.9) {
            return this.healthRisks[1];
        } else if (person.bmi && person.bmi >= 25 && person.bmi <= 29.9) {
            return this.healthRisks[2];
        } else if (person.bmi && person.bmi >= 30 && person.bmi <= 34.9) {
            return this.healthRisks[3];
        } else if (person.bmi && person.bmi >= 35 && person.bmi <= 39.9) {
            return this.healthRisks[4];
        } else if (person.bmi && person.bmi >= 40) {
            return this.healthRisks[5];
        } else {
            return "NA";
        }
    }

    /**
     * 
     * @returns 
     */
    getOverWeightCount(): number {
        return this.overWeightCount;
    }
}