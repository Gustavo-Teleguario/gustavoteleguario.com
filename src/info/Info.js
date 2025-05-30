import self from '../img/self.png'
import GSBild from '../img/GSBild.png'
import DPBild from '../img/3DPBild.PNG'
import RePor from '../img/RePor.png'
import DemBild from '../img/Dem.PNG'
import FWQuiz from '../img/FWQuiz.png'
import FApp from '../img/FApp.png'
import ALIX from '../img/ALeanIX.png'
import React from 'react'


export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']
//export let colors = ["#FFFFFF", "#0c7ded"];
export let colorPortfolioText = ['rgb(7,157,236)']


export const info = {
    firstName: 'Gustavo',
    lastName: 'Teleguario',
    position: 'IT Specialist – Application Development',
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors[1]}, ${colors[0]}, ${colors[1]})`, // don't change this either
    baseColor: colors[0],
    baseColorText: colorPortfolioText[0],

    socials: [
        {
            link:
                'https://drive.google.com/file/d/1gkIBbUh6j5FOYD9EyQbVDFhaVR_YfVOi/view?usp=sharing',
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
            label: 'GitLab',
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
            label: 'Xing',
        },

    ],
    bio: (
        <p style={{textAlign: 'justify'}}>
            {' '}
            "Hello World" my name is Gustavo, a passionate developer from{' '}
            <a
                href={
                    'https://www.google.com/maps/place/Guatemala/@15.7228485,-90.2348,7z/data=!3m1!4b1!4m6!3m5!1s0x8588135036e7506b:0x35982b375b84d5bb!8m2!3d15.783471!4d-90.230759!16zL20vMDM0NV8?entry=ttu'
                }
            >
                Guatemala,{' '}
            </a>
            Through my international professional journey, I have learned to be empathetic, open-minded, and a true team
            player.

            My enthusiasm lies in software development and IT support, fields in which I continuously strive
            to grow and improve. Thanks to my studies in computer science at the{' '}
            <a href={'https://www.uni-kassel.de/uni/studium/informatik-bachelor'}>
                University of Kassel{' '}
            </a>
            in Germany and my professional experience in various companies, I have been able to deepen my
            skills and live out my passion in real-world settings.
            I value exchanging ideas with other professionals and am always eager to learn new things. In my free time,
            I enjoy developing new
            ideas and pursuing my favorite hobbies.
        </p>
    ),

    knowledge: [
        {
            proficientWith: ['Java & C#', 'React & Spring Boot', 'IT-Support'],
            exposedTo: ['Microservices', 'Front & Back-End', 'AI'],
            tools: [
                'Git',
                'GitHub',
                'Docker',
                'Visual Studio Code',
                'JetBrains IDEs', 'MySQL',
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
                    label: 'drawing',
                    emoji: '🖍️',
                }
            ],

            skills: [
                {
                    label: 'programming',
                    emoji: '👨‍💻',
                },
                {
                    label: 'IT-Support',
                    emoji: '🖥️',
                },

                {
                    label: 'Spanish, German ,English',
                    emoji: '📢',
                },
                {
                    label: 'Social Competence',
                    emoji: '🤝',
                },

            ],

            interest: [
                {
                    label: 'Technology',
                    emoji: '🤖',
                },

                {
                    label: 'Languages',
                    emoji: '🗣️',
                },

                {
                    label: 'research',
                    emoji: '🔬'
                }
            ],
        },
    ],

    portfolio: [
        {
            title: 'React Portfolio',
            source:
                'https://github.com/Gustavo-Teleguario/gustavoteleguario.com/tree/main',
            videoLink:
                'https://www.gustavoteleguario.com',

            mainImage: RePor,

            image: [
                'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
                'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
            ],
            hRef: 'https://unrealengine.com/',
            bio: (
                <p>

                </p>
            ),
        },
        {
            title: 'Fitness App',
            source:
                'https://drive.google.com/file/d/1Q0-klKFigFucEM4S95wYB2LrVKT7a21L/view?usp=sharing',
            videoLink:
                'https://www.youtube.com/embed/snLHXk3i5zA?si=kOABEDl0GWwQYkg2',
            mainImage: FApp,
            image: [
                'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg',
                //java icon
                'https://www.vectorlogo.zone/logos/java/java-icon.svg',
            ],
            hRef: 'https://www.android.com/intl/de_de/',
            bio: (
                <p>

                </p>
            ),
        },
        {
            title: "Firefighter's Quiz App",
            //live: "https://github.com/Gustavo-Teleguario",
            source: 'https://github.com/Gustavo-Teleguario/Firefighter-Quiz-App',
            videoLink:
                'https://www.youtube.com/embed/I9yv1PGS5v0?si=87nby1uqL4sBe2sM',
            mainImage: FWQuiz,
            image: [
                'https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg',
                'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
            ],
            hRef: 'https://unity.com/',
            bio: (
                <p>

                </p>
            ),
        },

        {
            title: 'Demonstrator',
            source:
                'https://github.com/Gustavo-Teleguario',
            videoLink:
                'https://www.youtube.com/@gustavoteleguario',
            mainImage: DemBild,
            image: [
                //react icon
                'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
                //javascript icon
                'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                //icon java
                'https://www.vectorlogo.zone/logos/java/java-icon.svg',
            ],

            hRef: 'https://unrealengine.com/',
            bio: (
                <p>

                </p>
            ),
        },
        {
            title: '3D Interior Car',
            source:
                'https://drive.google.com/file/d/1BLt2yOL3ranKSn_CSH41_49F38kTFHWs/view?usp=sharing',
            videoLink:
                'https://www.youtube.com/embed/93BKsyBjQG4?si=JXUMDpPBZ_tqNb23',
            mainImage: DPBild,
            image: [

                'https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg',
                'https://www.vectorlogo.zone/logos/blender/blender-icon.svg',
            ],
            hRef: 'https://unrealengine.com/',
            bio: (
                <p>

                </p>
            ),
        },

        {
            title: 'Dose rate meter with Teletector',
            //live: "https://github.com/Gustavo-Teleguario", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source:
                'https://drive.google.com/file/d/1BLt2yOL3ranKSn_CSH41_49F38kTFHWs/view?usp=sharing', // this should be a link to the **repository** of the project, where the code is hosted.
            videoLink:
                'https://www.youtube.com/embed/93BKsyBjQG4?si=JXUMDpPBZ_tqNb23',
            mainImage: GSBild,
            image: [
                'https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg',
                'https://www.vectorlogo.zone/logos/blender/blender-icon.svg',
            ],

            hRef: 'https://unrealengine.com/',
            bio: (
                <p>

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
            mainImage: ALIX,
            image: [
                'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
                'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                //html icon

                'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg',
            ],
            hRef: 'https://vuejs.org/',
            bio: (
                <p>

                </p>
            ),
        },
    ],
}
