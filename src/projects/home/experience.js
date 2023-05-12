import camp from './assets/camp.jpg';
import foundrySupport from './assets/foundry_support.webp';
import museumOfCandy from './assets/museum_of_candy.webp';

export const projects = [
    {
        title: 'Yelp Camp',
        description: 'The final project for The Web Developer Bootcamp Udemy course by Colt Steele. This project was the culmination of learning Express, MongoDB, middleware, schemas, routing, authentication, authorization, and encryption. Users can create camp sites and add reviews. Anyone can see the list of all camp grounds and see their location on a map. Check it out!',
        topics: ['Express', 'MongoDB', 'joi', 'JavaScript', 'HTML5', 'EJS', 'Bootstrap'],
        image: {
            src: camp,
            href: 'https://yelpcamp-8g64.onrender.com/',
            alt: 'Code'
        },
        github: 'https://github.com/JesusLegaspy/YelpCamp',
    },
    {
        title: 'Museum of Candy',
        description: 'The museum of candy site is an exercise of making a responsive web page. On wider screens, the layout has analternating patter. While on narrower screens, the pattern is preserved by aclever Bootstrap trick on changing the order. The top menu bar changes size depending on screen width. A little bit of JavaScript magic is used to transition the top menu bar color when the user scrolls the page. The page includes fonts from Google to complement the aesthetic.',
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
        },
        github: 'https://github.com/JesusLegaspy/legaspy.dev/tree/main/src/projects/candy',
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
