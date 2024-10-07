export const projects: Project[] = [
  {
    icon: "https://play-lh.googleusercontent.com/9XJ4u_Mmr9D52CEFCYN76MmGKvII1mnXOEDLslEtbj9j4HFyca5MOkU0lqeZL2ufQg",
    proyecto: "Tr4iner Entrenador",
    empresa: "INVADION SAC",
    descripcion:
      "Specialized dashboard for Tr4iner trainers, where they provide advice for their students.\nParticipate by providing support and adding functionality",
    imagen:
      "https://play-lh.googleusercontent.com/9XJ4u_Mmr9D52CEFCYN76MmGKvII1mnXOEDLslEtbj9j4HFyca5MOkU0lqeZL2ufQg",
    lenguajes: ["C#", "Net Core", "SqlServer", "AWS", "Html", "Css", "Js"],
    links: [
      {
        icon: "eva:link-outline",
        url: "https://tr4iner.com/",
        text: "Ver",
      },
    ],
  },
  {
    icon: "https://play-lh.googleusercontent.com/9XJ4u_Mmr9D52CEFCYN76MmGKvII1mnXOEDLslEtbj9j4HFyca5MOkU0lqeZL2ufQg",
    proyecto: "Tr4iner App",
    empresa: "INVADION SAC",
    descripcion:
      "Application for Tr4iner students, where they find information about their evaluations.\nParticipate by providing support and adding functionality",
    imagen:
      "https://play-lh.googleusercontent.com/w-xwJkZqGHtoEi7VYGbforJq4dBPsXdRPSfuyvxhnb1UrlIxmAsti8tdPWaQsHtr-g=w2560-h1440-rw",
    lenguajes: ["Flutter", "Firebase", "C#", "Net Core", "SqlServer", "AWS"],
    links: [
      {
        icon: "eva:link-outline",
        url: "https://play.google.com/store/search?q=tr4iner&c=apps&hl=es_419",
        text: "Ver",
      },
    ],
  },
  {
    icon: "https://avatars.githubusercontent.com/u/124643592?v=4",
    proyecto: "Sidebar Pro",
    empresa: "AlexMP-Dev",
    descripcion:
      "Sidebar Pro is a responsive component that offers a sidebar that automatically collapses and expands based on screen size, ideal for web projects.",
    lenguajes: ["Css", "Html", "Js"],
    imagen:
      "https://github.com/user-attachments/assets/92eab557-32bd-4586-a53e-a665c54ece98",
    links: [
      {
        text: "Github",
        icon: "eva:github-outline",
        url: "https://github.com/AlexMP-Dev/sidebar",
      }
    ],
  },
  {
    icon: "https://play-lh.googleusercontent.com/67lltLmFCfaQN7w1cdYvTDzaULoKHN0FDEMORRYJ7l6emrQEHxTPUrzlhNYG1z7aHkrR=w240-h480-rw",
    proyecto: "Hyper ApiClient",
    empresa: "AlexMP-Dev",
    descripcion:
      "Hyper ApiClient is an application developed in Flutter, which allows you to test endpoints.",
    lenguajes: ["Flutter"],
    imagen:
      "https://play-lh.googleusercontent.com/1XTMWxccu2YlsuXeIiUYZj1twtfCPdU56Me8_aJInY1UsTVY-Fdz7p8bqwoKf0j5Hg=w2560-h1440-rw",
    links: [
      {
        text: "Playstore",
        icon: "i-heroicons-play-20-solid",
        url: "https://play.google.com/store/apps/details?id=com.hardsoftgreentechperu.hyperapiclient&hl=es_419",
      },
      // {
      //   text: "Github",
      //   icon: "eva:github-outline",
      //   url: "https://github.com/AlexMP-Dev/hyper-apiclient",
      // }
    ],
  },
];

export interface Project {
  icon: string;
  proyecto: string;
  empresa: string;
  lenguajes: string[];
  imagen: string;
  links: {
    icon: string;
    url: string;
    text: string;
  }[];
  descripcion: string;
}