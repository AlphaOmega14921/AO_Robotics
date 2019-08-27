/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  androidSoundPoolAccess.initialize();
  ColorSensor.enableLed(false);
  linearOpMode.sleep(1000);
  Colorsensorarm.scaleRange(0, 1);
  _180Servo1.scaleRange(0, 1);
  _180Servo2.scaleRange(0, 1);
  _180Servo1.setPosition(0.5);
  _180Servo2.setPosition(0.4);
  Colorsensorarm.setPosition(0.25);
  ColorSensor.enableLed(true);
  linearOpMode.waitForStart();
  while (linearOpMode.opModeIsActive()) {
    telemetry.addNumericData('Red', ColorSensor.getRed());
    telemetry.addNumericData('Blue', ColorSensor.getBlue());
    telemetry.addNumericData('Green', ColorSensor.getGreen());
    telemetry.update();
    if (ColorSensor.getRed() >= 1 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() == 0) {
      linearOpMode.sleep(1000);
      if (ColorSensor.getRed() >= 1 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() == 0) {
        androidSoundPoolAccess.play('red.wav');
        while (ColorSensor.getRed() >= 1 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() == 0) {
          telemetry.addNumericData('Red', ColorSensor.getRed());
          telemetry.addNumericData('Blue', ColorSensor.getBlue());
          telemetry.addNumericData('Green', ColorSensor.getGreen());
          telemetry.update();
        }
      }
    }
    if (ColorSensor.getRed() == 0 && ColorSensor.getBlue() >= 1 && ColorSensor.getGreen() == 0) {
      linearOpMode.sleep(1000);
      if (ColorSensor.getRed() == 0 && ColorSensor.getBlue() >= 1 && ColorSensor.getGreen() == 0) {
        androidSoundPoolAccess.play('blue.wav');
        while (ColorSensor.getRed() == 0 && ColorSensor.getBlue() >= 1 && ColorSensor.getGreen() == 0) {
          telemetry.addNumericData('Red', ColorSensor.getRed());
          telemetry.addNumericData('Blue', ColorSensor.getBlue());
          telemetry.addNumericData('Green', ColorSensor.getGreen());
          telemetry.update();
        }
      }
    }
    if (ColorSensor.getRed() == 0 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() >= 1) {
      linearOpMode.sleep(1000);
      if (ColorSensor.getRed() == 0 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() >= 1) {
        androidSoundPoolAccess.play('green.wav');
        while (ColorSensor.getRed() == 0 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() >= 1) {
          telemetry.addNumericData('Red', ColorSensor.getRed());
          telemetry.addNumericData('Blue', ColorSensor.getBlue());
          telemetry.addNumericData('Green', ColorSensor.getGreen());
          telemetry.update();
        }
      }
    }
    if (ColorSensor.getRed() >= 1 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() >= 1) {
      linearOpMode.sleep(1000);
      if (ColorSensor.getRed() >= 1 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() >= 1) {
        androidSoundPoolAccess.play('yellow.wav');
        while (ColorSensor.getRed() >= 1 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() >= 1) {
          telemetry.addNumericData('Red', ColorSensor.getRed());
          telemetry.addNumericData('Blue', ColorSensor.getBlue());
          telemetry.addNumericData('Green', ColorSensor.getGreen());
          telemetry.update();
        }
      }
    }
  }
}
