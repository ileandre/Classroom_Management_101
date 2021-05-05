# PROJECT 4 README <!-- omit in toc -->
**Deployed Site:** https://condescending-tesla-6be857.netlify.app

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
    3) Rendered data consumed from my Ruby on Rails API in my components
    4) Utilized React Router for client-side routing
    5) Full CRUD functionality (get, post, put, delete) 

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

##### Mobile/Tablet

**Landing Page**
![Mobile and Tablet Landing Page](https://user-images.githubusercontent.com/65198477/117212882-e90deb00-adc8-11eb-8298-8666fefa1852.png)

**Login Page**
![Mobile and Tablet Login Page](https://user-images.githubusercontent.com/65198477/117212978-0642b980-adc9-11eb-9ee6-8fae5a8a1180.png)

**Register Page**
![Mobile and Tablet Register Page](https://user-images.githubusercontent.com/65198477/117213095-2a05ff80-adc9-11eb-8ff3-a272ea03c106.png)

**Home Page**
![Mobile and Tablet Home Page](https://user-images.githubusercontent.com/65198477/117213145-3a1ddf00-adc9-11eb-9deb-9d0c10d35d47.png)

**Index Page**
![Mobile and Tablet Index Page](https://user-images.githubusercontent.com/65198477/117213220-53269000-adc9-11eb-8330-b0b01cfa84de.png)

**Show Page**
![Mobile and Tablet Show Page](https://user-images.githubusercontent.com/65198477/117213287-6b96aa80-adc9-11eb-9813-6554b479ae1b.png)

**Create/Update Page**
![Mobile and Tablet Creaste and Update Page](https://user-images.githubusercontent.com/65198477/117213337-7c472080-adc9-11eb-87c8-a482a7d621dd.png)

##### DESKTOP

**Landing Page**
![Desktop Landing Page](https://user-images.githubusercontent.com/65198477/117213665-e95ab600-adc9-11eb-88a1-801724c129aa.png)

**Login Page**
![Desktop Login Page](https://user-images.githubusercontent.com/65198477/117213733-ff687680-adc9-11eb-9092-df70e16f3af4.png)

**Register Page**
![Desktop Register Page](https://user-images.githubusercontent.com/65198477/117213851-24f58000-adca-11eb-8aad-6f1eb48ff1ec.png)

**Home Page**
![Desktop Home Page](https://user-images.githubusercontent.com/65198477/117213910-3b9bd700-adca-11eb-89ef-bcab346df9f2.png)

**Index Page**
![Desktop Index Page](https://user-images.githubusercontent.com/65198477/117213998-58380f00-adca-11eb-9fdb-cbe7ee65e841.png)

**Show Page**
![Desktop Show Page](https://user-images.githubusercontent.com/65198477/117214159-6b4adf00-adca-11eb-9750-c7cb89dd9b4a.png)

**Create/Update Page**
![Desktop Creaste and Update Page](https://user-images.githubusercontent.com/65198477/117214234-874e8080-adca-11eb-8aad-71a20da92cd7.png)

#### Component Tree

https://whimsical.com/classroom-management-101-QDVfdAbYAmq29cSqq7HvX3
![Component Tree](https://user-images.githubusercontent.com/65198477/117214641-2d01ef80-adcb-11eb-8348-bbca218b6c1e.png)

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
| Get full backend CRUD |    H     |     5 hrs      |     6 hrs     |    6 hrs    |
| Get full frontend CRUD |    H     |     3 hrs      |      2.5 hrs    |    2.5 hrs    |
| Teacher and student services files |    H     |     2 hrs      |    1.5 hrs      |    1.5 hrs    |
| Homepage funtionality |    H     |     2 hrs      |     1.5 hrs     |    1.5 hrs    |
| Landing page functionality    |    H     |     3 hrs      |     1.5 hrs     |    1.5 hrs    |
| Show students page |    H     |     6 hrs      |     7 hrs     |    7 hrs    |
| Show student details |    H     |     2 hrs      |     10 hrs     |    10 hrs    |
| New student page functionality |    H     |     2 hrs      |     11 hrs     |    11 hrs    |
| Full CSS styling |    H     |     12 hrs      |     10 hrs     |    10 hrs    |
| Carousel for teacher quotes (Post MVP) |    L     |     2.5 hrs      |     0 hr     |    0 hr    |
| TOTAL               |          |     39.5hrs      |     51 hrs     |    51 hrs    |

<br>

### Server (Back End)

#### ERD Model

https://lucid.app/lucidchart/b1522c2b-e8c3-48b2-b784-e145d96d252e/view?page=0_0#
![ERD Model](https://user-images.githubusercontent.com/65198477/117216588-085b4700-adce-11eb-83d0-b804405075ae.png)

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

I am proud of this code snippet because I worked on it though I had errors, and when I finally fixed the errors everything worked on the first try. This code snippet filters students by grade.

```
    const handleFilter = (filter) => {
        students.sort((a, b) => { return b.grade - a.grade })
        let studs = []
        if (filter === 'Top 5') {
            const five = students.slice(0, 5)
            setQueryStudents(five)
        } else if (filter === 'A-Student') {
            studs = students.filter(student => student.grade >= 90)
            setQueryStudents(studs)
        } else if (filter === 'B-Student') {
            studs = students.filter(student => student.grade < 90 && student.grade >= 80)
            setQueryStudents(studs)
        } else if (filter === 'C-Student') {
            studs = students.filter(student => student.grade < 80 && student.grade >= 70)
            setQueryStudents(studs)
        } else if (filter === 'D-Student') {
            studs = students.filter(student => student.grade < 70 && student.grade >= 60)
            setQueryStudents(studs)
        } else if (filter === 'F-Student') {
            studs = students.filter(student => student.grade < 60)
            setQueryStudents(studs)
        } else {
            setQueryStudents(students)
        }
    }
```

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
