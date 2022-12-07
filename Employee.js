var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullname, gender, birthday, email, phoneNumber) {
        this.fullname = "";
        this.gender = Gender.OTHER;
        this.email = "";
        this.phoneNumber = "";
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.fullname = fullname;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee("Nguyen Van Hung", Gender.MALE, new Date("1995-02-20"), "hung@gmail.com", "1234"));
employeeList.push(new Employee("Tran Van Hoang", Gender.FEMALE, new Date("2000-02-20"), "hoang@gmail.com", "0912"));
employeeList.push(new Employee("Le Nhu Y", Gender.OTHER, new Date("1989-02-20"), "ley@gmail.com", "0913"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
