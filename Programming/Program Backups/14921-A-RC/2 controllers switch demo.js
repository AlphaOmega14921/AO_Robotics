var Controller_Switch, Reverse;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  Controller_Switch = 1;
  Reverse = 0;
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      if (gamepad1.getGuide() || gamepad2.getGuide()) {
        if (Controller_Switch == 1) {
          Controller_Switch = 2;
          linearOpMode.sleep(1000);
        } else if (Controller_Switch == 2) {
          Controller_Switch = 1;
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
      telemetry.update();
    }
  }
}
