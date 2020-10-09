import 'package:flutter/material.dart';
import 'dart:math' as math;

class BodyContent extends StatefulWidget {
  @override
  BodyContentState createState() => BodyContentState();
}

class BodyContentState extends State<BodyContent> {
  List<AssetImage> imageCycle = [
    AssetImage('lib/assets/images/balls/ball1.png'),
    AssetImage('lib/assets/images/balls/ball2.png'),
    AssetImage('lib/assets/images/balls/ball3.png'),
    AssetImage('lib/assets/images/balls/ball4.png'),
    AssetImage('lib/assets/images/balls/ball5.png'),
  ];

  AssetImage activeImage;

  BodyContentState() {
    activeImage = imageCycle[math.Random().nextInt(4)];
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: GestureDetector(
        onTap: () => setState(() => activeImage = imageCycle[math.Random().nextInt(4)]),
        child: Container(
          decoration: BoxDecoration(
            image: DecorationImage(
              image: activeImage,
            ),
          ),
        ), 
      ),
    );
  }
}
// MADE BY SIMON TIA4V2b