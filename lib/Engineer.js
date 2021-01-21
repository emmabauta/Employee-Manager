// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class engineer{
    constructor(github){
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGitHub(){
        return this.github;
    }
}
module.exports = engineer; 