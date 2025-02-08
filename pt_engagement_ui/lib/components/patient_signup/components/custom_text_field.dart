import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget {
  final IconData icon;
  final String hintText;

  const CustomTextField({
    super.key,
    required this.icon,
    required this.hintText,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFF3F4F6),
        borderRadius: BorderRadius.circular(6),
      ),
      child: TextFormField(
        decoration: InputDecoration(
          prefixIcon: Icon(icon, color: const Color(0xFFBCC1CA)),
          hintText: hintText,
          hintStyle: const TextStyle(color: Color(0xFFBCC1CA)),
          border: InputBorder.none,
          contentPadding: const EdgeInsets.symmetric(
            vertical: 12,
            horizontal: 16,
          ),
        ),
      ),
    );
  }
}
