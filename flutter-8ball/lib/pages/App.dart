import 'package:flutter/material.dart';
import 'package:school/pages/About.dart';
import './widgets/App/BodyContent.dart';
import './widgets/App/AppBarContent.dart';

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.deepPurple[300],
        appBar: AppBarContent(),
        body: BodyContent()
      ),
      routes: {
        '/about': (BuildContext context) => About(),
      },
    );
  }
}