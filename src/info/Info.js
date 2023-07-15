import self from "../img/self.png"
import mock1 from "../img/mock1.png"


export let colors = ["rgb(198, 179, 141), rgb(19, 128, 133)"];


export const info = {
    firstName: "Michelle",
    lastName: "Correia",
    initials: "MC",
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🏋🏽‍♀️',
            text: 'loves working out'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Master Data Manager at Lidl US"
        },
        {
            emoji: "📧",
            text: "michelle.correia18192@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/michelleshannaa",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/michelleshanna92",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/michelle-correia-031067173",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Thank you for taking the time to explore my portfolio. As a bilingual professional fluent in both English and German, I bring a unique advantage to my work. Through my experience as a certified Full Stack Developer and my role as a Master Data Manager at Lidl US, I have developed a diverse skill set and a comprehensive understanding of data management and software development practices.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html', 'css'],
            exposedTo: ['nodejs']
        }
    ,
    hobbies: [
        {
            label: 'hiking',
            emoji: '🥾'
        },
        {
            label: 'traveling',
            emoji: '✈️'
        },
        {
            label: 'coding',
            emoji: '💻'
        },
        {
            label: 'painting',
            emoji: '🖼️'
        }
    ],
    portfolio: [ 
        {
            title: "Music for my Soul",
            live: "https://qdatcher.github.io/Music-For-My-Soul-gwBootcampProject1/", 
            source: "https://github.com/QDatcher/Music-For-My-Soul-gwBootcampProject1",
            image: mock1
        },
        {
            title: "Project 2",
            live: "",
            source: ""
        },
        {
            title: "Project 3",
            live: "",
            source: ""
        },
        {
            title: "Project 4",
            live: "",
            source: ""
        },
        {
            title: "Project 5",
            live: "",
            source: ""
        }
    ]
}