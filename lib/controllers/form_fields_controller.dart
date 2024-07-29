import 'dart:developer';

import 'package:cloud_firestore/cloud_firestore.dart';

import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../constants/constants.dart';

class FormFieldsController extends GetxController {
  final formKey = GlobalKey<FormState>();

  final FirebaseFirestore fireStore = FirebaseFirestore.instance;

  final TextEditingController nameController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController messageController = TextEditingController();

  submitFormValues() {
    bool passedValidation = formKey.currentState!.validate();

    if (passedValidation) {
      formKey.currentState!.save();
      Get.snackbar(
        'Submitted',
        'Thanks for your feedback, will get back to you shortly.',
        maxWidth: 450,
        duration: snackbarDuration,
        margin: EdgeInsets.only(top: kDefaultPadding),
      );
    } else {
      Get.snackbar(
        'Oops',
        'Check your inputs and try again',
        maxWidth: 450,
        duration: snackbarDuration,
        margin: EdgeInsets.only(top: kDefaultPadding),
      );
    }
  }

  uploadDatatoFirestore(String name, String email, String message) async {
    try {
      final DocumentReference documentReference = await fireStore
          .collection('contactForm')
          .add({'name': name, 'email': email, 'message': message});

      print('Document added with ID: ${documentReference.id}');
      ;
    } catch (e) {
      log(e.toString());
      Get.snackbar(
        'Error',
        'Error occured while submitting the form, try again later.',
        maxWidth: 450,
        duration: snackbarDuration,
        margin: EdgeInsets.only(top: kDefaultPadding),
      );
    }
  }
}
