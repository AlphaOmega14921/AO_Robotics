var x_value, Servo_Disable;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  GyroSensor.calibrate();
  while (linearOpMode.opModeIsActive()) {
    if (gamepad1.getA()) {
      GyroSensor.calibrate();
    }
    if (gamepad1.getY()) {
      LBdrive.setPower(-1);
      LFdrive.setPower(-1);
      RBdrive.setPower(-1);
      RFdrive.setPower(-1);
      while (!(GyroSensor.getHeading() >= 165)) {
      }
      LBdrive.setPower(0);
      LFdrive.setPower(0);
      RBdrive.setPower(0);
      RFdrive.setPower(0);
      GyroSensor.calibrate();
    }
    if (gamepad1.getX()) {
      LBdrive.setPower(1);
      LFdrive.setPower(1);
      RBdrive.setPower(1);
      RFdrive.setPower(1);
      while (!(GyroSensor.getHeading() <= 195 && GyroSensor.getHeading() > 0)) {
      }
      LBdrive.setPower(0);
      LFdrive.setPower(0);
      RBdrive.setPower(0);
      RFdrive.setPower(0);
      GyroSensor.calibrate();
    }
    telemetry.addNumericData('Heading', GyroSensor.getHeading());
    telemetry.update();
  }
}
