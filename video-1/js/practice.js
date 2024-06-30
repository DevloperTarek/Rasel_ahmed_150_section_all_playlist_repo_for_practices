function Person(first,last,age,eye){
     this.firstName = first;
     this.lastName = last;
     this.age = age;
     this.eye = eye;
}
const MyFother = new Person("Azmol","Hossain",43,"B+");
document.write("My fother name is"+ MyFother.firstName + MyFother.lastName + "<br>"+ MyFother.age);