import sqlImage from '../assets/png/SQL.png';
import PythonImage from '../assets/png/Python.png';
import PSImage from '../assets/png/Problem_Solving.png';
import SEImage from '../assets/png/Software_Engineer.png';
import sqlbImage from '../assets/png/SQL_Basic.png';

export const achievementData = {
    bio: "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn. - Alvin Toffler",
    achievements: [
        {
            id: 1,
            title: 'Introduction to Python',
            details: 'A certification course on Introduction to Python',
            date: 'Aug 06 2023',
            field: 'Coding',
            image: PythonImage
        },
        {
            id: 2,
            title: 'Introduction to MySQL',
            details: 'A certification course on Introduction to MySQL',
            date: 'Aug 14 2023',
            field: 'Database',
            image: sqlbImage
        },
        {
            id: 3,
            title: 'Advancement in  MySQL',
            details: 'A certification course on MySQL(Intermediate)',
            date: 'Aug 14 2023',
            field: 'Database',
            image: sqlImage
        },
        {
            id: 4,
            title: 'Problem Solving Basics',
            details: 'A certification course on Introduction to Problem Solving',
            date: 'Sep 10, 2023',
            field: 'Problem Solving',
            image: PSImage
        },
         {
            id: 5,
            title: 'Software Engineering Internship',
            details: 'A certification for the training towards Software Engineering ',
            date: 'Jan 29, 2025',
            field: 'Software Engineering',
            image: SEImage
        }
    ]
};


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/
