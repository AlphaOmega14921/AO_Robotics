/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  androidSoundPoolAccess.initialize();
  ColorSensor.enableLed(false);
  linearOpMode.sleep(1000);
  ColorSensor.enableLed(true);
  while (linearOpMode.opModeIsActive() && androidSoundPoolAccess.preloadSound('oxp.wav')) {
    telemetry.addNumericData('Red', ColorSensor.getRed());
    telemetry.addNumericData('Blue', ColorSensor.getBlue());
    telemetry.addNumericData('Green', ColorSensor.getGreen());
    telemetry.addNumericData('Alpha', ColorSensor.getAlpha());
    telemetry.addNumericData('Argb', ColorSensor.getArbg());
    telemetry.addNumericData('I2cAddress7Bit', ColorSensor.getI2cAddress7Bit());
    telemetry.addNumericData('I2cAddress8Bit', ColorSensor.getI2cAddress8Bit());
    telemetry.update();
  }
}
