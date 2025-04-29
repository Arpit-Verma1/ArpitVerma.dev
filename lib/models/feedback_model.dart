import 'package:flutter/material.dart';

import '../constants/image_paths.dart';

class Feedback {
  final String name, review, userPic, profile;
  final int id;
  final Color color;

  Feedback(
    this.name,
    this.review,
    this.userPic,
    this.profile,
    this.id,
    this.color,
  );
}

List<Feedback> feedBacks = [
  //TODO: feedbacks
  Feedback(
    'Mannat S.',
    'I recommend Arpit as a Flutter Developer. He consistently delivered high-quality code, displayed excellent problem-solving skills, and collaborated seamlessly with the team. Arpit is an asset to any development team and I am confident he will excel in future endeavours.',
    feedBacksPicList[0],
    'Founder & CEO \n Walnut Health Club',
    1,
    Color(0xFFFFF3DD),
  ),
  Feedback(
    'Akshat Gupta',
    "Arpit is a skilled Flutter developer with strong hands-on experience and a great attitude. He takes ownership of his work, consistently delivers quality results, and brings fresh ideas to the table.",
    feedBacksPicList[1],
    'Software Engineer II \n Fiserv',
    2,
    Color(0xFFE4FFC7),
  ),
  Feedback(
    'Aman Gupta',
    "It was an amazing experience to work with Arpit. He always gives a good user perspective on all the features we build and is equally good at implementing production ready application.",
    feedBacksPicList[2],
    'Software Engineer \n Cipherschools',
    3,
    Color(0xFFE4FFC7),
  ),
  Feedback(
    'Sai Teja',
    "Arpit is an excellent asset to any team. His ability to understand and work through complex code is impressive. Arpit has a natural knack for building projects efficiently, ensuring that both the functionality and user experience are top-notch.",
    feedBacksPicList[3],
    'Software Engineer \n Epam Systems',
    4,
    Color(0xFFE4FFC7),
  ),

  Feedback(
    'Piyush Gupta ',
    "I had the privilege of working with Arpit at Walnut Health Club. Arpit, as our Frontend Flutter Developer, made significant contributions to our project.Arpit is not only a skilled developer but also a great team player who meets deadlines consistently. I highly recommend Arpit for any development role; his contributions greatly improved our app's functionality and user experience.",
    feedBacksPicList[4],
    'Software Engineer \n Walnut Health Club',
    5,
    Color(0xFFD9FFFC),
  ),

  Feedback(
    'Harish Chaudhary',
    "Arpit's ability to handle complex code and deliver high-quality, efficient solutions is impressive. Arpit excels in creating projects with top-notch functionality and user experience. \n \n Beyond his technical expertise, Arpit is a great team player who actively contributes insights and fosters collaboration. ",
    feedBacksPicList[5],
    'Software Engineer \n TrueFoundary',
    6,
    Color(0xFFD0E6A5),
  ),
  Feedback(
    'Raunak Bhardwaj',
    "He has a strong grasp of app development principles and always ensured the UI/UX was smooth and user-friendly. What I appreciated the most was how well he collaborated across teams — quick to sync up, solve integration challenges, and always open to discussing new ideas to improve the product",
    feedBacksPicList[6],
    'Software Engineer \n Cipherschools',
    7,
    Color(0xFFFFE0E0),
  ),
  Feedback(
    'Alok Kumar',
    "During the initial phase of my internship at Walnut Health Club, Arpit served as my mentor, and I was fortunate to collaborate with him closely. Arpit's technical prowess and problem-solving skills greatly contributed to our work. Together, we addressed intricate challenges in the app, optimizing performance and enhancing user experience.",
    feedBacksPicList[7],
    'App Developer \n Echio',
    8,
    Color(0xFFFFE0E0),
  ),
];
