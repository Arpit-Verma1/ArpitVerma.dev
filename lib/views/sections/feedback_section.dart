import 'package:flutter/material.dart';

import '../../constants/constants.dart';
import '../../models/feedback_model.dart';
import '../../widgets/feedback_card.dart';
import '../../widgets/responsive_widget.dart';
import '../../widgets/section_title.dart';

class FeedBackSection extends StatelessWidget {
  const FeedBackSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final Size _ = MediaQuery.of(context).size;

    return Container(
      padding: EdgeInsets.symmetric(vertical: kDefaultPadding * 2.5),
      constraints: BoxConstraints(maxWidth: _.width * .9),
      child: Column(
        children: [
          SectionTitle(
            title: 'Recommendation Recieved',
            subTitle: 'Inspiring Testimonials from My Former Team and Leaders',
            color: Color(0xFF62BAB8),
          ),
          SizedBox(height: kDefaultPadding),
          ResponsiveWidget.isLargeScreen(context)
              ? Container(
                  height: MediaQuery.of(context).size.height * .85,
                  child: ListView.builder(
                    itemBuilder: (context, index) {
                      return FeedBackCard(index: index);
                    },
                    itemCount: feedBacks.length,
                    scrollDirection: Axis.horizontal,
                  ),
                )
              : SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  physics: BouncingScrollPhysics(
                    parent: AlwaysScrollableScrollPhysics(),
                  ),
                  child: Padding(
                    padding: EdgeInsets.symmetric(
                      horizontal: ResponsiveWidget.isSmallScreen(context)
                          ? 0
                          : kDefaultPadding * 1.5,
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: List.generate(
                        feedBacks.length,
                        (index) => FeedBackCard(index: index),
                      ),
                    ),
                  ),
                ),
        ],
      ),
    );
  }
}
