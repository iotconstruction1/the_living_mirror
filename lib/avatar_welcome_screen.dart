import 'package:flutter/material.dart';
import 'checkin_screen.dart';
class AvatarWelcomeScreen extends StatelessWidget {
  const AvatarWelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Meet Your Avatar'),
      ),body: Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      const Text(
        'This is the beginning of your mirror journey.',
        style: TextStyle(fontSize: 18),
      ),
      const SizedBox(height: 20),
      ElevatedButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => const CheckInScreen(),
            ),
          );
        },
        child: const Text('Begin Daily Check-In'),
      ),
    ],
  ),
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
