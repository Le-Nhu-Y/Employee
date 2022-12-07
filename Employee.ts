enum Gender{
    MALE,
    FEMALE,
    OTHER
}
class Employee {
    fullname: string = "";
    gender: Gender = Gender.OTHER;
    birthday?: Date;
    email: string = "";
    phoneNumber: string = "";
    constructor(fullname: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.fullname = fullname;
        this.phoneNumber = phoneNumber;
    }
}
let employeeList: Employee[] = [];
employeeList.push(new Employee("Nguyen Van Hung", Gender.MALE, new Date("1995-02-20"), "hung@gmail.com", "1234"));
employeeList.push(new Employee("Tran Van Hoang", Gender.FEMALE, new Date("2000-02-20"), "hoang@gmail.com", "0912"));
employeeList.push(new Employee("Le Nhu Y", Gender.OTHER, new Date("1989-02-20"), "ley@gmail.com", "0913"));

function showEmployee(employee: Employee) {
    console.log(employee);
}

employeeList.forEach(showEmployee);