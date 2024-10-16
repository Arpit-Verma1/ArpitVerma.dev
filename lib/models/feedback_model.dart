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
    'Sai Teja',
    "Arpit is an excellent asset to any team. His ability to understand and work through complex code is impressive. Arpit has a natural knack for building projects efficiently, ensuring that both the functionality and user experience are top-notch.",
    feedBacksPicList[1],
    'Software Engineer \n Epam Systems',
    2,
    Color(0xFFE4FFC7),
  ),

  Feedback(
    'Piyush Gupta ',
    "I had the privilege of working with Arpit at Walnut Health Club. Arpit, as our Frontend Flutter Developer, made significant contributions to our project.Arpit is not only a skilled developer but also a great team player who meets deadlines consistently. I highly recommend Arpit for any development role; his contributions greatly improved our app's functionality and user experience.",
    feedBacksPicList[2],
    'Software Engineer \n Walnut Health Club',
    3,
    Color(0xFFD9FFFC),
  ),

  Feedback(
    'Harish Chaudhary',
    "Arpit's ability to handle complex code and deliver high-quality, efficient solutions is impressive. Arpit excels in creating projects with top-notch functionality and user experience. \n \n Beyond his technical expertise, Arpit is a great team player who actively contributes insights and fosters collaboration. ",
    feedBacksPicList[3],
    'Software Engineer \n TrueFoundary',
    4,
    Color(0xFFD0E6A5),
  ),
  Feedback(
    'Alok Kumar',
    "During the initial phase of my internship at Walnut Health Club, Arpit served as my mentor, and I was fortunate to collaborate with him closely. Arpit's technical prowess and problem-solving skills greatly contributed to our work. Together, we addressed intricate challenges in the app, optimizing performance and enhancing user experience.",
    feedBacksPicList[4],
    'App Developer \n Echio',
    5,
    Color(0xFFFFE0E0),
  ),
];
