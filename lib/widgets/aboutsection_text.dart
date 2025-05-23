
import 'package:flutter/material.dart';
import 'package:portfolio/widgets/responsive_widget.dart';
import '../constants/constants.dart';

class AboutSectionText extends StatelessWidget {
  const AboutSectionText({Key? key, required this.text}) : super(key: key);

  final String text;

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    final double w = MediaQuery.of(context).size.width;
    double padding = w * .005;

    return Padding(
      padding: EdgeInsets.symmetric(
          horizontal: !ResponsiveWidget.isLargeScreen(context)
              ? kDefaultPadding * padding
              : 0),
      child: Text(
        text,
        textAlign: TextAlign.center,
        style: theme.textTheme.bodySmall!
            .copyWith(fontSize: 18, fontWeight: FontWeight.w300),
      ),
    );
  }
}
