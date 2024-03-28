import { title } from 'process';

export const projects = [
  {
    title: 'Job application training portal',
    course: 'Requirements analysis',
    description: 'A portal for job application training',
    images: {
      thumbnail: '',
      useCaseDiagram: '',
      protoTypes: '',
    },
    text: {
      projectDesciption:
        'We as a team of 6 members, have been given the assignment to find a solution for our client. The job application training for IT students at our institution has been a successful and valuable opportunity for students to gain practical experience and make connections with potential employers. However, the current system for coordinating and managing the training, which relies on Word and Excel documents and email communication, has proven to be time-consuming and inefficient. In this report, we will analyze the current process and propose a web application as a solution to streamline the administration and communication involved in the job application training.',
      projectGoal:
        'The goal of our project is to create an online job application training scheduler. The application makes it possible for students to seamlessly book a time slot with up to 3 recruiters from several companies. This application should handle use cases such as booking time slots, update schedule, .... For an overview of all the use case descriptions please refer to the full report.',
      tasks: {
        defineUseCase: {
          steps: ['student', 'Coordinator', 'Companies'],
        },
        createPrototypes: {
          steps: ['student', 'Coordinator', 'Companies'],
          description:
            'The prototypes were created as medium-fidelity prototypes',
        },
      },
      contribution:
        "I worked mostly on meeting the client's needs in the system. I was looking for improvements and trying to come up with new ideas in the use case phase. For the prototypes, I helped to create the navigation for each user and I also created some screens like: manage announcements, manage uploads, manage emails and some other small stuff on other pages. When every screen was finished I also worked on making all of them uniform, so it all looks like one application",
      whatIlearned:
        "I have learned a lot about analyzing a customer's needs and about defining use cases. At first, it seems like an easy task, but you quickly realize that most of your first ideas/assumptions don't align with the customer's vision. This makes it a repetitive and somewhat hard to do, but at the same time it is rewarding when you get things right from the first try. It is also not easy when working in team, other people look at things in a different way, so everyone should say what's on their mind when working on a project like this to prevent confusion.",
    },
  },
  {
    title: 'Staff management application',
    course: 'Project PHP',
    description:
      'A staff management application for an au pair who lives with an elderly couple',
    images: {
      thumbnail: '',
      landingPage: '',
      declareAbsence: '',
      manageAbsences: '',
      manageInvoices: '',
    },
    text: {
      projectDescription:
        'We need to build an application that can help administrators have an overview of the planning, documents, and the meal for managing a house with several staff members. The administrators should be able to manage everything with ease. The administrators are an elderly couple and an au pair who lives with them to help them. The elderly couple also has a grandson with autism which makes it more difficult to arrange everything. The application should include a schedule with tasks and meals. It also needs a function to save paperwork like invoices from staff members, bills and other stuff. We need to create a user database so we can let staff members use the system to manage their tasks and invoices as wel as see the schedule. All of these things need to be manageable by the admins.',
      projectGoal: '',
      tasks: {
        CreateProject: {
          title: 'Create PHP project with Laravel 9 framework',
          description:
            'Create the project and add the needed packages for our team to work with. Then we put it in a GitHub repository so we could work on the same files and get changes when they are implemented.',
        },
        developingApplication: {
          title: 'Developing the application',
          description:
            "This step is without a doubt the hardest since it is all the technical stuff which is hard since we're not that familiar with the used concepts yet. We also have to include built in user support to make the application easy to use for everyone.",
        },
        hostApplication: {
          title: 'Host application',
          description:
            'We had to host our application on a hosting service called Combell which was provided for free by Thomas More through a partnership with Academic Software.',
        },
      },
      contribution: {},
    },
  },
];
