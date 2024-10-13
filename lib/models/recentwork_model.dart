import '../constants/image_paths.dart';
import '../constants/text_logs.dart';

class RecentWork {
  final String title, image, category, projectUrl;
  final int id;

  RecentWork({
    required this.category,
    required this.id,
    required this.image,
    required this.title,
    required this.projectUrl,
  });
}

List<RecentWork> recentWorks = [
  //TODO: recent works
  RecentWork(
      id: 1,
      title: recentWorksText1,
      category: 'RECB_OUTII',
      image: recentWorksPic1,
      projectUrl:
          'https://github.com/Arpit-Verma1/RECB-Outii-Streamlining-Student-Tracking-with-QR-Technology'),
  RecentWork(
      id: 2,
      title: recentWorksText2,
      category: 'CryptoNest',
      image: recentWorksPic2,
      projectUrl:
          'https://github.com/Arpit-Verma1/100-days-of-IOS/tree/master/CryptoNest'),
  RecentWork(
      id: 3,
      title: recentWorksText3,
      category: 'Jwelease',
      image: recentWorksPic3,
      projectUrl: 'https://github.com/Arpit-Verma1/jewlease'),
  RecentWork(
      id: 4,
      title: recentWorksText4,
      category: 'Plutonn',
      image: recentWorksPic4,
      projectUrl:
          'https://play.google.com/store/apps/details?id=com.plutonn.plutonn'),

  RecentWork(
      id: 5,
      title: recentWorksText5,
      category: 'Plutonn',
      image: recentWorksPic5,
      projectUrl:
          'https://play.google.com/store/apps/details?id=com.walnut.walnut_app'),
  RecentWork(
      id: 6,
      title: recentWorksText6,
      category: 'While',
      image: recentWorksPic6,
      projectUrl:
          'https://play.google.com/store/apps/details?id=com.while.while_app'),
];
