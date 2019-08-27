/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  ColorSensor.enableLed(false);
  linearOpMode.sleep(1000);
  ColorSensor.enableLed(true);
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      telemetry.addNumericData('Red', ColorSensor.getRed());
      telemetry.addNumericData('Green', ColorSensor.getGreen());
      telemetry.addNumericData('Blue', ColorSensor.getBlue());
      telemetry.update();
      if (gamepad1.getBack()) {
        ColorSensor.enableLed(false);
      }
      if (gamepad1.getStart()) {
        ColorSensor.enableLed(true);
      }
    }
  }
}
