Project Description

The purpose of this project was to create a team profile generator in which a manager could quickly and easily enter basic information about employees they were tasked with managing.
In addition to creating the team profile generator, we were also tasked with creating a suite of tests meant to ensure that the functions within each of the employee classes worked properly.


Project Instructions:

GIVEN a command-line application that accepts user input\
WHEN I am prompted for my team members and their information\
THEN an HTML file is generated that displays a nicely formatted team roster based on user input\
WHEN I click on an email address in the HTML\
THEN my default email program opens and populates the TO field of the email with the address\
WHEN I click on the GitHub username\
THEN that GitHub profile opens in a new tab\
WHEN I start the application\
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number\
WHEN I enter the team manager’s name, employee ID, email address, and office number\
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team\
WHEN I select the engineer option\
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu\
WHEN I select the intern option\
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu\
WHEN I decide to finish building my team\
THEN I exit the application, and the HTML is generated

Files(-) and Directories(*) in this project:\
*__tests__\
    -Employee.test\
    -Engineer.test\
    -Intern.test\
    -Manager.test\
*dist\
    -index.html\
    -style.css\
*lib\
    -employee.js\
    -engineer.js\
    -intern.js\
    -manager.js\
*node_modules\
*src\
    -create-file.js\
-.gitignore\
-index.js\
-package.json\
-package-lock.json\
-README.md