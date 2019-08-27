var Gyro_Heading;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  androidSoundPoolAccess.initialize();
  linearOpMode.waitForStart();
  ColorSensor.enableLed(false);
  linearOpMode.sleep(500);
  ColorSensor.enableLed(true);
  _180Servo1.scaleRange(0, 1);
  _180Servo2.scaleRange(0, 1);
  Colorsensorarm.scaleRange(0, 1);
  _180Servo1.setPosition(0.5);
  _180Servo2.setPosition(0.4);
  Colorsensorarm.setPosition(0.25);
  while (linearOpMode.opModeIsActive()) {
    if (gamepad1.getRightTrigger() > 0) {
      if (_180Servo1.getPosition() == 0.5 && _180Servo2.getPosition() == 0.4) {
        _180Servo1.setPosition(0.75);
        _180Servo2.setPosition(0.15);
        linearOpMode.sleep(500);
      } else if (_180Servo1.getPosition() == 0.75 && _180Servo2.getPosition() == 0.15) {
        _180Servo1.setPosition(0.5);
        _180Servo2.setPosition(0.4);
        linearOpMode.sleep(500);
      }
    }
    if (gamepad1.getLeftTrigger() > 0) {
      if (Colorsensorarm.getPosition() == 0.25) {
        Colorsensorarm.setPosition(0.875);
        linearOpMode.sleep(500);
      } else if (Colorsensorarm.getPosition() == 0.875) {
        Colorsensorarm.setPosition(0.25);
        linearOpMode.sleep(500);
      }
    }
    if (gamepad1.getA()) {
      if (ColorSensor.getRed() >= 1 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() == 0) {
        linearOpMode.sleep(1000);
        if (ColorSensor.getRed() >= 1 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() == 0) {
          androidSoundPoolAccess.play('red.wav');
        }
      }
      if (ColorSensor.getRed() == 0 && ColorSensor.getBlue() >= 1 && ColorSensor.getGreen() == 0) {
        linearOpMode.sleep(1000);
        if (ColorSensor.getRed() == 0 && ColorSensor.getBlue() >= 1 && ColorSensor.getGreen() == 0) {
          androidSoundPoolAccess.play('blue.wav');
        }
      }
      if (ColorSensor.getRed() == 0 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() >= 1) {
        linearOpMode.sleep(1000);
        if (ColorSensor.getRed() == 0 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() >= 1) {
          androidSoundPoolAccess.play('green.wav');
        }
      }
      if (ColorSensor.getRed() >= 1 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() >= 1) {
        linearOpMode.sleep(1000);
        if (ColorSensor.getRed() >= 1 && ColorSensor.getBlue() == 0 && ColorSensor.getGreen() >= 1) {
          androidSoundPoolAccess.play('yellow.wav');
        }
      }
    }
    if (gamepad1.getLeftStickY() < 0.1 && gamepad1.getLeftStickY() > -0.1 && gamepad1.getLeftStickX() < 0.1 && gamepad1.getLeftStickX() > -0.1) {
      Rdrive.setPower(0);
      Ldrive.setPower(0);
    }
    if (gamepad1.getLeftStickY() < 0.1 && gamepad1.getLeftStickY() > -0.1 && gamepad1.getLeftStickX() > 0.1) {
      Rdrive.setPower(0);
      Ldrive.setPower(0);
    }
    if (gamepad1.getLeftStickY() < 0.1 && gamepad1.getLeftStickY() > -0.1 && gamepad1.getLeftStickX() < -0.1) {
      Rdrive.setPower(0);
      Ldrive.setPower(0);
    }
    if (gamepad1.getLeftStickY() > 0.1 && gamepad1.getLeftStickX() > 0.1) {
      Rdrive.setPower(1 - gamepad1.getLeftStickX());
      Ldrive.setPower(-1);
    }
    if (gamepad1.getLeftStickX() < 0.1 && gamepad1.getLeftStickX() > -0.1 && gamepad1.getLeftStickY() > 0.1) {
      Rdrive.setPower(1);
      Ldrive.setPower(-1);
    }
    if (gamepad1.getLeftStickY() > 0.1 && gamepad1.getLeftStickX() < -0.1) {
      Rdrive.setPower(1);
      Ldrive.setPower(-(1 - -gamepad1.getLeftStickX()));
    }
    if (gamepad1.getLeftStickY() < -0.1 && gamepad1.getLeftStickX() < -0.1) {
      Rdrive.setPower(-1);
      Ldrive.setPower(1 - -gamepad1.getLeftStickX());
    }
    if (gamepad1.getLeftStickX() < 0.1 && gamepad1.getLeftStickX() > -0.1 && gamepad1.getLeftStickY() < -0.1) {
      Rdrive.setPower(-1);
      Ldrive.setPower(1);
    }
    if (gamepad1.getLeftStickY() < -0.1 && gamepad1.getLeftStickX() > 0.1) {
      Rdrive.setPower(-(1 - gamepad1.getLeftStickX()));
      Ldrive.setPower(1);
    }
    telemetry.addNumericData('Red', ColorSensor.getRed());
    telemetry.addNumericData('Blue', ColorSensor.getBlue());
    telemetry.addNumericData('Green', ColorSensor.getGreen());
    telemetry.update();
  }
}
