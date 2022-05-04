const projects = [
    {
        id: 1,
        title: 'Chores to Do',
        description: 'This application addresses the issue many parents face when trying to teach their children about responsibilty, accountabilty and rewards are earned through hard work and setting goals.  The application is essentially a tool a parent can use to set up a list of tasks or chores for the child and allocates a value to the chore.  The parent also sets up the child\'s user access and can set a goal or total reward value. When the child completes the chore they are able to log in and mark the task as done/finished which is when they earn their reward.  The child can track the rewards they earn to the goal that has been set up and once they reach the target reward/goal the parents are then able to give the child the treat they earned.  The "rewards" are selected by the parents and child, so for example an older child or teenager may elect to earn money while a younger child may want to earn stars/badges etc.',
        image: {
            picture: './chores.jpg',
            width: 408,
            height: 497
        },
        gitlink: 'https://github.com/fubzee/Chorestodo', 
        deployedlink:  'https://chorestodo.herokuapp.com/',
        linkname: "ChoresToDo",
        tech: [
            {
            type: 'HTML',
            icon: '<span class="fa-li"><i class="fa-solid fa-check-square"></i></span>fa-brands fa-html'
            },
            {
            type: 'CSS',
            icon: '<i class="fa-brands fa-css3-alt"></i>'
            },
            {
            type: 'Handlebars',
            icon: '<i class="fa-solid fa-code-branch"></i>'
            },
            {
            type: 'JavaScript',
            icon: '<i class="fa-brands fa-css3-alt"></i>'
            },
            {
            type: 'ExpressJS',
            icon: '<i class="fa-solid fa-code-branch"></i>'
            },
            {
            type: 'MySQL',
            icon: '<i class="fa-solid fa-code-branch"></i>"'
            },
            {
            type: 'Sequelize',
            icon: '<i class="fa-solid fa-code-branch"></i>'
            },
            {
            type: 'Insomnia',
            icon: '<i class="fa-solid fa-code-branch"></i>'
            }
        ]
    },
    {
        id: 2,
        title: 'Weather Search',
        description: 'Using a 3rd party API to collect data, in this case data about the weather for a location you "Search". Save the Searched location for future searches and display the weather details for the current day and also display a five day weather forecast, highlighting the severity of the UV Index. Saved locations are stored in local storage but only the last ten searches are presented back for another Search. Click the button to toggle the display of the forecasted weather and ensured that any city that was entered for Searching was not saved to the top ten Searches again.  The solution makes use of the open-weather-api to source its data.', 
        image: {
            picture: './weather2.jpg',
            width: '336',
            height: '318'
        },
        gitlink: 'https://github.com/fubzee/W6HW-Weather-API',
        deployedlink: 'https://fubzee.github.io/W6HW-Weather-API/',
        linkname: "https://fubzee.github.io/W6HW-Weather-API/",
        tech: [
            {
            type: 'HTML',
            icon: 'html'
            },
            {
            type: 'CSS',
            icon: '<i class="fa-brands fa-css3-alt"></i>'
            },
            {
            type: 'JavaScript',
            icon: '<i class="fa-solid fa-code-branch"></i>'
            },
        ]
    },
    {
        id: 3,
        title: 'banana-finder',
        description: 'In a group define a "real world problem" and then build an application that solves that problem.  This assignemt introduced the concept of a "real working environment" where multiple people contributed in a collborative way to the solution. In this project I assumed the role of the project lead and contributed to the code by building the freshness meter - check it out ! ... we wanted to solve the annoying scenario where you can remember a Lyric or line from a song but cannot recall the title of the song ..... and that is where <mark>BANANA_FINDER</mark> will help.', 
        image: {
            picture: './bananafinder1.jpg',
            width: '406',
            height: '283'
        },
        gitlink: 'https://github.com/fubzee/banana-finder/',
        deployedlink: 'https://fubzee.github.io/banana-finder/',
        linkname: 'https://fubzee.github.io/banana-finder/',
        tech: [
            {
            type: 'HTML',
            icon: '<i class="fa-brands fa-html5"></i>'
            },
            {
            type: 'CSS',
            icon: '<i class="fa-brands fa-css3-alt"></i>'
            },
            {
            type: 'JavaScript',
            icon: '<i class="fa-solid fa-code-branch"></i>'
            },
        ]
    
    },
    {
        id: 4,
        title: 'Event Calendar',
        description: 'Build an application that captures the events for a person and save to local storage.  For each hour of the day in the event the calendar indicates with diffent coulours the current time, past and present time The app features dynamically updated HTML and CSS powered by JavaScript and makes use of the moment.js library',
        image: {
            picture: './event1.jpg',
            width: '447',
            height: '390'
        },
        gitlink: 'https://github.com/fubzee/W5HW-Event-Calendar/', 
        deployedlink:  'https://fubzee.github.io/W5HW-Event-Calendar/',
        linkname: 'https://fubzee.github.io/W5HW-Event-Calendar/',
        tech: [
            {
            type: 'HTML',
            icon: '<i class="fa-brands fa-html5"></i>'
            },
            {
            type: 'CSS',
            icon: '<i class="fa-brands fa-css3-alt"></i>'
            },
            {
            type: 'JavaScript',
            icon: '<i class="fa-brands fa-css3-alt"></i>'
            },
        ]
    },
    {
        id: 5,
        title: 'Timed Quiz',
        description: 'Build a timed coding quiz with multiple-choice questions. This app will run in the browser and has a clean, polished, and responsive user interface.  The app features dynamically updated HTML and CSS powered by JavaScript',
        image: {
            picture:'./quiz1.jpg',
            width: '341',
            height: '334'
        },
        gitlink: 'https://github.com/fubzee/W4hW-TimedQuiz/', 
        deployedlink:  'https://fubzee.github.io/W4hW-TimedQuiz/',
        linkname: 'https://fubzee.github.io/W4hW-TimedQuiz/',
        tech: [
            {
            type: 'HTML',
            icon: '<i class="fa-brands fa-html5"></i>'
            },
            {
            type: 'CSS',
            icon: '<i class="fa-brands fa-css3-alt"></i>'
            },
            {
            type: 'JavaScript',
            icon: '<i class="fa-brands fa-css3-alt"></i>'
            },
        ]
    },
    {
        id: 6,
        title: 'Password Generator',
        description: 'Build a password generator based on criteria selected by the User.  The UI was provided as part of this assignment. The application uses prompts to determine the criteria required to generate a password matching the criteria selected. The main purpose of this assignment was the introduction of Java Script',
        image: {
            picture:'./pw-gen1.jpg',
            width: '432',
            height: '322'
        },
        gitlink: 'https://github.com/fubzee/W3HW-Password-Generator/', 
        deployedlink:  'https://fubzee.github.io/W3HW-Password-Generator/',
        linkname: 'https://fubzee.github.io/W3HW-Password-Generator/',
        tech: [
            {
            type: 'HTML',
            icon: '<i class="fa-brands fa-html5"></i>'
            },
            {
            type: 'CSS',
            icon: '<i class="fa-brands fa-css3-alt"></i>'
            },
            {
            type: 'JavaScript',
            icon: '<i class="fa-brands fa-css3-alt"></i>'
            },
        ]
    },
    // {
    //     id: **increment +1 here**
    //     title: '',
    //     description: '',
    //     image: {
    //          picture: '',
    //          width: '',
    //          height: ''
    //     },
    //     gitlink: '', 
    //     deployedlink:  '',
    //     tech: [
    //         {
    //         type: '',
    //         icon: '""'
    //         },
    //         {
    //         type: '',
    //         icon: '""'
    //         },
    //         {
    //         type: '',
    //         icon: '""'
    //         },
    //     ]
    // }
]
export default projects;