import 'package:flutter/material.dart';
import 'package:portfolio/widgets/responsive_widget.dart';
import 'package:portfolio/widgets/social_card.dart';

import '../constants/colors.dart';
import '../constants/constants.dart';
import '../constants/image_paths.dart';
import '../constants/text_logs.dart';
import 'contact_form.dart';

class ContactBox extends StatelessWidget {
  const ContactBox({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);

    return Container(
      height: 900,
      padding: EdgeInsets.all(kDefaultPadding * 3),
      margin: EdgeInsets.only(top: kDefaultPadding * 2),
      constraints: BoxConstraints(maxWidth: 1000),
      decoration: BoxDecoration(
        color: theme.scaffoldBackgroundColor,
        borderRadius: BorderRadius.all(Radius.circular(20)),
        boxShadow: [
          BoxShadow(
            offset: Offset(0, 10),
            blurRadius: 50,
            color: theme.brightness == Brightness.light
                ? kPitchDark.withOpacity(.1)
                : whitebackgroundColor.withOpacity(.05),
          ),
        ],
      ),
      child: Column(
        children: [
          ResponsiveWidget.isSmallScreen(context)
              ? SizedBox()
              : SizedBox(height: kDefaultPadding * 2),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              SocialCard(
                iconSrc: iconPicCodolio,
                name: 'Arpit Verma - Codolio',
                color: Color(0xFFD9FFFC),
                press: () => launchURLs(codolioLink),
              ),
              SocialCard(
                iconSrc: iconPicLinkedIn,
                name: 'Arpit Verma',
                color: Color(0xFFE4FFC7),
                press: () => launchURLs(linkedInLink),
              ),
              SocialCard(
                iconSrc: iconPicGithub,
                name: 'Arpit Verma',
                color: Color(0xFFE8F0F9),
                press: () => launchURLs(githubLink),
              ),
            ],
          ),
          SizedBox(height: kDefaultPadding * 2),
          ContactForm(),
        ],
      ),
    );
  }
}
