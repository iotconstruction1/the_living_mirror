import 'package:flutter/material.dart';
import 'avatar_welcome_screen.dart';

void main() {
  runApp(const LivingMirrorApp());
}

class LivingMirrorApp extends StatelessWidget {
  const LivingMirrorApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'The Living Mirror',
      theme: ThemeData(
        primarySwatch: Colors.blueGrey,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: const AvatarWelcomeScreen(),
    );
  }
}
