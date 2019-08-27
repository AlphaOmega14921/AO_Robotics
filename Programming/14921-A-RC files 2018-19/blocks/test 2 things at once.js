var Reverse;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  Reverse = 0;
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      if (gamepad1.getRightTrigger() == 0 && gamepad1.getRightBumper() == false) {
        MainArmRight.setDualPower(0, MainArmLeft, 0);
      }
      if (gamepad1.getRightTrigger() > 0) {
        MainArmRight.setDualPower(1, MainArmLeft, -1);
      }
      if (gamepad1.getRightBumper() == true) {
        MainArmRight.setDualPower(-1, MainArmLeft, 1);
      }
      if (gamepad1.getBack()) {
        Reverse = 1;
      }
      if (gamepad1.getStart()) {
        Reverse = 0;
      }
      if (Reverse == 0) {
        if (gamepad1.getLeftStickY() > 0.5) {
          RFdrive.setDualPower(-0.9, LFdrive, 0.9);
          RBdrive.setDualPower(-0.9, LBdrive, 0.9);
        }
        if (gamepad1.getLeftStickY() < -0.5) {
          RFdrive.setDualPower(0.9, LFdrive, -0.9);
          RBdrive.setDualPower(0.9, LBdrive, -0.9);
        }
        if (gamepad1.getLeftStickX() > 0.5) {
          RFdrive.setDualPower(-0.9, LFdrive, -0.9);
          RBdrive.setDualPower(-0.9, LBdrive, -0.9);
        }
        if (gamepad1.getLeftStickX() < -0.5) {
          RFdrive.setDualPower(0.9, LFdrive, 0.9);
          RBdrive.setDualPower(0.9, LBdrive, 0.9);
        }
        if (gamepad1.getLeftStickY() <= 0.5 && gamepad1.getLeftStickY() >= -0.5 && gamepad1.getLeftStickX() <= 0.5 && gamepad1.getLeftStickX() >= -0.5) {
          RFdrive.setDualPower(0, LFdrive, 0);
          RBdrive.setDualPower(0, LBdrive, 0);
        }
      }
      if (Reverse == 1) {
        if (gamepad1.getLeftStickY() > 0.5) {
          RFdrive.setDualPower(0.9, LFdrive, -0.9);
          RBdrive.setDualPower(0.9, LBdrive, -0.9);
        }
        if (gamepad1.getLeftStickY() < -0.5) {
          RFdrive.setDualPower(-0.9, LFdrive, 0.9);
          RBdrive.setDualPower(-0.9, LBdrive, 0.9);
        }
        if (gamepad1.getLeftStickX() > 0.5) {
          RFdrive.setDualPower(-0.9, LFdrive, -0.9);
          RBdrive.setDualPower(-0.9, LBdrive, -0.9);
        }
        if (gamepad1.getLeftStickX() < -0.5) {
          RFdrive.setDualPower(0.9, LFdrive, 0.9);
          RBdrive.setDualPower(0.9, LBdrive, 0.9);
        }
        if (gamepad1.getLeftStickY() <= 0.5 && gamepad1.getLeftStickY() >= -0.5 && gamepad1.getLeftStickX() <= 0.5 && gamepad1.getLeftStickX() >= -0.5) {
          RFdrive.setDualPower(0, LFdrive, 0);
          RBdrive.setDualPower(0, LBdrive, 0);
        }
      }
      telemetry.update();
    }
  }
}
