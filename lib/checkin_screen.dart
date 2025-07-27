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

    // For now we just show a basic confirmation
    showDialog(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('Check-In Submitted'),
        content: Text('Mood: $mood\nNote: $note'),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
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
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _moodController,
              decoration: const InputDecoration(
                labelText: 'How are you feeling?',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: _noteController,
              decoration: const InputDecoration(
                labelText: 'Anything you want to say?',
                border: OutlineInputBorder(),
              ),
              maxLines: 4,
            ),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: _handleSubmit,
              child: const Text('Submit Check-In'),
            ),
          ],
        ),
      ),
    );
  }
}
