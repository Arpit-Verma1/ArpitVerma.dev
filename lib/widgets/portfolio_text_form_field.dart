import 'package:flutter/material.dart';
import 'package:portfolio/constants/colors.dart';

import '../constants/border_styles.dart';

class PortfolioTextFormField extends StatelessWidget {
  const PortfolioTextFormField({
    Key? key,
    required this.labelText,
    required this.hintText,
    required this.validator,
    required this.controller,
  }) : super(key: key);

  final String labelText, hintText;
  final FormFieldValidator<String>? validator;
  final TextEditingController? controller;

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    return SizedBox(
      width: 400,
      child: TextFormField(
        controller: controller,
        validator: validator,
        decoration: InputDecoration(
          labelText: labelText,
          hintText: hintText,
          enabledBorder: theme.brightness == Brightness.light
              ? outlineInputBorder
              : outlineInputBorderDark,
          focusedBorder: theme.brightness == Brightness.light
              ? outlineInputBorder
              : outlineInputBorderDark,
          helperStyle: TextStyle(
              color: theme.brightness == Brightness.light
                  ? textColorLightTheme
                  : textColorDarkTheme),
          labelStyle: TextStyle(
              color: theme.brightness == Brightness.light
                  ? textColorLightTheme
                  : textColorDarkTheme),
          hintStyle: TextStyle(
              color: theme.brightness == Brightness.light
                  ? textColorLightTheme
                  : textColorDarkTheme),
        ),
      ),
    );
  }
}
