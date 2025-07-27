import 'package:flutter/material.dart';
import 'checkin_screen.dart';

class AvatarWelcomeScreen extends StatelessWidget {
  const AvatarWelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Meet Your Avatar')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Your reflection begins here.',
              style: TextStyle(fontSize: 20),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const CheckInScreen()),
                );
              },
              child: const Text('Start Daily Check-In'),
            ),
          ],
        ),
      ),
    );
  }
}
