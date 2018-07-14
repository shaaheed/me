const constant = {
    name: 'Sahidul Islam',
    title: '.NET Developer',
    dob: 'September 1990',
    email: 'shahidcse6@gmail.com',
    skype: 'shaaheed.bd',
    github: 'https://github.com/shaaheed?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/shaaheed-bd/',
    stackoverflow: 'https://stackoverflow.com/users/4778882/shahid',
    blogspot: 'http://learner-notes.blogspot.com/'
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
        { name: 'JavaScript', value: 65 },
        { name: 'Angular', value: 65 },
        { name: 'React', value: 60 }
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
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquid accusamus, doloribus itaque.'
    },
    {
        title: 'Angular',
        icon: 'fab fa-angular',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis consequatur dolorum.'
    },
    {
        title: 'React',
        icon: 'fab fa-react',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque ipsam, provident omnis.'
    }
]

export default constant;