import 'package:flutter/material.dart';

import '../constants/image_paths.dart';

class Service {
  final String title, image, positon, duration, companyUrl;
  final int id;
  final Color color;

  Service(
    this.title,
    this.image,
    this.positon,
    this.duration,
    this.id,
    this.color,
    this.companyUrl,
  );
}

List<Service> services = [

  Service(
      'LikeMinds',
      servicePic1,
      'iOS Developer',
      'Apr 2025 - Present',
      1,
      Color(0xFFD9FFFC),
      'https://www.likeminds.community/'),
  Service(
      'CipherSchools',
      servicePic2,
      'Mobile Application Developer',
      'Feb 2024 - March 2025',
      2,
      Color(0xFFD9FFFC),
      'https://www.cipherschools.com/'),
  Service('While Network Pvt', servicePic3, 'Mobile App Developer',
      'May 2024 - Sept 2024', 3, Color(0xFFE4FFC7), 'https://www.linkedin.com/company/while-network-private-limited/'),
  Service(
      'Walnut Health',
      servicePic4,
      'Flutter Developer',
      'Sep 2023 - Nov 2023',
      4,
      Color(0xFFFFF3DD),
      'https://walnuthealth.club/'
      ),
];
