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

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

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
![ERD Model](https://user-images.githubusercontent.com/65198477/116008309-db46b180-a5e1-11eb-9a2b-a9c5009c20c0.png)
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
