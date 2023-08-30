import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


import React from "react";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Maynor",
    lastName: "Teleguario",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "Computer Scientist",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'I love coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Germany'
        },
        {
            emoji: "💼",
            text: "Software development University of Kassel"
        },
        {
            emoji: "📧",
            text: "Maynor_Teleguario@hotmail.com"
        }
    ],
    socials: [
        {
            link: "https://drive.google.com/file/d/1jTZrhm-2rS8lG0cX2h8A_5n47o8-Uxgo/view?usp=sharing",
            icon: 'fa fa-file-pdf-o',
            label: 'CV'
        },
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: <p>My name is Maynor Gustavo, and I from Guatemala. Ever since my early years, curiosity has been my driving
        force, and in the course of these recent years, I've nurtured a diverse array of skills. Among them lies the art
        of
        effective communication and seamless integration into any environment. Thus, when I ventured to Germany, it
        posed a formidable
        challenge, but one I met with unwavering determination. Over the past decade, I've been dedicated to pursuing my
        studies in Computer Science at the University of
        Kassel. This period has not only been about academic growth but also about harmonizing my studies with
        professional experience. I've concurrently engaged with
        various companies, reaping invaluable work insights and fostering novel knowledge. At present, I find myself in
        the role of a Software Developer at <a href={'https://www.comtec.eecs.uni-kassel.de/'}>ComTec University of
            Kassel</a>,
        a journey that has further ignited my profound passion for the realm of software.
        Amidst this professional journey, I also cultivate a rich personal life, where I wholeheartedly embrace my
        cherished hobbies.</p>,

    knowledge: [{
        proficientWith: ['Java', 'Javascript', 'Python', 'C#', 'C++', 'SQL', 'ABAP', 'Go'],
        exposedTo: ['Angular', 'Nodejs', 'Oracle', 'MongoDB', 'AI'],
        tools: ['Git', 'LaTeX', 'Docker', 'Visual Studio', 'JetBrains ToolBox', 'Blender', 'Unity', 'Microsoft Office'],
        frameworks: ['Vue.js', 'React']

    }]
    ,

    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'swimming',
            emoji: '🏊'
        },
        {
            label: 'Bicycle',
            emoji: '🚴'
        },

        {
            label: 'guitar',
            emoji: '🎸'
        },
        {
            label: 'travel',
            emoji: '✈'
        }
    ],

    skills: [
        {
            label: 'programming',
            emoji: '👨‍💻'
        },
        {
            label: 'problem solving',
            emoji: '🤝'
        },
        {
            label: 'effective communication',
            emoji: '📢'
        },
        {
            label: 'drawing',
            emoji: '🖍️'
        },
        {
            label: 'adaptability',
            emoji: '👩🏾‍🤝‍👨🏻'
        },
        {
            label: 'teamwork',
            emoji: '💪'
        }

    ],

    interest: [
        {
            label: 'Learning',
            emoji: '📚'
        },
        {
            label: 'Technology',
            emoji: '🤖'
        },
        {
            label: 'Health',
            emoji: '🧬'
        },
        {
            label: 'Universe',
            emoji: '🌌'
        },
        {
            label: 'Nature',
            emoji: '🌴'
        },

        {
            label: 'Animals',
            emoji: '🐢'
        },

        {
            label: 'Languages',
            emoji: '🗣️'
        },
        {
            label: 'psychology',
            emoji: '🧠'
        }
    ],


    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1,
            video: require('../vid/GS-video.mp4')

        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2,
            video: require('../vid/IMW-video.mp4')
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3,
            video: require('../vid/Fapp-video.mp4')
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4,
            video: require('../vid/LeanIX-video.mp4')
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5,
            video: require('../vid/demostrator.mp4')

        }
    ]
}