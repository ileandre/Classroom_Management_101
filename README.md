# PROJECT 4 README <!-- omit in toc -->

> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details.

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

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Classroom Management 101** MVPs are as follows ...
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

   #### Personal ???
    1) Buttons for filtering by grade (top 5, A, B, C, D, F)
    2) Buttons for filtering by class (per 1, per 2, per 3, per 4, per 5 and All)
    3) 
._

<br>

### Goals ???

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies ????

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Used for front-end development._ |
|   React Router   | _Used for link and routing._ |
|  Faker   | _Used to generate fake student names._ |

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

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between your components. In other words, show which components are rendering the other components. Include a link to your component tree

https://whimsical.com/classroom-management-101-QDVfdAbYAmq29cSqq7HvX3
![Component Tree](https://user-images.githubusercontent.com/65198477/116004481-cf062880-a5d0-11eb-9492-378374ab39cb.png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

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

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Get full backend CRUD |    H     |     5 hrs      |          |        |
| Get full frontend CRUD |    H     |     3 hrs      |          |        |
| Teacher and student services files |    H     |     1.5 hrs      |          |        |
| Homepage funtionality |    H     |     1.5 hrs      |          |        |
| Landing page functionality    |    H     |     3 hrs      |          |        |
| Show students page |    H     |     6 hrs      |          |        |
| Show student details |    H     |     2 hrs      |          |        |
| New student page functionality |    H     |     2 hrs      |          |        |
| Full CSS styling |    H     |     12 hrs      |          |        |
| Carousel for teacher quotes (Post MVP) |    L     |     1.5 hrs      |          |        |
| TOTAL               |          |     35.5hrs      |          |        |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

https://lucid.app/lucidchart/b1522c2b-e8c3-48b2-b784-e145d96d252e/view?page=0_0#
![ERD Model](https://user-images.githubusercontent.com/65198477/116008309-db46b180-a5e1-11eb-9a2b-a9c5009c20c0.png)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!
> 
1) Student groups buttons to group students into randomly into groups of 2, 3 4 etc.
2) Dragging feature to further manipulate groups
3) Teacher quotes carousel
4) Discipline tracker with notes

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.


## MVP: An overview of your MVP, including the minimum, need-to-have features of the app.
  ### Client: Wire-frames, component hierarchy, component breakdown, and time-frame estimates.
    #### Libraries and Dependencies
        |     Library      | Description                                |
        | :--------------: | :----------------------------------------- |
        |      React       | _Lorem ipsum dolor sit amet, consectetur._ |
        |   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
        | React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
        |     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
        |  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |
    
    ####Wire-frames
    
    ####Component Hierarchy
    
    ####Component Breakdown
    
    ####Time-frame Estimates
    
  ### Server: Data architecture, ERD model, and API endpoint documentation.

  ### Dependencies: A full list of all libraries, frameworks, etc.



## Post-MVP: Your goals for post-MVP, including features that you would like to implement once your MVP is complete.
