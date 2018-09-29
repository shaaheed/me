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
        details: 'I have been working on backend development using .NET Framework, .NET Core as well as PHP, Laravel etc.'
    },
    {
        title: 'JavaScript',
        icon: 'fab fa-js',
        details: 'I have a proven ability to build any fontend app using modern JavaScript and it\'s latest framework.'
    },
    {
        title: 'React',
        icon: 'fab fa-react',
        details: 'Have strong capability and advanced knowledge on React. Worked on several professional projects.'
    },
    {
        title: 'Angular',
        icon: 'fab fa-angular',
        details: 'I have proficiency in Angular to build professional web app. Built several projects using Angular 4, 5, Material Design etc.'
    }
]

export const timeline = {
    work: [
        {
            title: 'Software Engineer',
            company: 'Bit Mascot (Pvt) Ltd.',
            duration: 'Jul 2017 - Present, 1 yr 1 mos',
            description: [

                'Building backend application and web API using .NET Core, ASP.NET Core, EntityFramework Core, MSSQL and standard design patterns such as UnitOfWork, Repository, Service, CQRS, Mediator, Singleton, Factory etc.',

                'Building frontend web client using Node.js, Angular2+, ES6 JavaScript, jQuery etc.',

                'Maintaining existing web app, desktop (WPF) app etc.',

                'Documenting features, technical specifications and infrastructure requirements.'
            ]
        },
        {
            title: 'Junior Software Engineer',
            company: 'Bit Mascot (Pvt) Ltd.',
            duration: 'Aug 2015 - Jun 2017, 1 yr 11 mos',
            description: [

                'Developed 2D, 3D game using Unity3D game engine and C# programming language.',

                'Built varoius games to various platform such as Windows, Android, iOS, OSX using Unity3D game engine, Android Studio, XCode tools.',

                'Maintained existing iOS app, added new feature and fixed bugs using XCode, Objective-C.'

            ]
        }
    ],
    education: [
        {
            title: 'Bangladesh University of Bussiness and Technology, BUBT',
            degree: 'Bachelor\'s of Computer Science and Engineering (CSE)',
            duration: '2012 - 2015'
        },
        {
            title: 'Tangail Polytechnic Institute, Tangail',
            degree: 'Diploma in Computer Technology',
            duration: '2006 - 2010'
        },
        {
            title: 'Rampur High School, Tangail',
            degree: 'Secondary School Certificate (SSC), Science Group',
            duration: '2001 - 2006'
        }
    ]
}

export default constant;