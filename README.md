# Branding Database: Brand Kits -- Project 2

### The live site can be accessed here on Heroku: [Brand Kits](https://git-project-brand-kit.herokuapp.com/)

#### About this Project
For this project, I created an app that could be used by branding agencies. It would allow the branding agency to have a place to keep the brand kits of all their clients. As a strech feature, I would like to be able to have the clients (of the agency) log in and see their own brand kits. Ideally they can have access to edit and update only their brand kits. 

#### User Stories
As the CEO of a Branding Agency, I want to have a website that allows me to keep all the brand kits of my different clients and allows me to showcase them and update them, if needed. 
As a client of this Branding Agency, I want to be able to login and see my own brand kit to be able to use and access the colors, fonts, and other deliverables for use in print or web and be able to maintain consistency across my brand.

#### Technical Details 
I created an app with the 7 RESTful routes and full CRUD. Users can add, updated, delete, and view the brand kits. I have built a schema with required and default values for several key value pairs. I have also adhered to the MVC file structure. I added CSS to take in the values of the different brand colors and output them into a stylized show page. Originally, I created this app locally and used MongoDB to store my database. Afterwards, I deployed the app to Heroku and linked it to MongoDB Atlas to store my database in a global cloud so that it could be used. 

#### Challenges
I faced a few challenges while completing this project. The first challange was creating and linking all 7 RESTful routes. The delete and update feature were originally presenting an issue which I soon realized was due to not linking the pages properly. Another difficulty was in connecting the application to Heroku and MongoDB Atlas. There were several errors I had to work through and learn about during this process. Another challange that I'm still working on is creating dropdown features to allow users to choose from a list of options (while still have the option of "other" to insert their own custom fields) for the color and Typography options. I would also like to use EJS Partials in this project as that will help my code not be as DRY. 

#### Stretch Goals
As mentioned in the about section, one of my first stretch features would be login authentication. It would be idea for the potiential clients to be able to login and see their particular brand kits. Another stretch goal would be adding a dropdown menu for the color and type options so that clients can have some options in case they don't already have hex codes and typography names chosen. I would also create an alert before the delete route to ensure users have to confirm they meant to click the delete button to delete their entry.

##### &copy; This was created by Maria Mergal.