var Reverse, Servo_Disable;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  androidSoundPoolAccess.initialize();
  Servo1.scaleRange(0, 1);
  HookServo.scaleRange(0, 1);
  GroundMover.scaleRange(0, 1);
  HookLock.scaleRange(0, 1);
  claw.scaleRange(0, 1);
  MainArmRight.setDualMode("RUN_WITHOUT_ENCODER", MainArmLeft, "RUN_WITHOUT_ENCODER");
  Servo1.setPosition(1);
  HookServo.setPosition(0.9);
  GroundMover.setPosition(1);
  HookLock.setPosition(0.9125);
  claw.setPosition(1);
  Reverse = 0;
  Servo_Disable = 0;
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive() && androidSoundPoolAccess.preloadSound('Screaming Sheep.wav')) {
      while (linearOpMode.opModeIsActive()) {
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
        if (gamepad1.getStart()) {
          if (MainArmRight.getCurrentPosition() > -3746) {
            MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
            MainArmRight.setDualMode("RUN_TO_POSITION", MainArmLeft, "RUN_TO_POSITION");
            MainArmRight.setDualTargetPosition(-3746, MainArmLeft, 3746);
            MainArmLeft.setDualPower(0.4, MainArmRight, -0.4);
            while (!(!MainArmRight.isBusy() || MainArmRight.getCurrentPosition() <= -3746)) {
              telemetry.addNumericData('Arm Right', MainArmRight.getCurrentPosition());
              telemetry.update();
            }
            MainArmLeft.setDualPower(0, MainArmRight, 0);
            MainArmRight.setDualMode("RUN_USING_ENCODER", MainArmLeft, "RUN_USING_ENCODER");
          } else if (MainArmRight.getCurrentPosition() < -3746) {
            RFdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
            MainArmRight.setDualTargetPosition(-3746, MainArmLeft, 3746);
            MainArmLeft.setDualPower(-0.4, MainArmRight, 0.4);
            while (!(!MainArmRight.isBusy() || MainArmRight.getCurrentPosition() >= -3746)) {
              telemetry.addNumericData('Arm Right', MainArmRight.getCurrentPosition());
              telemetry.update();
            }
            MainArmLeft.setDualPower(0, MainArmRight, 0);
            RFdrive.setDualMode("RUN_USING_ENCODER", RBdrive, "RUN_USING_ENCODER");
          }
        }
        if (gamepad1.getA()) {
          Servo1.setPosition(0.5);
          linearOpMode.sleep(2000);
          Servo1.setPosition(1);
        }
        if (gamepad1.getB()) {
          if (GroundMover.getPosition() == 1) {
            GroundMover.setPosition(0);
            linearOpMode.sleep(1000);
          } else if (GroundMover.getPosition() == 0) {
            GroundMover.setPosition(1);
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
          if (HookLock.getPosition() == 0.9125) {
            HookLock.setPosition(0.775);
            linearOpMode.sleep(1000);
          } else if (HookLock.getPosition() == 0.775) {
            HookLock.setPosition(0.9125);
            linearOpMode.sleep(1000);
          }
        }
        if (gamepad1.getLeftTrigger() > 0) {
          if (claw.getPosition() == 1) {
            claw.setPosition(0.665);
            linearOpMode.sleep(1000);
          } else if (claw.getPosition() == 0.665) {
            claw.setPosition(1);
            linearOpMode.sleep(1000);
          }
        }
        if (gamepad1.getLeftBumper()) {
          if (claw.getPosition() == 1) {
            claw.setPosition(0.865);
            linearOpMode.sleep(1000);
          } else if (claw.getPosition() == 0.865) {
            claw.setPosition(1);
            linearOpMode.sleep(1000);
          }
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
        telemetry.update();
      }
    }
  }
}
