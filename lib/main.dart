import 'package:flutter/material.dart';

class CheckInScreen extends StatefulWidget {
  const CheckInScreen({super.key});

  @override
  State<CheckInScreen> createState() => _CheckInScreenState();
}

class _CheckInScreenState extends State<CheckInScreen> {
  final _moodController = TextEditingController();
  final _noteController = TextEditingController();

  void _handleSubmit() {
    final mood = _moodController.text.trim();
    final note = _noteController.text.trim();

    showDialog(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('Check-In Saved'),
        content: Text('Mood: $mood\nNote: $note'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('OK'),
          )
        ],
      ),
    );

    _moodController.clear();
    _noteController.clear();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Daily Check-In')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(
              controller: _moodController,
              decoration: const InputDecoration(
                labelText: 'How are you feeling right now?',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: _noteController,
              decoration: const InputDecoration(
                labelText: 'Want to write more?',
                border: OutlineInputBorder(),
              ),
              maxLines: 4,
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: _handleSubmit,
              child: const Text('Submit'),
            ),
          ],
        ),
      ),
    );
  }
}
