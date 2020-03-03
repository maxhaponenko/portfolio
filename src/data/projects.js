export const projects = [
    {
        templateType: 1, // With two rows (Laptop and mobile view images)
        name: {
            main: 'QuestGround',
            additional: 'entertainment services website'
        },
        projectType: 'Commercial project',
        role: 'Co-founder, UI/UX designer, HTML/CSS coder',
        workProcess: ['Prototyping', 'UI/UX design', 'Frontend'],
        imageSrc: {
            desktopView: require('../media/images/projectsImages/qg_desktop.png'),
            mobileView: require('../media/images/projectsImages/qg_mobile.png')
        },
        description: 'More than 10 unique pages and a lot of colorfull content. All layouts developed in 3 resolutions (desktop, tablet and mobile).',
        link: {
            href: 'http://www.questground.com',
            text: 'questground.com'
        },
        stack: [
            {
                name: 'Technologies',
                items: ['Photoshop', 'Pug/Jade', 'JQuery', 'Scss', 'Bootstrap'],
            },
            {
                name: 'Workflow',
                items: ['Git', 'Trello', 'Google docs', 'Slack']
            }
        ]   
    },
    {
        templateType: 1, // With two rows (Laptop and mobile view images)
        name: {
            main: 'Press',
            additional: 'text processing SPA'
        },
        projectType: 'Pet project',
        role: 'Frontend developer',
        workProcess: ['Prototyping', 'Frontend'],
        imageSrc: {
            desktopView: require('../media/images/projectsImages/press_desktop.png'),
            mobileView: require('../media/images/projectsImages/press_mobile.png')
        },
        description: 'Upload text or file and get summarized and important information. You don`t need to read all the text to understand key sence.',
        link: null,
        stack: [
            {
                name: 'Technologies',
                items: ['React / Redux',  'Scss', 'Bootstrap', 'ES6+', 'REST API'],
            },
            {
                name: 'Workflow',
                items: ['Git']
            },
            {
                name: 'Libs',
                items: ['MDB', 'lodash']
            }
        ]    
        
    },
    // {
    //     templateType: 2, // With one row (only Laptop view image)
    //     name: {
    //         main: 'Electronics Firmware Application',
    //         additional: undefined
    //     },
    //     projectType: 'Commercial project',
    //     role: 'Frontend Developer',
    //     workProcess: ['Prototyping', 'Frontend'],
    //     imageSrc: {
    //         desktopView: require('../media/images/projectsImages/qg_desktop.png'),
    //     },
    //     description: 'More than 10 unique pages and a lot of colorfull content. All layouts developed in 3 resolutions (desktop, tablet and mobile).',
    //     link: null,
    //     stack: [
    //         {
    //             name: 'Technologies',
    //             items: ['Electron', 'React / Redux', 'Scss', 'Bootstrap'],
    //         },
    //         {
    //             name: 'Workflow',
    //             items: ['Git', 'Trello']
    //         }
    //     ]  
    // },
    {
        templateType: 2, // With one row (only Laptop view image)
        name: {
            main: '.this CV website',
            additional: undefined
        },
        projectType: 'Personal and can say commercial',
        role: 'UI/UX designer, Frontend developer',
        workProcess: ['Prototyping', 'UI/UX design', 'Frontend'],
        imageSrc: {
            desktopView: require('../media/images/projectsImages/cv_desktop.png'),
            // mobileView: require('../media/images/projectsImages/press_mobile.png')
        },
        description: '5 pages using React. Totally responsive: from 320px width devices to Full HD. Native navigation menu created with React library only.',
        link: null,
        stack: [
            {
                name: 'Technologies',
                items: ['React', 'Scss', 'Bootstrap', 'Reactstrap'],
            },
            {
                name: 'Workflow',
                items: ['Git', 'Trello']
            }
        ]
    }
]