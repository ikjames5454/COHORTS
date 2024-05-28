import image from "../asset/Image/Rectangle.png"

// export const userList = [
//     {
//         id : 1,
//         cohortName  : "cohort 1",
//         description : "wwwwwwwwwww",
//         program     : "Product design",
//         startDate   : "M {$L: 'en', $u: undefined, $d: Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time), $y: 2024, $M: 4, …}",
//         endDate     : "11-8-2024",
//         cohortAvatar: image
//     },
//     {
//         id : 1,
//         cohortName  : "cohort 2",
//         description : "wwwwwwwwwww",
//         program     : "Java Script",
//         startDate   : "M {$L: 'en', $u: undefined, $d: Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time), $y: 2024, $M: 4, …}",
//         endDate     : "11-8-2024",
//         cohortAvatar: image
//     },
//     {
//         id : 1,
//         cohortName  : "cohort 3",
//         description : "wwwwwwwwwww",
//         program     : "Product design",
//         startDate   : "M {$L: 'en', $u: undefined, $d: Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time), $y: 2024, $M: 4, …}",
//         endDate     : "11-8-2024",
//         cohortAvatar: image
//     },
//     {
//         id : 1,
//         cohortName  : "cohort 4",
//         description : "wwwwwwwwwww",
//         program     : "Java Script",
//         startDate   : "M {$L: 'en', $u: undefined, $d: Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time), $y: 2024, $M: 4, …}",
//         endDate     : "11-8-2024",
//         cohortAvatar: image
//     },
//     {
//         id : 1,
//         cohortName  : "cohort 5",
//         description : "wwwwwwwwwww",
//         program     : "Product design",
//         startDate   : "M {$L: 'en', $u: undefined, $d: Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time), $y: 2024, $M: 4, …}",
//         endDate     : "11-8-2024",
//         cohortAvatar: image
//     },
//     {
//         id : 1,
//         cohortName  : "cohort 6",
//         description : "wwwwwwwwwww",
//         program     : "Java Script",
//         startDate   : "M {$L: 'en', $u: undefined, $d: Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time), $y: 2024, $M: 4, …}",
//         endDate     : "11-8-2024",
//         cohortAvatar: image
//     },

   
// ]

import { Dayjs } from 'dayjs';


type Cohort = {
  id: number;
  cohortName: string;
  description: string;
  program: string;
  startDate: { $d: Date };
  endDate: string;
  cohortAvatar: string;
};


export const userList: Cohort[] = [
  {
    id: 1,
    cohortName: "cohort 1",
    description: "wwwwwwwwwww",
    program: "Product design",
    startDate: {$d: new Date("Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time)") },
    endDate: "11-8-2024",
    cohortAvatar: image,
  },
  {
    id: 1,
    cohortName: "cohort 2",
    description: "wwwwwwwwwww",
    program: "Java Script",
    startDate: {$d: new Date("Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time)") },
    endDate: "11-8-2024",
    cohortAvatar: image,
  },
  {
    id: 1,
    cohortName: "cohort 3",
    description: "wwwwwwwwwww",
    program: "Product design",
    startDate: {$d: new Date("Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time)") },
    endDate: "11-8-2024",
    cohortAvatar: image,
  },
  {
    id: 1,
    cohortName: "cohort 4",
    description: "wwwwwwwwwww",
    program: "Java Script",
    startDate: { $d: new Date("Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time)") },
    endDate: "11-8-2024",
    cohortAvatar: image,
  },
  {
    id: 1,
    cohortName: "cohort 5",
    description: "wwwwwwwwwww",
    program: "Product design",
    startDate: {$d: new Date("Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time)") },
    endDate: "11-8-2024",
    cohortAvatar: image,
  },
  {
    id: 1,
    cohortName: "cohort 6",
    description: "wwwwwwwwwww",
    program: "Java Script",
    startDate: {$d: new Date("Thu May 16 2024 00:00:00 GMT+0100 (West Africa Standard Time)") },
    endDate: "11-8-2024",
    cohortAvatar: image,
  }
];
