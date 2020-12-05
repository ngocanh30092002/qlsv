var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];
function loadData (){
	var content = fs.readFileSync('./data.json');
	students = JSON.parse(content);
};
function addStudent (){
var id = readlineSync.question('id ? ');
var name = readlineSync.question('name ? ');
var phonenumber = readlineSync.question('phonenumber ? ');
var newStudent = {}
newStudent.id = id;
newStudent.name= name;
newStudent.phonenumber= phonenumber;
students.push(newStudent);
}

function fixStudent (){
	var fixedStudent = readlineSync.question('which student do you want to fix ? :  ');
	for (i=0;i<students.length;i++){
		if ( students[i].id === fixedStudent || students[i].name === fixedStudent ||students[i].phonenumber === fixedStudent ){
			var id1 = readlineSync.question('newId ? ');
	        var name1 = readlineSync.question('newName ? ');
	        var phonenumber1 = readlineSync.question('newPhonenumber ? ');
			students[i].id = id1;
			students[i].name = name1;
			students[i].phonenumber = phonenumber1;
			A = true;
			console.log(students[i]);
			break;
		} 
	console.log('Không phải sinh viên cần sửa!!!!');
}
}


function removeStudent(){
	var removedStudent = readlineSync.question('which student do you want to delete ? :  ');
	for (i=0;i<students.length;i++){
		if ( students[i].id === removedStudent || students[i].name === removedStudent ||students[i].phonenumber === removedStudent ){
			students.splice(i , 1);
			console.log(students);
			break;
		};
	};
}
function findStudent(){
	var findId = readlineSync.question('which student do you want to find ? : ');
	for (i=0;i<students.length;i++){
		if (students[i].id === findId){
			console.log(students[i])
			break;
		}
		}
	console.log('Không có học sinh này')
	}


function showAllStudent(){
	for (var student of students ){
		console.log(student.id ,student.name ,student.phonenumber);
	};

};
function saveAndExit(){
	var allStudent = JSON.stringify(students);
	fs.writeFileSync('./data.json', allStudent , { encoding: 'utf8'});	
}

function showMenu(){
	console.log('1, Nhập thông tin sinh viên.')
	console.log('2, Sửa thông tin sinh viên. ')
	console.log('3, Xóa sinh viên ')
	console.log('4, Tìm thông tin sinh viên theo mã sv')
	console.log('5, Hiển thị toàn bộ sinh viên')
	console.log('6, Lưu và Thoát')

	var option = readlineSync.question('What are your option ? ')
	switch(option){
		case '1':
		addStudent();
		showMenu();
		break;
		case '2':
		fixStudent();
		showMenu();
		break;
		case '3':
		removeStudent();
		showMenu();
		break;
		case '4':
		findStudent();
		showMenu();
		break;
		case '5':
		showAllStudent();
		showMenu();
		break;
		case '6':
		saveAndExit();
		break;
		default:
		console.log('Wrong option');
		showMenu();
		break;

	}
}
function Main(){
	loadData();
	showMenu();
	

};
Main();