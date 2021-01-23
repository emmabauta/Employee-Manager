// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer{
    constructor(github, id, email){
        this.github = github;
        this.id = id;
        this.email = email;
    } 

    getGitHub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
    
}
