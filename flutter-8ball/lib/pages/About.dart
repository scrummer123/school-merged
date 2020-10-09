import 'package:flutter/material.dart';
import './widgets/About/BodyContent.dart';

class About extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: BodyContent(),
      ),
    );
  }
}