var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
var car = {};
car.manufacturer = "manufacturer";
car.model = 'model';
var car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [
    {
        cars: [car1, car2]
    }
];
var group = {
    students: [
        { id: 1, name: 'Кирилл', group: 6, marks: [
                { subject: "ОАиП", mark: 2, done: false },
                { subject: "КПО", mark: 7, done: true },
                { subject: "Физика", mark: 7, done: true },
            ] },
        { id: 2, name: 'Сергей', group: 9, marks: [
                { subject: "ООП", mark: 4, done: true },
                { subject: "БД", mark: 5, done: true },
                { subject: "ПвI", mark: 2, done: false },
            ] },
        { id: 3, name: 'Василий', group: 6, marks: [
                { subject: "ПСП", mark: 9, done: true },
                { subject: "БД", mark: 6, done: true },
                { subject: "БЖЧ", mark: 7, done: true },
            ] },
    ],
    studentsFilter: function (group) {
        return this.students.filter(function (student) { return student.group === group; });
    },
    marksFilter: function (mark) {
        return this.students.filter(function (student) { return student.marks.filter(function (marks) { return marks.mark === mark; }).length > 0; });
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
    },
    mark: 6,
    group: 3,
};
console.log("Функция marksFilter:");
for (var _i = 0, _a = group.marksFilter(7); _i < _a.length; _i++) {
    var student = _a[_i];
    console.log(student.id);
}
console.log("Функция studentsFilter:");
for (var _b = 0, _c = group.studentsFilter(6); _b < _c.length; _b++) {
    var stud = _c[_b];
    console.log(stud.id);
}
console.log("Функция deleteStudent:");
group.deleteStudent(1);
for (var _d = 0, _e = group.students; _d < _e.length; _d++) {
    var stud = _e[_d];
    console.log(stud.id);
}
