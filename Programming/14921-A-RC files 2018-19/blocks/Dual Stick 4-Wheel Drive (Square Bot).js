var Gyro_Heading;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  _180Servo1.scaleRange(0, 1);
  _180Servo2.scaleRange(0, 1);
  _180Servo1.setPosition(0.2);
  _180Servo2.setPosition(0.8);
  while (linearOpMode.opModeIsActive()) {
    if (gamepad1.getB()) {
      _180Servo1.setPosition(0.2);
      _180Servo2.setPosition(0.8);
    }
    if (gamepad1.getA()) {
      _180Servo1.setPosition(1);
      _180Servo2.setPosition(0);
    }
    LFdrive.setDualPower(-gamepad1.getLeftStickY(), LBdrive, -gamepad1.getLeftStickY());
    RFdrive.setDualPower(gamepad1.getRightStickY(), RBdrive, gamepad1.getRightStickY());
    telemetry.addNumericData('Right Foward', RFdrive.getPower());
    telemetry.addNumericData('Right Back', RBdrive.getPower());
    telemetry.addNumericData('Left Foward', LFdrive.getPower());
    telemetry.addNumericData('Left Backward', LBdrive.getPower());
    telemetry.update();
  }
}


_180Servo1.scaleRange(0, 1);
_180Servo2.scaleRange(0, 1);
_180Servo1.setPosition(1);
_180Servo2.setPosition(0);
if (gamepad1.getA()) {
  _180Servo1.setPosition(0);
  while (!(gamepad1.getA() == 0)) {
  }
  _180Servo1.setPosition(1);
}
if (gamepad1.getB()) {
  _180Servo2.setPosition(1);
  while (!(gamepad1.getB() == 0)) {
  }
  _180Servo2.setPosition(0);
}

while (linearOpMode.opModeIsActive()) {
  while (!gamepad1.getDpadUp()) {
  }
  while (!gamepad1.getDpadUp()) {
  }
  while (!gamepad1.getDpadDown()) {
  }
  while (!gamepad1.getDpadDown()) {
  }
  while (!gamepad1.getDpadLeft()) {
  }
  while (!gamepad1.getDpadRight()) {
  }
  while (!gamepad1.getDpadLeft()) {
  }
  while (!gamepad1.getDpadRight()) {
  }
  while (!gamepad1.getB()) {
  }
  while (!gamepad1.getA()) {
  }
  while (!gamepad1.getStart()) {
  }
  break;
}
