import 'package:flutter/material.dart';

import '../../constants/colors.dart';
import '../../constants/constants.dart';
import '../../constants/image_paths.dart';
import '../../models/recentwork_model.dart';
import '../../widgets/hireme_card.dart';
import '../../widgets/recentwork_card.dart';
import '../../widgets/responsive_widget.dart';
import '../../widgets/section_title.dart';

class RecentWorkSection extends StatelessWidget {
  const RecentWorkSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);

    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: theme.brightness == Brightness.light
            ? Color(0xFFF7E8FF)
            : bgColorDarkTheme,
        image: DecorationImage(
            fit: BoxFit.cover,
            image: AssetImage(recentworksectionBackgroundImage)),
      ),
      child: Column(
        children: [
          Transform.translate(
            offset: Offset(0, -50),
            child: HireMeCard(),
          ),
          SectionTitle(
            title: 'Recent Works',
            subTitle: 'My Strong Arenas',
            color: Color(0xFFFFB100),
          ),
          SizedBox(height: kDefaultPadding * 1.5),
          SizedBox(
            width: 1210,
            child: Wrap(
              alignment: WrapAlignment.center,
              spacing: kDefaultPadding,
              runSpacing: ResponsiveWidget.isLargeScreen(context)
                  ? kDefaultPadding * 2
                  : kDefaultPadding,
              children: List.generate(
                recentWorks.length,
                (index) => Padding(
                  padding: EdgeInsets.symmetric(
                      horizontal: ResponsiveWidget.isLargeScreen(context)
                          ? 0
                          : kDefaultPadding),
                  child: RecentWorkCard(
                    index: index,
                    press: () {},
                  ),
                ),
              ),
            ),
          ),
          SizedBox(height: kDefaultPadding * 3),
        ],
      ),
    );
  }
}
