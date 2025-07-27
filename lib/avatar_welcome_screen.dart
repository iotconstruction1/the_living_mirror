import 'package:flutter/material.dart';

class AvatarWelcomeScreen extends StatelessWidget {
  const AvatarWelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Meet Your Avatar'),
      ),
      body: const Center(
        child: Text(
          'This is the beginning of your transformation.',
          style: TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}
