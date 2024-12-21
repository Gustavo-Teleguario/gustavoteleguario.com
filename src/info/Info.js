import self from '../img/self.png'

import React from 'react'

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']
//export let colors = ["#FFFFFF", "#0c7ded"];
export let colorPortfolioText = ['rgb(7,157,236)']
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
  firstName: 'Gustavo',
  lastName: 'Teleguario',
  position: 'Junior Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors[1]}, ${colors[0]}, ${colors[1]})`, // don't change this either
  baseColor: colors[0],
  baseColorText: colorPortfolioText[0],

  socials: [
    {
      link:
        'https://drive.google.com/file/d/1QubgFH5OYtLlFwg2_iYd1Zuxf7N6AmmV/view?usp=sharing',
      icon: 'fa fa-file-pdf-o',
      label: 'CV',
    },
    {
      link: 'https://github.com/Gustavo-Teleguario',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://gitlab.com/Gustavo-Teleguario',
      icon: 'fa fa-gitlab',
      label: 'facebook',
    },
    {
      link:
        'https://www.linkedin.com/in/maynor-gustavo-teleguario-queche-b649ab1a8/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://www.xing.com/profile/MaynorGustavo_TeleguarioQueche/cv',
      icon: 'fa fa-xing',
      label: 'instagram',
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: (
    <p>
      {' '}
      "Hello World" my name is Gustavo Teleguario a passionate developer from{' '}
      <a
        href={
          'https://www.google.com/maps/place/Guatemala/@15.7228485,-90.2348,7z/data=!3m1!4b1!4m6!3m5!1s0x8588135036e7506b:0x35982b375b84d5bb!8m2!3d15.783471!4d-90.230759!16zL20vMDM0NV8?entry=ttu'
        }
      >
        Guatemala,{' '}
      </a>
      36 years old. Through my experiences abroad and in my home country, I have
      learned to be empathetic, open and a strong team player. During my studies
      in Computer Science at the{' '}
      <a href={'https://www.uni-kassel.de/uni/studium/informatik-bachelor'}>
        University of Kassel{' '}
      </a>
      in Germany, I gained valuable experience in software and web development,
      SAP, and IT management. In my free time, I enjoy developing new ideas and
      am known for my friendly and helpful nature.
    </p>
  ),

  knowledge: [
    {
      proficientWith: ['Java & C#', 'HTML, CSS, Javascript', 'WordPress'],
      exposedTo: ['Front & Back-End', 'Mobile Development'],
      tools: [
        'Git',
        'Gradle',
        'Visual Studio',
        'JetBrains ToolBox',
        'Blender',
        'Unreal Engine',
        'Unity',
        'Microsoft Office',
      ],
      frameworks: ['Vue.js', 'React'],
    },
  ],
  setOfSkills: [
    {
      hobbies: [
        {
          label: 'reading',
          emoji: '📖',
        },
        {
          label: 'Sports',
          emoji: '🚴',
        },

        {
          label: 'guitar',
          emoji: '🎸',
        },
        {
          label: 'travel',
          emoji: '✈',
        },
      ],

      skills: [
        {
          label: 'programming',
          emoji: '👨‍💻',
        },
        /*  {
                label: 'problem solving',
                emoji: '🤝'
            },*/
        {
          label: 'computer repair technician',
          emoji: '🖥️',
        },
        /* {
          label: 'hand soldering',
          emoji: '⚡',
        },*/
        {
          label: 'Trilingual (Spanish,German,English)',
          emoji: '📢',
        },
        {
          label: 'drawing',
          emoji: '🖍️',
        },
        /* {
                label: 'adaptability',
                emoji: '👩🏾‍🤝‍👨🏻'
            },*/
        /*{
                label: 'teamwork',
                emoji: '💪'
            }*/
      ],

      interest: [
        /* {
                label: 'Learning',
                emoji: '📚'
            },*/
        {
          label: 'Technology',
          emoji: '🤖',
        },
        /*{
                label: 'Health',
                emoji: '🧬'
            },*/
        /* {
                label: 'Universe',
                emoji: '🌌'
            },*/
        {
          label: 'Languages',
          emoji: '🗣️',
        },
        /* {
                label: 'Nature',
                emoji: '🌴'
            },*/

        /*{
                label: 'Animals',
                emoji: '🐢'
            },*/

        /* {
                label: 'psychology',
                emoji: '🧠'
            }*/
      ],
    },
  ],

  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'Dose rate meter with Teletector',
      //live: "https://github.com/Gustavo-Teleguario", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source:
        'https://drive.google.com/file/d/1BLt2yOL3ranKSn_CSH41_49F38kTFHWs/view?usp=sharing', // this should be a link to the **repository** of the project, where the code is hosted.
      videoLink:
        'https://www.youtube.com/embed/93BKsyBjQG4?si=JXUMDpPBZ_tqNb23',
      image:
        'https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg',
      hRef: 'https://unrealengine.com/',
      bio: (
        <p>
          As part of a university project I developed a computer graphics
          simulation using Unreal Engine as the foundation. The project's
          primary objective was to create a graphical simulation of a
          non-existing device, a Dose rate Meter Device with Teletector,
          designed to detect photon radiation in various scenarios such as
          X-rays radiation, Tube radio, gamma radiation, non-ionizing radiation,
          alpha, and beta radiation. To achieve this, I utilized Blender to
          create the necessary 3D models. The simulation aimed to provide
          viewers with an immersive experience, allowing them to learn about the
          appearance and functionality of such a device. Through this project,
          users could gain valuable insights into the use and importance of Dose
          rate meter tools in various radiation detection scenarios
        </p>
      ),
    },
    {
      title: "Firefighter's Quiz",
      //live: "https://github.com/Gustavo-Teleguario",
      source: 'https://gitlab.com/Gustavo-Teleguario/abschlussprojektimw',
      videoLink:
        'https://www.youtube.com/embed/I9yv1PGS5v0?si=87nby1uqL4sBe2sM',
      image: 'https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg',
      hRef: 'https://unity.com/',
      bio: (
        <p>
          As part of a university project, I developed a computer graphics
          project at university using Unity and C# as the primary tools. The
          project's main objective was to create a quiz app for smartphones that
          incorporated essential 3D elements. Specifically, the project aimed to
          develop a firefighting quiz focusing on extinguishing agents and
          procedures in a 3D environment. Users were presented with various 3D
          fire scenarios and related quiz questions, enhancing their
          understanding of firefighting processes. This interactive approach
          provided users with valuable insights into fire extinguishing methods
          and techniques
        </p>
      ),
    },
    {
      title: 'Context Awarenes -Fitness App',
      //live: "https://github.com/Gustavo-Teleguario", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source:
        'https://drive.google.com/file/d/1Q0-klKFigFucEM4S95wYB2LrVKT7a21L/view?usp=sharing', // this should be a link to the **repository** of the project, where the code is hosted.
      videoLink:
        'https://www.youtube.com/embed/snLHXk3i5zA?si=kOABEDl0GWwQYkg2',
      image:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg',
      hRef: 'https://www.android.com/intl/de_de/',
      bio: (
        <p>
          As part of a university project, I developed an Android app with Java
          for smartphones. This app had two main tasks: running sessions and
          counting pull-ups. The app included important features such as user
          authentication, a user-friendly home, real-time geolocation for
          accurate step counting for running, and a workout results. It provided
          users with a new experience for tracking their fitness activities and
          progress.
        </p>
      ),
    },
    {
      title: 'Custom Report SAP-LeanIX',
      //live: "https://github.com/Gustavo-Teleguario",
      source:
        'https://github.com/Gustavo-Teleguario/Network-Graph-Custom-Report-',
      videoLink:
        'https://www.youtube.com/embed/vxghGxuAWac?si=O1RY_O2JI0MOjze-',
      image: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
      hRef: 'https://vuejs.org/',
      bio: (
        <p>
          Custom reports are a great way for analyzing and communicating
          Enterprise Architecture insights of some organization in an effective
          way. This small custom report aims to show the relationships that
          exist within some LeanIX Meta Model or Fact Sheet types, such as
          Application and their respective subtypes or another Fact Sheet type.
          In some cases, it can be a bit complex to visualize these
          relationships, Therefore, this custom report was created in a graph
          format to facilitate visualization of these connection.
        </p>
      ),
    },
    /*{
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
