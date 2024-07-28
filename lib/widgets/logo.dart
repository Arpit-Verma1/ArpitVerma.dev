import 'package:flutter/material.dart';

import '../constants/colors.dart';

class LoGo extends StatelessWidget {
  const LoGo({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Image.asset(
      'assets/images/logo.png',
      height: 150,
      width: 150,
    );
  }
}
