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
            laptopView: require('../media/images/companiesLogos/logo_transferroom.png'),
            mobileView: require('../media/images/companiesLogos/logo_transferroom.png')
        },
        description: 'More than 10 unique pages and a lot of colorfull content. All layouts developed in 3 resolutions (desktop, tablet and mobile).',
        link: {
            href: 'http://www.questground.com',
            text: 'questground.com'
        },
        stack: {
            technologies: ['Photoshop', 'Pug/Jade', 'JQuery', 'Scss', 'Bootstrap'],
            workflow: ['Git', 'Trello', 'Google docs', 'Slack']
        }  
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
            laptopView: require('../media/images/companiesLogos/logo_transferroom.png'),
            mobileView: require('../media/images/companiesLogos/logo_transferroom.png')
        },
        description: 'Upload text or file and get summarized and important information. You don`t need to read all the text to understand key sence.',
        link: null,
        stack: {
            technologies: ['React / Redux',  'Scss', 'Bootstrap', 'ES6+', 'REST API'],
            workflow: ['Git'],
            libs: ['MDB', 'lodash']
        }  
    },
    {
        templateType: 1, // With one row (only Laptop view image)
        name: {
            main: 'Electronics Firmware Application',
            additional: undefined
        },
        projectType: 'Commercial project',
        role: 'Frontend Developer',
        workProcess: ['Prototyping', 'Frontend'],
        imageSrc: {
            laptopView: require('../media/images/companiesLogos/logo_transferroom.png')
        },
        description: 'More than 10 unique pages and a lot of colorfull content. All layouts developed in 3 resolutions (desktop, tablet and mobile).',
        link: null,
        stack: {
            technologies: ['Electron', 'React / Redux', 'Scss', 'Bootstrap'],
            workflow: ['Git', 'Trello']
        }  
    },
    {
        templateType: 1, // With one row (only Laptop view image)
        name: {
            main: '.this CV website',
            additional: undefined
        },
        projectType: 'Commercial project',
        role: 'Co-founder, UI/UX designer, HTML/CSS coder',
        workProcess: ['Prototyping', 'UI/UX design', 'Frontend'],
        imageSrc: {
            laptopView: require('../media/images/companiesLogos/logo_transferroom.png')
        },
        description: 'More than 10 unique pages and a lot of colorfull content. All layouts developed in 3 resolutions (desktop, tablet and mobile).',
        link: null,
        stack: {
            technologies: ['React / Redux', 'Scss', 'Bootstrap'],
            workflow: ['Git', 'Trello']
        }  
    },
]