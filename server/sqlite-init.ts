import SQL from "sql-template-strings";
import * as sqlite from "sqlite";

async function init() {
  const db = await sqlite.open("./database.sqlite");
  //db.run(SQL`drop table user`).then(_ => {
  db.run(
    SQL`create table user(
        username char(16) primary key not null,
        usertype char(8) not null,
        password char(20) not null,
        token char(50) default "",
        time char(50) default ""
    )`
  );
  db.run(SQL`create table info(
    username char(16) primary key not null,
    name char(16) default "",
    id char(10) default "",
    sex char(5) default "",
    phone char(20) default "",
    QQ char(20) default "",
    email char(30) default "",
    avatar char(30) default ""
    )`);
  //});
  // db.run(
  //   SQL`create table user(
  //       username char(16) primary key not null,
  //       usertype char(8) not null,
  //       password char(20) not null
  //       token char(50) default "",
  //       time char(50) default ""
  //   )`
  //   //SQL`insert into user values ("test","student","test123456","1213")`
  // );
  // .then(data => {
  //   console.log(data);
  //   return db.get(SQL`select * from user`);
  // })
  // .then(data => {
  //   console.log(data);
  //   db.close();
  // });
}

init();
