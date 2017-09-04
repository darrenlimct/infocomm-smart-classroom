drop database smartClassroom;
create database smartClassroom;
use smartClassroom;

create table users(
userID integer(7) not null,
password varchar(128) not null,
/*salt char(16) not null,
hash char(64) not null, --use 256 hash
*/
primary key (userID)
);

create table teachers(
teacherID integer(7) not null,
isMentor boolean not null,
primary key (teacherID),
constraint teacherUser foreign key (teacherID) references users(userID)
on delete cascade

);

create table subject(
subjectID integer(5) not null,
subjectName varchar(30) not null,
teacherID integer(7) not null,
primary key (subjectID),
constraint subjectTeacher foreign key (teacherID) references teachers(teacherID)
);

create table calendarEvent(
cID integer(5) not null,
subjectID integer(5),
cEventName varchar(30) not null,
cEventDescription varchar(100),
cDate date not null,
cTime time not null,
primary key (cID),
constraint eventSubject foreign key (subjectID) references subject(subjectID)
on delete set null 
on update cascade
);
