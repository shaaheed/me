const constant = {
    name: 'Sahidul Islam',
    title: 'Software Engineer',
    dob: 'September 1990',
    email: 'shahidcse6@gmail.com',
    skype: 'shaaheed.bd',
    github: 'https://github.com/shaaheed?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/shaaheed-bd/',
    stackoverflow: 'https://stackoverflow.com/users/4778882/shahid',
    blogspot: 'http://learner-notes.blogspot.com/',
}

export const infoForLeft = [
    { name: 'Name', value: constant.name },
    { name: 'Birthday', value: constant.dob },
    { name: 'Job', value: constant.title },
    { name: 'Email', value: constant.email },
    { name: 'Skype', value: constant.skype }
];

export const skills = {
    frontend: [
        { name: 'JavaScript', value: 83 },
        { name: 'Angular', value: 80 },
        { name: 'React', value: 85 }
    ],
    backend: [
        { name: 'C#', value: 70 },
        { name: 'ASP.NET MVC WEB API', value: 70 }
    ]
}

export const services = [
    {
        title: 'Backend Development',
        icon: 'fas fa-code',
        details: 'I have been working on backend development for 2+ years using .NET family.'
    },
    {
        title: 'JavaScript',
        icon: 'fab fa-js',
        details: 'I have a proven ability to build any fontend app using modern JavaScript and it\'s hotest framework!'
    },
    {
        title: 'React',
        icon: 'fab fa-react',
        details: 'Have strong capability and advanced knowledge on React. Worked on several professional project. This site is also built on React!'
    },
    {
        title: 'Angular',
        icon: 'fab fa-angular',
        details: 'I have proficiency in Angular to build professional web app. Built several project using Angular 4, 5, Material design etc.'
    }
]

export default constant;