class Boy { 
	name : string 
	about() : void { 
		console.log(this.name +" Đây là lớp Boy") 
	} 
} 

class Student extends Boy { 
	rollnumber : number; 
	marks: number; 
	constructor(rollnumber : number, marks : number, 
	name1 : string){ 
		super(); 
		this.rollnumber = rollnumber 
		this.name = name1 
		this.marks = marks 
	} 
	displayStudentInformation() : void { 
		console.log("Tên : "+ this.name +", MaSV : " + this.rollnumber +", Khóa : " + this.marks + " đến " +(this.marks + 4)) 
	} 
	about() : void{ 
		console.log(this.name + " Đây là lớp student") 
	} 
} 

let student = new Student(2020336, 2020, "Thắng"); 
student.displayStudentInformation(); 
student.about();
