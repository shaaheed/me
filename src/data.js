// import * as func from './functions'

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

export const timeline = {
    work: [
        {
            title: 'Software Engineer',
            company: 'Bit Mascot',
            duration: 'Jul 2017 - Present, 1 yr 1 mos',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quas harum commodi enim distinctio, officia voluptates quia praesentium ratione aliquam facilis repellat est eaque exercitationem explicabo laborum, incidunt, in minus?'
        },
        {
            title: 'Junior Software Engineer',
            company: 'Bit Mascot',
            duration: 'Aug 2015 - Jun 2017, 1 yr 11 mos',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel illum reiciendis aspernatur aliquam voluptate molestias id nisi perspiciatis blanditiis'
        }
    ],
    education: [
        {
            title: 'Bangladesh University of Bussiness and Technology, BUBT',
            degree: 'Bachelor\'s of Computer Science and Engineering (CSE)',
            duration: '2012 - 2015',
            description: 'Lorem ipsum dolor Illo est velit ipsa aperiam alias inventore iste qui eligendi.'
        },
        {
            title: 'Tangail Polytechnic Institute, Tangail',
            degree: 'Diploma in Computer Technology',
            duration: '2006 - 2010',
            description: 'Lorem ipsum Ullam, quos eos officia, repellendus, quae.'
        },
        {
            title: 'Rampur High School, Tangail',
            degree: 'Secondary School Certificate (SSC), Science Group',
            duration: '2001 - 2006',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
    ]
}

export default constant;