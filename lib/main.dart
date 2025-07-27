import 'avatar_welcome_screen.dart';
import 'package:flutter/material.dart';

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

class AvatarWelcomeScreen extends StatelessWidget {
  const AvatarWelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Welcome to The Living Mirror'),
      ),
      body: const Center(
        child: Text(
          'Your journey begins here.',
          style: TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}
