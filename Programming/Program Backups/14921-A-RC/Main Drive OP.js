var Reverse, Servo_Disable, x_value;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  androidSoundPoolAccess.initialize();
  androidSoundPoolAccess.setVolume(1);
  Servo1.scaleRange(0, 1);
  HookServo.scaleRange(0, 1);
  HookLock.scaleRange(0, 1);
  ColorSensorservo.scaleRange(0, 1);
  RFdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", LBdrive, "STOP_AND_RESET_ENCODER");
  MainArmRight.setDualMode("RUN_WITHOUT_ENCODER", MainArmLeft, "RUN_WITHOUT_ENCODER");
  RFdrive.setDualMode("RUN_WITHOUT_ENCODER", RBdrive, "RUN_WITHOUT_ENCODER");
  LFdrive.setDualMode("RUN_WITHOUT_ENCODER", LBdrive, "RUN_WITHOUT_ENCODER");
  Servo1.setPosition(1);
  HookServo.setPosition(0.725);
  HookLock.setPosition(0.775);
  ColorSensorservo.setPosition(0.325);
  Reverse = 0;
  Servo_Disable = 0;
  x_value = 1;
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive() && androidSoundPoolAccess.preloadSound('Screaming Sheep.wav')) {
      if (gamepad1.getGuide()) {
        androidSoundPoolAccess.play('Screaming Sheep.wav');
      }
      if (gamepad1.getBack()) {
        if (Reverse == 0) {
          Reverse = 1;
          linearOpMode.sleep(1000);
        } else if (Reverse == 1) {
          Reverse = 0;
          linearOpMode.sleep(1000);
        }
      }
      if (gamepad1.getA()) {
        Servo1.setPosition(0.5);
        linearOpMode.sleep(2000);
        Servo1.setPosition(1);
      }
      if (gamepad1.getB()) {
        if (ColorSensorservo.getPosition() == 1) {
          ColorSensorservo.setPosition(0.325);
          linearOpMode.sleep(1000);
        } else if (ColorSensorservo.getPosition() == 0.325) {
          ColorSensorservo.setPosition(1);
          linearOpMode.sleep(1000);
        }
      }
      if (gamepad1.getX()) {
        if (HookServo.getPosition() == 0.9) {
          HookServo.setPosition(0.725);
          linearOpMode.sleep(1000);
        } else if (HookServo.getPosition() == 0.725) {
          HookServo.setPosition(0.9);
          linearOpMode.sleep(1000);
        }
      }
      if (gamepad1.getY()) {
        if (HookLock.getPosition() == 0.905) {
          HookLock.setPosition(0.775);
          linearOpMode.sleep(1000);
        } else if (HookLock.getPosition() == 0.775) {
          HookLock.setPosition(0.905);
          linearOpMode.sleep(1000);
        }
      }
      if (gamepad1.getDpadDown()) {
        if (x_value == 1) {
          x_value = -1;
        } else if (x_value == -1) {
          x_value = 1;
        }
      }
      if (gamepad1.getDpadUp() == 0 && gamepad1.getDpadLeft() == 0 && gamepad1.getDpadRight() == 0) {
        hopperL.setPower(0);
        hopperR.setPower(0);
      }
      if (gamepad1.getDpadUp()) {
        hopperL.setPower(x_value);
        hopperR.setPower(-x_value);
      }
      if (gamepad1.getDpadLeft()) {
        hopperL.setPower(x_value);
      }
      if (gamepad1.getDpadRight()) {
        hopperR.setPower(-x_value);
      }
      if (gamepad1.getRightTrigger() == 0 && gamepad1.getRightBumper() == false) {
        MainArmRight.setDualPower(0, MainArmLeft, 0);
      }
      if (gamepad1.getRightTrigger() > 0) {
        MainArmRight.setDualPower(1, MainArmLeft, -1);
      }
      if (gamepad1.getRightBumper() == true) {
        MainArmRight.setDualPower(-1, MainArmLeft, 1);
      }
      if (Reverse == 0) {
        LFdrive.setDualPower(gamepad1.getLeftStickY(), LBdrive, gamepad1.getLeftStickY());
        RFdrive.setDualPower(-gamepad1.getRightStickY(), RBdrive, -gamepad1.getRightStickY());
      }
      if (Reverse == 1) {
        LFdrive.setDualPower(-gamepad1.getRightStickY(), LBdrive, -gamepad1.getRightStickY());
        RFdrive.setDualPower(gamepad1.getLeftStickY(), RBdrive, gamepad1.getLeftStickY());
      }
      telemetry.addNumericData('Arm Left', MainArmLeft.getCurrentPosition());
      telemetry.addNumericData('Arm Right', MainArmRight.getCurrentPosition());
      telemetry.addNumericData('RF', RFdrive.getCurrentPosition());
      telemetry.addNumericData('RB', RBdrive.getCurrentPosition());
      telemetry.addNumericData('LF', LFdrive.getCurrentPosition());
      telemetry.addNumericData('LB', LBdrive.getCurrentPosition());
      telemetry.update();
    }
  }
}
