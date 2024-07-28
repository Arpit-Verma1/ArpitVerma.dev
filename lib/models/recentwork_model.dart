import '../constants/image_paths.dart';
import '../constants/text_logs.dart';

class RecentWork {
  final String title, image, category;
  final int id;

  RecentWork({
    required this.category,
    required this.id,
    required this.image,
    required this.title,
  });
}

List<RecentWork> recentWorks = [
  //TODO: recent works
  RecentWork(
    id: 1,
    title: recentWorksText1,
    category: 'RECB_OUTII',
    image: recentWorksPic1,
  ),
  RecentWork(
    id: 2,
    title: recentWorksText2,
    category: 'Plutonn',
    image: recentWorksPic2,
  ),
];
