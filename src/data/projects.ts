export enum Template {
    TwoRows = 1,
    OneRow = 2,
    PhoneFrame = 3,
}

export const projects = [
    {
        templateType: Template.OneRow, // With one row (only Laptop view image)
        name: {
            main: 'Hostel',
            additional: undefined
        },
        projectType: 'Commercial project',
        role: 'UI/UX developer',
        workProcess: ['Requirements', 'UI/UX Design', 'Development'],
        imageSrc: {
            desktopView: require('../media/images/projectsImages/hostel_website.png'),
        },
        description: 'Next.js SSG website. Full cycle development, from requirements and design to code and deployment.',
        link: {
            href: 'https://ghost-hostel.com/',
            text: 'ghost-hostel.com'
        },
        stack: ['React', 'Next.js', 'TypeScript', 'Redux', 'styled-components']
    },
    {
        templateType: Template.PhoneFrame, 
        name: {
            main: 'Beep Target',
            additional: 'React Native application'
        },
        projectType: 'Commercial project',
        role: 'Software developer',
        workProcess: ['Requirements', 'UI/UX Prototyping', 'Development'],
        videoSrc: require('../media/video/app-video.mp4'),
        description: 'Bluetooth low energy application designed to control paintball targets and collect data during a gaming session.',
        link: {
            href: 'https://play.google.com/store/apps/details?id=com.beeptarget',
            text: 'play.google.com'
        },
        stack: ['React Native', 'Redux', 'Redux Thunk', 'UI Kitten',  'Ble-plx (bluetooth low energy library)', 'React Navigation', 'Redux Persist', 'React Native Reanimated', 'Custom and lightweight store for faster data dispatching'  ]
    },
    {
        templateType: Template.TwoRows, // With two rows (Laptop and mobile view images)
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
        stack: ['Photoshop', 'Pug/Jade', 'JQuery', 'Scss', 'Bootstrap']
    },
    {
        templateType: Template.TwoRows, // With two rows (Laptop and mobile view images)
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
        stack: ['React / Redux',  'Scss', 'Bootstrap', 'ES6+', 'REST API', 'MDB', 'lodash']
    },
    {
        templateType: Template.OneRow, // With one row (only Laptop view image)
        name: {
            main: 'Tests SPA',
            additional: undefined
        },
        projectType: 'Pet project (in development)',
        role: 'Frontend Developer',
        workProcess: ['Prototyping', 'Frontend'],
        imageSrc: {
            desktopView: require('../media/images/projectsImages/tests-app-desctop.png'),
        },
        description: 'Tests single page application with responsive tutorial stepper and dynamic animation. The project is developing without any css/scss files at all.',
        link: {
            href: 'https://frontend-tests.netlify.app',
            text: 'frontend-tests.netlify.app'
        },
        stack: ['React', 'Redux', 'styled-components', 'antd']
    },
    {
        templateType: Template.OneRow, // With one row (only Laptop view image)
        name: {
            main: 'this CV website',
            additional: undefined
        },
        projectType: 'Personal',
        role: 'UI/UX designer, Frontend developer',
        workProcess: ['Prototyping', 'UI/UX design', 'Frontend'],
        imageSrc: {
            desktopView: require('../media/images/projectsImages/cv_desktop.png'),
            // mobileView: require('../media/images/projectsImages/press_mobile.png')
        },
        description: '5 pages using React. Totally responsive: from 320px width devices to Full HD. Native navigation menu.',
        link: null,
        stack: ['React', 'Scss', 'Bootstrap', 'Reactstrap']
    }
]