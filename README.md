# PROJECT 4 README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Classroom Management 101** is a tool for teachers to manage their classrooms. Teachers are able to filter their students by grades and classes, leave individual comments, well as add, remove and edit students as they join and leave their classroom. If your an educator in need of a persional place to keep track of your students, Classroom management 101 is site to visit._


<br>

## MVP

The **Classroom Management 101** MVPs are as follows ...
  #### Backend
    1) Built on a Ruby on Rails server with RESTful JSON endpoints
    2) Three resource tables with association table(s)
    3) Full CRUD functionality (index, show, create, update, delete) 

   #### Frontend
    1) Interactive React app
    2) 8+ rendered functional React components it states and props
    3) DOM Manipulation using React
    4) Rendered data consumed from my Ruby on Rails API in my components
    5) Utilized React Router for client-side routing
    6) Full CRUD functionality (get, post, put, delete) 

   #### Styling
    1) Utilized CSS, Flexbox, Grid and Media queries (mobile, tablet, desktop)
  
   #### Deployment
    1) Deployed the front-end through Netify
    2) Deployed the back-end vis Heroku

   #### More
    1) Buttons for filtering by grade (top 5, A, B, C, D, F)
    2) Buttons for filtering by class (per 1, per 2, per 3, per 4, per 5 and All)
    3) Form to add and edit student information
    4) A show page that rendered all the students in a teachers classroom.
    5) A details page that renders all the information of one student

<br>

### Goals

- Full Crud
- Three tables
- One association
- Create an interactive app that helps educators manage their classrooms.
- Solidify my understanding of how to connect the frontend to the backend.
- Gain more experience working with Ruby on rails.

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Used for front-end development. |
|   React Router   | Used for link and routing. |
|  Faker   | Used to generate fake student names. |
|  Axios   | Used to access information from an API. |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

##### Mobile/Tablet

**Landing Page**
![Mobile and Tablet Landing Page](https://user-images.githubusercontent.com/65198477/116018685-9c7c2000-a610-11eb-8bc5-2ce77130f776.png)

**Login Page**
![Mobile and Tablet Login Page](https://user-images.githubusercontent.com/65198477/116018771-c3d2ed00-a610-11eb-8957-4b9b42839719.png)

**Register Page**
![Mobile and Tablet Register Page](https://user-images.githubusercontent.com/65198477/116018794-cd5c5500-a610-11eb-966e-891fd580d322.png)

**Home Page**
![Mobile and Tablet Home Page](https://user-images.githubusercontent.com/65198477/116018491-1cee5100-a610-11eb-9d02-5a8fb94749ca.png)

**Index Page**
![Mobile and Tablet Index Page](https://user-images.githubusercontent.com/65198477/116018520-32637b00-a610-11eb-8a3c-e75c86e5d8fe.png)

**Show Page**
![Mobile and Tablet Show Page](https://user-images.githubusercontent.com/65198477/116018551-40b19700-a610-11eb-9141-55aaef0e0f98.png)

**Create/Update Page**
![Mobile and Tablet Creaste and Update Page](https://user-images.githubusercontent.com/65198477/116018560-4a3aff00-a610-11eb-899b-4ae83c541bd7.png)

##### DESKTOP

**Landing Page**
![Desktop Landing Page](https://user-images.githubusercontent.com/65198477/116017566-f7604800-a60d-11eb-893c-d41e3d0c23e7.png)

**Login Page**
![Desktop Login Page](https://user-images.githubusercontent.com/65198477/116018127-5a9eaa00-a60f-11eb-917f-866d6cb4cd68.png)

**Register Page**
![Desktop Register Page]((https://user-images.githubusercontent.com/65198477/116018143-6be7b680-a60f-11eb-9f6b-7d33dc957c63.png)

**Home Page**
![Desktop Home Page](https://user-images.githubusercontent.com/65198477/116018174-7efa8680-a60f-11eb-9bcf-0c447ec6cd2c.png)

**Index Page**
![Desktop Index Page](https://user-images.githubusercontent.com/65198477/116018199-8d48a280-a60f-11eb-8204-8b0dfc8f4e23.png)

**Show Page**
![Desktop Show Page](https://user-images.githubusercontent.com/65198477/116018230-99346480-a60f-11eb-861d-31c39e87e8b9.png)

**Create/Update Page**
![Desktop Creaste and Update Page](https://user-images.githubusercontent.com/65198477/116018250-a5202680-a60f-11eb-8532-d9de37c4ccc1.png)

#### Component Tree

https://whimsical.com/classroom-management-101-QDVfdAbYAmq29cSqq7HvX3
![Component Tree](https://user-images.githubusercontent.com/65198477/116004481-cf062880-a5d0-11eb-9492-378374ab39cb.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ images
|__ components/
      |__ FilterButtons.jsx
      |__ Form.jsx
      |__ PeriodButtons.jsx
      |__ StudentList.jsx
      |__ shared
            |__ Layout.jsx
            |__ Footer.jsx
 |__ screens/
            |__ HomePage.jsx
            |__ LandingPage.jsx
            |__ ShowStudents.jsx
            |__ StudentDetail.jsx
            |__ StudentForm.jsx
            |__ UpdateStudent.jsx
|__ services/
      |__ teacher.js
      |__ student.js
```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Get full backend CRUD |    H     |     5 hrs      |          |        |
| Get full frontend CRUD |    H     |     3 hrs      |          |        |
| Teacher and student services files |    H     |     2 hrs      |          |        |
| Homepage funtionality |    H     |     2 hrs      |          |        |
| Landing page functionality    |    H     |     3 hrs      |          |        |
| Show students page |    H     |     6 hrs      |          |        |
| Show student details |    H     |     2 hrs      |          |        |
| New student page functionality |    H     |     2 hrs      |          |        |
| Full CSS styling |    H     |     12 hrs      |          |        |
| Carousel for teacher quotes (Post MVP) |    L     |     2.5 hrs      |          |        |
| TOTAL               |          |     39.5hrs      |          |        |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

https://lucid.app/lucidchart/b1522c2b-e8c3-48b2-b784-e145d96d252e/view?page=0_0#
![ERD Model](https://user-images.githubusercontent.com/65198477/116014501-992e6780-a603-11eb-8b03-89e2a69fd4cb.png)


<br>

***

## Post-MVP

1) Student groups buttons to group students into randomly into groups of 2, 3 4 etc.
2) Dragging feature to further manipulate groups
3) Teacher quotes carousel
4) Discipline tracker with notes
5) Points distributor

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
