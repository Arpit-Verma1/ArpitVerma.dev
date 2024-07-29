import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'dart:html' as html;

import '../constants/constants.dart';
import '../constants/image_paths.dart';

class MouseMagnet extends StatefulWidget {
  const MouseMagnet({Key? key, required this.body}) : super(key: key);

  final Widget body;

  @override
  State<MouseMagnet> createState() => _MouseMagnetState();
}

class _MouseMagnetState extends State<MouseMagnet> {
  double dX = 0.0;
  double dY = 0.0;

  bool isOut = true;

  @override
  void initState() {
    html.document.documentElement!.addEventListener(
      'mouseleave',
      (event) => setState(() {
        isOut = true;
      }),
    );
    html.document.documentElement!.addEventListener(
      'mouseenter',
      (event) => setState(() {
        isOut = false;
      }),
    );
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final Size _ = MediaQuery.of(context).size;

    return kIsWeb
        ? Stack(
            children: [
              MouseRegion(
                onHover: (e) => setState(() {
                  dX = e.localPosition.dx;
                  dY = e.localPosition.dy;
                }),
                child: Container(
                  height: _.height,
                  width: _.width,
                  child: widget.body,
                ),
              ),
              AnimatedPositioned(
                top: dY,
                left: dX - 20,
                duration: magnetMouseAnimationDuration,
                child: AnimatedContainer(
                  duration: magnetMouseAnimationDuration,
                  height: isOut ? 0 : 25,
                  width: isOut ? 0 : 25,
                  // decoration: BoxDecoration(
                  //     image: DecorationImage(image: AssetImage(flutter))),
                  child: Container(
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      image: DecorationImage(
                        image: AssetImage('assets/images/cursor.png'),
                        fit: BoxFit.cover,
                      ),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.white.withOpacity(0.5),
                          spreadRadius: 10,
                          blurRadius: 10,
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          )
        : widget.body;
  }
}
