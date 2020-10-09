import 'package:flutter/material.dart';

class AppBarContent extends StatelessWidget with PreferredSizeWidget {
  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Text(
        'Simons App',
        style: TextStyle(
          fontFamily: 'Ubuntu'
        )
      ),
      actions: <Widget>[
        RaisedButton(
          color: Colors.deepPurple[500],
          child: Text(
            'About',
            style: TextStyle(
              color: Colors.white
            ),
          ),
          onPressed: () {
            Navigator.of(context).pushNamed('/about');
          },
        )
      ],
      backgroundColor: Colors.deepPurple[700],
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}