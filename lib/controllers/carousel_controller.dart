import 'package:carousel_slider/carousel_controller.dart';
import 'package:carousel_slider/carousel_options.dart';
import 'package:get/get.dart';

import '../constants/constants.dart';

class CarouseLController extends GetxController {
  static final carouselCtrl = Get.find<CarouseLController>();

  CarouselSliderController slideController = CarouselSliderController();

  @override
  void onInit() {
    slideController = CarouselSliderController();
    super.onInit();
  }

  final CarouselOptions slideOptions = CarouselOptions(
    height: 600,
    viewportFraction: 1.0,
    autoPlay: true,
    autoPlayInterval: const Duration(minutes: 2),
    autoPlayAnimationDuration: hoverAnimationDuration,
    enlargeStrategy: CenterPageEnlargeStrategy.scale,
    autoPlayCurve: slidingAnimationCurve,
    enlargeCenterPage: true,
  );

  void slideForward() => slideController.previousPage(
        duration: hoverAnimationDuration,
        curve: slidingAnimationCurve,
      );

  void slidePrevious() => slideController.previousPage(
        duration: hoverAnimationDuration,
        curve: slidingAnimationCurve,
      );
}
