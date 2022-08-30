class Template{

    #_about; // elements to insert for about
    #_experiences; // elements to insert for experiences
    #_skills; // elements to insert for skills
    #_projects; // elements to insert for projects
    #_contact; // elements to insert for contact

    #_navigationBar;

    constructor() {

    }

    get navigationBar(){

        let nav3Bars = document.getElementById("dropdown-content");

        // check what topics the user chose to add
        // ex. user enter a skill, then add a skill button to navbar
    }

    get about() {

        return this.#_about;
    }

    get experiences() {
        return this.#_experiences;
    }

    get skills() {
        return this.#_skills;
    }

    get projects() {
        return this.#_projects;
    }

    get contact() {
        return this.#_contact;
    }

// sends the user their downloadable zip file
    #createTemplate(){

    }



}