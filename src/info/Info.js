import self from "../img/self.png"


import React from "react";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

//export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let colors = ["#FFFFFF", "#0c7ded"];
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
    gradient: `-webkit-linear-gradient(180deg, ${colors[1]}, ${colors[0]}, ${colors[1]})`, // don't change this either
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
            link: "https://drive.google.com/file/d/12hRdJVFpxfEtYAipKuClPwxxy9-Myq57/view?usp=sharing",
            icon: 'fa fa-file-pdf-o',
            label: 'CV'
        },
        {
            link: "https://github.com/Gustavo-Teleguario",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/maynor-gustavo-teleguario-queche-b649ab1a8/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.xing.com/profile/MaynorGustavo_TeleguarioQueche/cv",
            icon: 'fa fa-xing',
            label: 'instagram'
        },
        {
            link: "https://gitlab.com/Gustavo-Teleguario",
            icon: 'fa fa-gitlab',
            label: 'facebook'
        },


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
        tools: ['Git', 'LaTeX', 'Docker', 'Visual Studio', 'JetBrains ToolBox', 'Blender', 'Unity', 'SAPUI5', 'Microsoft Office'],
        frameworks: ['Vue.js', 'React']

    }]
    ,

    setOfSkills:[{
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
            label: 'computer repair technician',
            emoji: '🖥️',
        },
        {
            label: 'hand soldering',
            emoji: '⚡',
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
    }],


    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Dose rate meter with Teletector",
            //live: "https://github.com/Gustavo-Teleguario", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://drive.google.com/file/d/1BLt2yOL3ranKSn_CSH41_49F38kTFHWs/view?usp=sharing", // this should be a link to the **repository** of the project, where the code is hosted.
            videoLink: "https://www.youtube.com/embed/93BKsyBjQG4?si=JXUMDpPBZ_tqNb23",
            image: "https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg",
            hRef: "https://unrealengine.com/",
            bio: <p>As part of a university project I developed a computer graphics simulation using Unreal Engine as
                the foundation.
                The project's primary objective was to create a graphical simulation of a non-existing device, a Dose
                rate Meter Device
                with Teletector, designed to detect photon radiation in various scenarios such as X-rays radiation, Tube radio, gamma radiation,
                non-ionizing radiation, alpha, and beta radiation.
                To achieve this, I utilized Blender to create the necessary 3D models. The simulation aimed to provide
                viewers with an immersive experience,
                allowing them to learn about the appearance and functionality of such a device. Through this project,
                users could gain valuable
                insights into the use and importance of Dose rate meter tools in various radiation detection
                scenarios</p>,


        },
        {
            title: "Firefighter's Quiz",
            //live: "https://github.com/Gustavo-Teleguario",
            source: "https://drive.google.com/file/d/1Wc5PAv-rNOI0pBeTz3H9ToykO9Y1er4p/view?usp=sharing",
            videoLink: "https://www.youtube.com/embed/I9yv1PGS5v0?si=X6_kAIS6A7hi9N3-",
            image: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
            hRef: "https://unity.com/",
            bio: <p>As part of a university project, I developed a computer graphics project at university using Unity and C# as the primary tools.
                The project's main objective was to create a quiz app for smartphones that incorporated essential 3D elements.
                Specifically, the project aimed to develop a firefighting quiz focusing on extinguishing agents and procedures in a
                3D environment. Users were presented with various 3D fire scenarios and related quiz questions, enhancing their understanding
                of firefighting processes. This interactive approach provided users with valuable insights into fire extinguishing methods and
                techniques</p>,

        },
        {
            title: "Context Awarenes -Fitness App",
            //live: "https://github.com/Gustavo-Teleguario", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://drive.google.com/file/d/1Q0-klKFigFucEM4S95wYB2LrVKT7a21L/view?usp=sharing", // this should be a link to the **repository** of the project, where the code is hosted.
            videoLink: "https://www.youtube.com/embed/snLHXk3i5zA?si=kOABEDl0GWwQYkg2",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
            hRef: "https://www.android.com/intl/de_de/",
            bio: <p>As part of a university project, I developed an Android app with Java for smartphones.
                This app had two main tasks: running sessions and counting pull-ups.
                The app included important features such as user authentication, a user-friendly home,
                real-time geolocation for accurate step counting for running, and a workout results.
                It provided users with a new experience for tracking their fitness activities and progress.</p>,

        },
        /* {
             title: "Custom Report LeanIX",
             //live: "https://github.com/Gustavo-Teleguario",
             source: "https://www.youtube.com/@junkaiushi/videos",
             videoLink: "https://www.youtube.com/embed/9Q6zqqhzjJo?si=YOeEqcD12gqsBdT1",
             image: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
             hRef: "https://vuejs.org/",
             bio: <p>This is a small Biography about my Custom Report made with the Framework Vue.js and JavaScrip</p>,

         },
         {
             title: "Software Engineering I",
             //live: "https://github.com/Gustavo-Teleguario",
             source: "https://www.youtube.com/@junkaiushi/videos",
             videoLink: "https://www.youtube.com/embed/9Q6zqqhzjJo?si=YOeEqcD12gqsBdT1",
             image: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
             hRef: "https://www.java.com/de/",
             bio: <p>This is a small Biography about a small Program made with Java</p>,
         },
         {
             title: "My own Portfolio",
             //live: "https://github.com/Gustavo-Teleguario",
             source: "https://www.youtube.com/@junkaiushi/videos",
            videoLink: "https://www.youtube.com/embed/9Q6zqqhzjJo?si=YOeEqcD12gqsBdT1",
             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
             hRef: "https://react.dev/",
             bio: <p>This is a small Biography about my Own Portfolio made with the Framework React and JavaScrip</p>,
         },
         {
             title: "3D Interior eines Notarzwagen",
             //live: "https://github.com/Gustavo-Teleguario",
             source: "https://www.youtube.com/@junkaiushi/videos",
             videoLink: "https://www.youtube.com/embed/9Q6zqqhzjJo?si=YOeEqcD12gqsBdT1",
             image: "https://download.blender.org/branding/community/blender_community_badge_white.svg",
             hRef: "https://www.blender.org/",
             bio: <p>This is a small Biography about a 3D-Model made with the Blender</p>,
         },*/
    ],
}