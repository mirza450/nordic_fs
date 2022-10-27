class users {
    constructor(emplyeeName,emplyId,salary){
        this.emplyeeName=emplyeeName;
        this.emplyId=emplyId;
        this.#displaysalary(salary);
    }
    set emplyeeName(value){
        this._emplyeeName=users.nameCase(value);
    }

    static nameCase(value){
        console.log(value);
        return `${value[0].toUpperCase()}${value.slice(1)}`
    }
    get emplyeeName(){
        return users._emplyeeName;
    }
    #displaysalary(salary){
        console.log(salary);
        return salary;
    }

}
const a1=new users("virat",234,500000000);
const b2=new users("mirza",456,50009);
console.log(a1);
console.log(b2);

