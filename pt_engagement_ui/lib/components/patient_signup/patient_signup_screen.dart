import 'package:flutter/material.dart';
import 'package:pt_engagement_ui/components/patient_signup/components/custom_button.dart';
import 'package:pt_engagement_ui/components/patient_signup/components/custom_text_field.dart';

class PatientSignUpScreen extends StatelessWidget {
  const PatientSignUpScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Center(
          child: Container(
            constraints: const BoxConstraints(maxWidth: 480),
            padding: const EdgeInsets.symmetric(
              vertical: 80,
              horizontal: 20,
            ),
            child: Column(
              children: [
                Text(
                  'Patient Sign-Up',
                  style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                        fontFamily: 'Archivo',
                        fontWeight: FontWeight.w400,
                      ),
                ),
                const SizedBox(height: 4),
                Text(
                  "Let's look up your record",
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontFamily: 'Inter',
                      ),
                ),
                const SizedBox(height: 40),
                Form(
                  child: Column(
                    children: [
                      CustomTextField(
                        icon: Icons.calendar_today,
                        hintText: 'Date of Birth',
                      ),
                      const SizedBox(height: 17),
                      CustomTextField(
                        icon: Icons.location_on,
                        hintText: 'Your zip code',
                      ),
                      const SizedBox(height: 17),
                      CustomTextField(
                        icon: Icons.phone,
                        hintText: 'Your phone number',
                      ),
                      const SizedBox(height: 25),
                      CustomButton(
                        text: 'Submit',
                        onPressed: () {
                          // Handle submit action
                        },
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 13),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Already registered?',
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                    TextButton(
                      onPressed: () {
                        // Handle login action
                      },
                      child: Text(
                        'Log In',
                        style: TextStyle(
                          color: Theme.of(context).primaryColor,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
