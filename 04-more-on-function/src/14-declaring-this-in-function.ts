const user = {
  id: 123,
  admin: false,
  becomeAdmin: function() {
    this.admin = true;
  }
}

interface User {
  admin: boolean;
}

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db: DB = {
  filterUsers: (filter: (this: User) => boolean) => {
    let user1: User = {
      admin: false,
    }
    let user2: User = {
      admin: true,
    }
    return [user1, user2]
  }
}

const admins1 = db.filterUsers(function(this: User) {
  return this.admin;
})

const admin2 = db.filterUsers((this: User) => { // 箭头函数不能包含”this“参数
  return this.admin; // 包含箭头函数捕获”this“的全局值
})

export {};