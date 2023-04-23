
export const StaticProjects = [

    {
        _id: "6324436670f45b99baf86cf",
        title: "Plateforme d'offre de logement pour étudiants",
        type: ["Frontend", "Backend"],
        tools: ["SpringBoot", "Hibernate", "Docker", "MySQL"],
        view_link: null,
        code_link: null,
        description:
          "Search bit est une application web qui sert d'intermédiaire entre les familles d'accueil et les personnes qui recherchent un logement pour quelques jours à un prix raisonnable. ",
        thumbnail: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        details:
          '## How does it work?\r\n- You can write your code in the editor tab; the view is displayed in real time.\r\n- You can see the corresponding html code by clicking the "View HTML code" button.\r\n-You can then umnify the html code by following the link after clicking on "Unminify" button.',
        __v: 0,
        importance: 5,
        see: true,
        alt:
          "Search bit est une application web qui sert d'intermédiaire entre les familles d'accueil et les personnes qui recherchent un logement pour quelques jours à un prix raisonnable.",
        
      },
  {
    _id: "6324436670f45b99baf86acf",
    title: "Markdown Previewer",
    type: ["Frontend"],
    tools: ["HTML", "CSS", "JavaScript"],
    view_link: "https://codepen.io/godwilldev/full/JjLPBeP",
    code_link: "https://github.com/GodWilldev/fcc-markdown-previewer",
    description:
      "This project is an online convertor of a markdown script into html code.\r\nIt is also a previewer of an markdown script.\r\nIt uses marked.js library.",
    thumbnail: "https://i.ibb.co/BLphJB5/image-2022-09-16-112545431.png",
    details:
      '## How does it work?\r\n- You can write your code in the editor tab; the view is displayed in real time.\r\n- You can see the corresponding html code by clicking the "View HTML code" button.\r\n-You can then umnify the html code by following the link after clicking on "Unminify" button.',
    __v: 0,
    importance: 5,
    see: true,
  },
  {
    _id: "63249b3f70f45b99baf86ad7",
    title: "Virtual Calculator",
    type: ["Frontend"],
    tools: ["HTML", "CSS", "JavaScript"],
    view_link: "https://codepen.io/godwilldev/full/PoRpRzY",
    code_link: "https://github.com/GodWilldev/fcc-virtual-calculator",
    description:
      "This project is an online virtual calculator coded with JavaScript.\r\nIt can compute basic operations like Addition, Subtraction, Multiplication and Division.",
    thumbnail: "https://i.ibb.co/Xkf3mY6/calculatorpng.png",
    details: " ",
    __v: 0,
    importance: 5,
    see: true,
  },
  {
    _id: "63249f3770f45b99baf86ad9",
    title: "Random Quote Machine",
    type: ["Frontend"],
    tools: ["ReactJs", "HTML", "CSS"],
    view_link: "https://codepen.io/godwilldev/full/ExQqxMV",
    code_link: "https://github.com/GodWilldev/Random-Quote-Machine",
    description: "This project is a random quote Generetor.",
    thumbnail: "https://i.ibb.co/FBCrVKW/random-quotes-machine.png",
    details:
      ' ## How does it Work?\n- You can generate a random quote by clicking "new quote" button.\n- You can post the quote on tweeter by clicking in the "Twitter" icon.',
    __v: 0,
    importance: 4,
    see: true,
  },
  /*{
    _id: "6324b5c470f45b99baf86ae7",
    title: "Virtual Drum Machine",
    type: ["Frontend"],
    tools: ["HTML", "CSS", "JavaScript"],
    view_link: "https://codepen.io/godwilldev/full/oNqNRXe",
    code_link: "https://github.com/GodWilldev/Drum-Pad-Machine",
    description:
      "This project is a Virtual drum machine that you can play by clicking or tapping keys.",
    thumbnail: "https://i.ibb.co/Y87nv88/drum-machine.png",
    details:
      " ## How does it Work?\n- You can click on the different tabs to display the corresponding sound.\n- You can also display the sounds by tapping the corresponding keys on your keyboard.",
    __v: 0,
    importance: 4,
    see: true,
  },*/
  {
    _id: "6328aeac7386080710d24cd0",
    title: "Exercise Tracker",
    type: ["Backend"],
    tools: ["NodeJs", "MongoDB", "HTML", "CSS"],
    view_link: "https://fcc-exercise-tracker-api-project-challenge.glitch.me/",
    code_link: "https://github.com/GodWilldev/fcc-exercice-tracker",
    description:
      "This is A freeCodeCamp Backend project. \r\nIt is an API to manage attached data(exercices) of users.",
    thumbnail: "https://i.ibb.co/MB09D45/image-2022-09-19-192436595.png",
    details:
      "## How does it work?\n- You can `POST` to `/api/users` with form data `username` to create a new user.\n- The returned response from `POST /api/users`  will be an object with the `username` and `_id`(auto-generated) properties.\n- The `GET` request to `/api/users` returns an array of all users.\n- You can `POST` to `/api/users/:_id/exercises` with form data `description`, `duration`, and optionally `date`. If no date is supplied, the current date will be used. The route parameter `_id` should be an id of an existing user.\n- The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.\n- You can make a `GET` request to `/api/users/:_id/logs` to retrieve a full exercise log of any user.\n- You can add `from`, `to` and `limit` parameters(as query parameters) to a `GET /api/users/:_id/logs` request to retrieve part of the log of any user. `from` and `to` are dates in `yyyy-mm-dd` format. `limit` is an integer of how many logs to send back.",
    see: true,
    importance: 6,
    __v: 0,
  },
];
;

/*export const defaultProjects=[
    {
        id: 1,
        title: 'Project title',
        type: ['Web', 'Frontend', 'Backend', 'Cloud'],
        tools: ['React', 'HTML', 'CSS', 'NodeJs'],
        view_link: 'https://github.com/GodWilldev',
        code_link: 'https://github.com/GodWilldev',
        thumbnail: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis quam mollis molestie commodo. 
        Sed sagittis sodales orci, in feugiat turpis lobortis vitae. Vivamus volutpat nibh at leo efficitur vulputate. 
        Praesent in odio sit amet tellus faucibus aliquam sed a odio. Nunc fringilla orci et feugiat scelerisque. 
        Sed odio odio, elementum id efficitur et, scelerisque sed nisi. Ut hendrerit felis nec mauris viverra, 
        tempor vulputate enim malesuada. Aenean ante elit, ullamcorper nec tincidunt ut, tincidunt vel nisi. Suspendisse potenti.`, 

        details_page: 'https://github.com/GodWilldev'

    },
    {
        id: 2,
        title: 'Project title',
        type: ['Web', 'Frontend', 'Backend', 'Cloud'],
        tools: ['JQuery', 'HTML', 'CSS', 'Bootstrap'],
        view_link: 'https://github.com/GodWilldev',
        code_link: 'https://github.com/GodWilldev',
        thumbnail: 'https://img.freepik.com/vecteurs-libre/icone-isometrique-technologie-informatique-salle-serveurs-ensemble-peripheriques-numeriques-element-conception-ordinateur-portable-pc_39422-1026.jpg?w=2000',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis quam mollis molestie commodo. 
        Sed sagittis sodales orci, in feugiat turpis lobortis vitae. Vivamus volutpat nibh at leo efficitur vulputate. 
        Praesent in odio sit amet tellus faucibus aliquam sed a odio. Nunc fringilla orci et feugiat scelerisque. 
        Sed odio odio, elementum id efficitur et, scelerisque sed nisi. Ut hendrerit felis nec mauris viverra, 
        tempor vulputate enim malesuada. Aenean ante elit, ullamcorper nec tincidunt ut, tincidunt vel nisi. Suspendisse potenti.`, 
        details_page: 'https://github.com/GodWilldev'
    },
    {
        id: 3,
        title: 'Project title',
        type: ['Web', 'Frontend', 'Backend', 'Cloud'],
        tools: ['React', 'HTML', 'CSS', 'Bootstrap'],
        view_link: 'https://github.com/GodWilldev',
        code_link: 'https://github.com/GodWilldev',
        thumbnail: 'https://img.freepik.com/vecteurs-libre/icone-isometrique-technologie-informatique-salle-serveurs-ensemble-peripheriques-numeriques-element-conception-ordinateur-portable-pc_39422-1026.jpg?w=2000',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis quam mollis molestie commodo. 
        Sed sagittis sodales orci, in feugiat turpis lobortis vitae. Vivamus volutpat nibh at leo efficitur vulputate. 
        Praesent in odio sit amet tellus faucibus aliquam sed a odio. Nunc fringilla orci et feugiat scelerisque. 
        Sed odio odio, elementum id efficitur et, scelerisque sed nisi. Ut hendrerit felis nec mauris viverra, 
        tempor vulputate enim malesuada. Aenean ante elit, ullamcorper nec tincidunt ut, tincidunt vel nisi. Suspendisse potenti.`, 
        details_page: 'https://github.com/GodWilldev'
    }
];*/