import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:portfolio/widgets/portfolio_text_form_field.dart';

import '../constants/border_styles.dart';
import '../constants/colors.dart';
import '../constants/constants.dart';
import '../constants/image_paths.dart';
import '../constants/text_logs.dart';
import '../controllers/form_fields_controller.dart';
import 'a_text_button.dart';

class ContactForm extends GetView<FormFieldsController> {
  const ContactForm({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    return Form(
      key: controller.formKey,
      autovalidateMode: AutovalidateMode.disabled,
      child: Wrap(
        alignment: WrapAlignment.center,
        spacing: kDefaultPadding * 2.5,
        runSpacing: kDefaultPadding * 1.5,
        children: [
          PortfolioTextFormField(
            controller: controller.nameController,
            labelText: 'Your Name',
            hintText: 'Enter your name',
            validator: (v) {
              if (v!.isEmpty) {
                return '';
              }
              return null;
            },
          ),
          PortfolioTextFormField(
            controller: controller.emailController,
            labelText: 'Email Address',
            hintText: 'Enter your email address',
            validator: (v) {
              if (v!.isEmpty || !RegExp(emailRegExp).hasMatch(v)) {
                return '';
              }
              return null;
            },
          ),
          SizedBox(
            child: TextFormField(
              controller: controller.messageController,
              maxLines: 7,
              minLines: 5,
              validator: (v) {
                if (v!.isEmpty) {
                  return ' ';
                }
                return null;
              },
              decoration: InputDecoration(
                enabledBorder: theme.brightness == Brightness.light
                    ? outlineInputBorder
                    : outlineInputBorderDark,
                focusedBorder: theme.brightness == Brightness.light
                    ? outlineInputBorder
                    : outlineInputBorderDark,
                labelText: 'Message Me',
                hintText: 'Write some message',
              ),
            ),
          ),
          SizedBox(height: kDefaultPadding * 2),
          Center(
            child: FittedBox(
              child: ATextButton(
                width: 225,
                imageSrc: iconContactPic,
                text: 'Contact Me!',
                press: () {
                  FocusScope.of(context).unfocus();
                  controller.submitFormValues();
                  controller.uploadDatatoFirestore(
                      controller.nameController.text,
                      controller.emailController.text,
                      controller.messageController.text);
                },
              ),
            ),
          ),
        ],
      ),
    );
  }
}
