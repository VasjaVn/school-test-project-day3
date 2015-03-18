
function Users() {
    this.infoUsers = new Array();
}

Users.prototype.add = function( user ) {
    this.infoUsers.push(user);
}

Users.prototype.get = function( index ) {

    if ( index < 0 || index >= this.infoUsers.length ) {
        throw new Error("Wrong index for array of infoUsers!");
    }

    var info = "User name: <b>" + this.infoUsers[index].name + "</b>" +
        " E-mail: <b>" + this.infoUsers[index].email + "</b>" +
        " Description: <b>" + this.infoUsers[index].description + "</b>" +
        " Age: <b>" + this.infoUsers[index].age + "</b>";

    return info;
}

Users.prototype.getAll = function() {

    var info = "";

    for ( var i = 0; i < this.infoUsers.length; i++ ) {
        info += this.get(i);
        info += "</br>";
    }

    return info;
}


function User( name, email, description, age ) {

    this.name = name;
    this.email = email;
    this.description = description;
    this.age = age;

}

User.prototype.constructor = function() {

}

User.prototype.setName = function( name )  {
    this.name = name;
}

User.prototype.setEmail = function( email ) {
    this.email = email;
}

User.prototype.setDescription = function( description ) {
    this.description = description;
}

User.prototype.setAge = function( age ) {
    this.age = age;
}


module.exports.User = User;
module.exports.Users = Users;


