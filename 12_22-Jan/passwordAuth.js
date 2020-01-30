function User(username, password) {
  Object.assign(this, { username, password });
}

User.prototype.checkPass = function(passToCompare) {
  return this.password === passToCompare;
};

export default User;
