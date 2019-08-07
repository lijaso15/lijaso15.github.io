import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        image: "tsp.png",
        title: "tsp/knapsack",
        subtitle:
          "Visualizing and comparing various combinations travelling salesman and knapsack problem solutions",
        name: "tsp/knapsack",
        demos: ["/tsp.png", "/tspdemo.png"],
        summary: ["nothing here yet! please do checkout the link though!!"],
        source: [
          "https://lijaso15.github.io/trucks-and-parcels/",
          "https://github.com/lijaso15/trucks-and-parcels"
        ],
        id: 0
      },
      {
        image: "spreeder.png",
        title: "spreeder",
        subtitle: "Interface to allow for extremely fast reading of text.",
        name: "spreeder",
        demos: ["/spreeder_demo.gif"],
        summary: [
          "I originally created a chrome extension to allow myself to apply to jobs faster by \
        mapping details such as job position, company name, and job requirements onto a google doc. \
        Although I successfully implemented the idea, there was a greater problem that I wish I did \
        notice much sooner, and that was that the idea to begin with was garbage! My idea was to have \
        on my cover letter a section that says 'Hey, I know you are looking for these requirements and \
        I want to show you that I carefully read it and do in fact satisfy these requirements.' But what \
        happens is that I just copy-paste those detail from the posting onto my cover letter. Overall, \
        doing that and having to read it from the hiring manager's point of view seem quite ingenuine, so \
        I scrapped the idea. Looking back, I really thought I had an innovative idea because I look over the \
        web and no tool like this had existed yet.",
          "I am taking an agile course right now and i've learned that there is a phase in which we essentially \
        use the scientific method to test whether our idea has any value. Well after a week of sending out job \
        applications using my lovely chrome extension I had to unfortunately conclude that this idea I had \
        has no value. Either way I managed to scrap this idea and recycle some of the code to make an extension \
        for spreeding through webpages. Unfortunately, the main engine that I built the spreeder with is \
        made with React and its final build is essentially an inline script which chrome extensions popups \
        strictly forbid."
        ],
        source: [
          "https://lijaso15.github.io/spreeder/",
          "https://github.com/lijaso15/spreeder"
        ],
        id: 1
      },
      {
        image: "vievacance_demo.png",
        title: "vieVacance fullstack webapp",
        subtitle:
          "trip planner whose main features are a 3d interactable globe and trip experience sharing",
        name: "vievacance",
        demos: ["/vievacance_demo.gif"],
        summary: [
          "I acquired the idea of making this app when it was decided where I would go on my very first vacation. I wanted to make something that would allow users to plan where to go on their next trip as well as share their memories with others. The main learning goals for this project is to become comfortable with components in the react framework, employing state management patterns, and backend restful api.",
          "The entire website was built by myself and there was so much I was able to learn along the way. Every page is dynamically served through a database that I created through a webscraping script. In the future I would like to build a smarter webscraper with a user friendly interface. There may still be bugs in the app but overall I have accomplished all of the goals I had in mind for this project."
        ],
        source: [
          "https://vievacance.herokuapp.com/",
          "https://github.com/lijaso15/vievacance"
        ],
        id: 2
      },
      {
        image: "datafest2018.jpg",
        title: "First place @ASAdatafest2018",
        subtitle:
          "Two days of data wrangling, analysis, and presentation design, each team is allowed a few minutes and max two slides to impress a panel of judges. ",
        name: "asadatafest2018",
        demos: ["/Cinnamon_presentation.pdf", "/Cinnamon_writeup.pdf"],
        summary: [
          "I was in a team of 4 people and given an indeed data set of 1.6 million vectors. The task was to use machine learning to solve some problem. The problem we tackled was income. We wanted to find the greatest predictor of income for a given income bracket. We used azureML to process our experiment. This involves the proper cleaning, feature selection, transformations, and model selection to arrive at our conclusion.",
          "Each step was properly explained and justified to a panel of judges. We understood the dataset well when dealing with the cleaning and imputations. I would say that this was simply a matter of common sense, however it really did set us apart from other teams because we were frankly the only ones to do so and this is not something that was taught in class. As a result we got first place in the hackathon and one of the judges offered my team an internship at Manulife."
        ],
        source: [
          "https://utorontodatafest.wordpress.com/2018-asa-datafest-uoft/"
        ],
        id: 3
      },
      {
        image: "treemap.png",
        title: "treemap visualizer",
        subtitle:
          "api for visualising a dataset containing a treemap like structure. Creates an abstract treemap object and generates an interactive pygame interface.",
        name: "treemap visualizer",
        demos: ["/treemap_demo.gif"],
        summary: [
          "This was an assignment for csc148. The task was to implement the class responsible for translating a given dataset into a tree structure, and then creating an interface that will allow this tree structure to be visualized by a series of nested, colourful, rectangular boxes. The goal was to become an expert thinking about problems in a dynamic programming manner, as many of these tasks will become much simpler through recursive function calls.",
          "This program can visualize city populations and os file structures. You can interact with the screen by left clicking to display the size of the leaf node, right clicking to delete the pointed leaf node, pressing the uparrow key to increase the size of the selected leaf node or pressing the down arrow key to decrease it."
        ],
        source: ["https://github.com/lijaso15/treemap_visualizer"],
        id: 4
      },
      {
        image: "design.jpg",
        title: "warehouse system design",
        subtitle:
          "designed a Java program for handling the selection and loading of fascia for bumpers on minivans. wrote a thorough test suite and refactored with design patterns",
        name: "warehouse system design",
        demos: ["/walkthrough.pdf", "/design.pdf"],
        summary: [
          [
            "used the design concepts taught in class",
            "designed a Java program that solves the proble",
            "implemented your design",
            "worked with related code that others are developing at the same time as you are developing yours",
            "reedesign your phase 1 code to incorporate a change in specification",
            "write a thorough test suite",
            "work with design patterns",
            "prepare a code walkthrough"
          ],
          "For me biggest problem with this project was the fact that one of my group members was not pulling their weight so most of their work got shifted onto me. As a result I had much more freedom to make changes to whatever I wanted. However, I suffered because I didn't have to go through many of the common issues that other groups were having with respect to solving merge conflicts and dealing with multiple branches or having to rollback their code. I think going through those types of problems would've been I really great (yet annoying) learning experience for me. On the other hand, this project was so super satisfactory for me because I got to refactor the code. I've never experienced anything so satisfying as compared to simplifying my code and making it more efficient, modular, and nicer to read. I really had a great time working on this project overall.",
          "This was a first time I worked on a large project with a group of people. We were responsible for:"
        ],
        source: [],
        id: 5
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    projects: state => state.projects,
    title: state => id => {
      return state.projects[id].title;
    },
    subtitle: state => id => {
      return state.projects[id].subtitle;
    },
    image: state => id => {
      return state.projects[id].image;
    },
    summary: state => id => {
      return state.projects[id].summary;
    },
    demos: state => id => {
      return state.projects[id].demos;
    },
    source: state => id => {
      return state.projects[id].source;
    }
  }
});
