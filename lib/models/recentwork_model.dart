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
      category: 'Plutonn',
      image: recentWorksPic2,
      projectUrl:
          'https://play.google.com/store/apps/details?id=com.plutonn.plutonn'),
  RecentWork(
      id: 1,
      title: recentWorksText3,
      category: 'Walnut',
      image: recentWorksPic3,
      projectUrl:
          'https://play.google.com/store/apps/details?id=com.walnut.walnut_app'),
  RecentWork(
      id: 2,
      title: recentWorksText4,
      category: 'While',
      image: recentWorksPic4,
      projectUrl:
          'https://play.google.com/store/apps/details?id=com.while.while_app'),
];
