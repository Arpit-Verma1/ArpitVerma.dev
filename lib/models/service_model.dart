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
      'CipherSchools',
      servicePic1,
      'Full Stack Mobile Dev',
      'Feb 2024 - Present',
      1,
      Color(0xFFD9FFFC),
      'https://www.cipherschools.com/'),
  Service('While Network Pvt', servicePic2, 'Mobile App Developer',
      'May 2024 - Present', 2, Color(0xFFE4FFC7), 'https://walnuthealth.club/'),
  Service(
      'Walnut Health',
      servicePic3,
      'Flutter Developer',
      'Sep 2023 - Nov 2023',
      3,
      Color(0xFFFFF3DD),
      'https://www.linkedin.com/company/while-network-private-limited/'),
];
