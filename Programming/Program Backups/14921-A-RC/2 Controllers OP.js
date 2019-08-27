var Controller_Switch, Reverse, Servo_Disable, x_value;

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
  MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
  MainArmRight.setDualMode("RUN_USING_ENCODER", MainArmLeft, "RUN_USING_ENCODER");
  Servo1.setPosition(1);
  HookServo.setPosition(0.725);
  HookLock.setPosition(0.775);
  ColorSensorservo.setPosition(0.325);
  Reverse = 0;
  Servo_Disable = 0;
  Controller_Switch = 1;
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive() && androidSoundPoolAccess.preloadSound('Windows Logon Sound.wav')) {
      if (gamepad1.getGuide() && gamepad2.getGuide()) {
        if (Controller_Switch == 1) {
          Controller_Switch = 2;
          androidSoundPoolAccess.play('Windows Logon Sound.wav');
          linearOpMode.sleep(1000);
        } else if (Controller_Switch == 2) {
          Controller_Switch = 1;
          androidSoundPoolAccess.play('Windows Logon Sound.wav');
          linearOpMode.sleep(1000);
        }
      }
      if (Controller_Switch == 1) {
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
        if (gamepad2.getLeftBumper() == false && gamepad2.getLeftTrigger() == 0) {
          hopperL.setPower(0);
        }
        if (gamepad2.getLeftBumper() == true) {
          hopperL.setPower(1);
        }
        if (gamepad2.getLeftTrigger() > 0) {
          hopperL.setPower(-1);
        }
        if (gamepad2.getRightBumper() == false && gamepad2.getRightTrigger() == 0) {
          hopperR.setPower(0);
        }
        if (gamepad2.getRightBumper() == true) {
          hopperR.setPower(-1);
        }
        if (gamepad2.getRightTrigger() > 0) {
          hopperR.setPower(1);
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
      } else if (Controller_Switch == 2) {
        if (gamepad2.getBack()) {
          if (Reverse == 0) {
            Reverse = 1;
            linearOpMode.sleep(1000);
          } else if (Reverse == 1) {
            Reverse = 0;
            linearOpMode.sleep(1000);
          }
        }
        if (gamepad2.getA()) {
          Servo1.setPosition(0.5);
          linearOpMode.sleep(2000);
          Servo1.setPosition(1);
        }
        if (gamepad2.getB()) {
          if (ColorSensorservo.getPosition() == 1) {
            ColorSensorservo.setPosition(0.325);
            linearOpMode.sleep(1000);
          } else if (ColorSensorservo.getPosition() == 0.325) {
            ColorSensorservo.setPosition(1);
            linearOpMode.sleep(1000);
          }
        }
        if (gamepad2.getX()) {
          if (HookServo.getPosition() == 0.9) {
            HookServo.setPosition(0.725);
            linearOpMode.sleep(1000);
          } else if (HookServo.getPosition() == 0.725) {
            HookServo.setPosition(0.9);
            linearOpMode.sleep(1000);
          }
        }
        if (gamepad2.getY()) {
          if (HookLock.getPosition() == 0.905) {
            HookLock.setPosition(0.775);
            linearOpMode.sleep(1000);
          } else if (HookLock.getPosition() == 0.775) {
            HookLock.setPosition(0.905);
            linearOpMode.sleep(1000);
          }
        }
        if (gamepad1.getLeftBumper() == false && gamepad1.getLeftTrigger() == 0) {
          hopperL.setPower(0);
        }
        if (gamepad1.getLeftBumper() == true) {
          hopperL.setPower(1);
        }
        if (gamepad1.getLeftTrigger() > 0) {
          hopperL.setPower(-1);
        }
        if (gamepad1.getRightBumper() == false && gamepad1.getRightTrigger() == 0) {
          hopperR.setPower(0);
        }
        if (gamepad1.getRightBumper() == true) {
          hopperR.setPower(-1);
        }
        if (gamepad1.getRightTrigger() > 0) {
          hopperR.setPower(1);
        }
        if (gamepad2.getRightTrigger() == 0 && gamepad2.getRightBumper() == false) {
          MainArmRight.setDualPower(0, MainArmLeft, 0);
        }
        if (gamepad2.getRightTrigger() > 0) {
          MainArmRight.setDualPower(1, MainArmLeft, -1);
        }
        if (gamepad2.getRightBumper() == true) {
          MainArmRight.setDualPower(-1, MainArmLeft, 1);
        }
        if (Reverse == 0) {
          LFdrive.setDualPower(gamepad2.getLeftStickY(), LBdrive, gamepad2.getLeftStickY());
          RFdrive.setDualPower(-gamepad2.getRightStickY(), RBdrive, -gamepad2.getRightStickY());
        }
        if (Reverse == 1) {
          LFdrive.setDualPower(-gamepad2.getRightStickY(), LBdrive, -gamepad2.getRightStickY());
          RFdrive.setDualPower(gamepad2.getLeftStickY(), RBdrive, gamepad2.getLeftStickY());
        }
      }
      telemetry.addNumericData('Main Controller', Controller_Switch);
      telemetry.addNumericData('Arm Left', MainArmLeft.getCurrentPosition());
      telemetry.addNumericData('Arm Right', MainArmRight.getCurrentPosition());
      telemetry.update();
    }
  }
}
