import code from './assets/code.webp';
import foundrySupport from './assets/foundry_support.webp';
import museumOfCandy from './assets/museum_of_candy.webp';

export const projects = [
    {
        title: 'Museum of Candy',
        description: 'The museum of candy site is an exercise of making a responsive web page. On wider screens, the layout has analternating text - picture patter.While on narrower screens, the text - picture pattern is preserved by aclever Bootstrap trick on changing the order. The top menu bar changes size depending on screen width. A little bit of JavaScript magic is used to transition the top menu bar color when the user scrolls the page. The page includes fonts from Google to complement the aesthetic.',
        topics: [
            'HTML5',
            'Bootstrap',
            'CSS',
            'JavaScript'
        ],
        image: {
            src: museumOfCandy,
            href: '/candy',
            alt: 'alt'
        }
    },
    {
        title: 'Future Project',
        description: 'A future project will focus on using JavaScript to provide user feedback on web elements. The page will edit the DOM with a mix of vanilla JavaScript and some JQuery functions.',
        topics: [],
        image: {
            src: code,
            href: '',
            alt: 'Code'
        }
    }
]


export const experience = [
    {
        title: 'Foundry Support Portal',
        description: 'I was the main project manager and developer for maintaining the Foundry customer support website. I assigned bug fixes and feature requests to two other web developers. I worked on various projects that are accessible via login such as downloads buttons and suggested articles React component. I also improved the performance of the website by reducing the number of REST calls by over 90%. The last major project was modernizing the website by introducing Webpack, Gulp, and Node Package Manager to streamline development.',
        topics: [
            'JavaScript',
            'React',
            'Gulp',
            'NPM',
            'Webpack',
            'HTML',
            'CSS'
        ],
        image: {
            src: foundrySupport,
            href: 'https://support.foundry.com/hc/en-us',
            alt: 'Foundry Support'
        }
    }
]
