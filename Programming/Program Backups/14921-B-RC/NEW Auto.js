var StartTime, Placement, blue, red, green;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  RFdrive.setDualZeroPowerBehavior("FLOAT", RBdrive, "FLOAT");
  LFdrive.setDirection("REVERSE");
  LBdrive.setDirection("REVERSE");
  MainArmRight.setDirection("REVERSE");
  LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
  MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
  Servo1.scaleRange(0, 1);
  HookServo.scaleRange(0, 1);
  HookLock.scaleRange(0, 1);
  ColorSensorservo.scaleRange(0, 1);
  HookLock.setPosition(0.9125);
  Servo1.setPosition(1);
  HookServo.setPosition(0.9);
  ColorSensorservo.setPosition(1);
  GyroSensor.calibrate();
  HookLock.setPosition(0.775);
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(418, RBdrive, 418);
    LFdrive.setDualTargetPosition(418, RFdrive, 418);
    LBdrive.setDualPower(0.5, RBdrive, 0.5);
    LFdrive.setDualPower(0.5, RFdrive, 0.5);
    while (!(linearOpMode.isStopRequested() || !LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
    MainArmRight.setDualMode("RUN_TO_POSITION", MainArmLeft, "RUN_TO_POSITION");
    MainArmRight.setDualTargetPosition(-1873, MainArmLeft, -1873);
    MainArmLeft.setDualPower(-1, MainArmRight, -1);
    while (!(linearOpMode.isStopRequested() || !MainArmLeft.isBusy() || !MainArmRight.isBusy())) {
      telemetry.update();
    }
    MainArmLeft.setDualPower(0, MainArmRight, 0);
    LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    GyroSensor.calibrate();
    LBdrive.setDualTargetPosition(-670, RBdrive, 494);
    LFdrive.setDualTargetPosition(-738, RFdrive, 843);
    LBdrive.setDualPower(0.5, RBdrive, 0.5);
    LFdrive.setDualPower(0.5, RFdrive, 0.5);
    while (!(linearOpMode.isStopRequested() || !LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(2810, RBdrive, 2810);
    LFdrive.setDualTargetPosition(2810, RFdrive, 2810);
    LBdrive.setDualPower(0.5, RBdrive, 0.5);
    LFdrive.setDualPower(0.5, RFdrive, 0.5);
    while (!(linearOpMode.isStopRequested() || !LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    GyroSensor.calibrate();
    linearOpMode.sleep(3000);
    LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(-660, RBdrive, -660);
    LFdrive.setDualTargetPosition(-660, RFdrive, -660);
    LBdrive.setDualPower(-0.5, RBdrive, -0.5);
    LFdrive.setDualPower(-0.5, RFdrive, -0.5);
    while (!(linearOpMode.isStopRequested() || !LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    RFdrive.setDualMode("RUN_WITHOUT_ENCODER", RBdrive, "RUN_WITHOUT_ENCODER");
    LFdrive.setDualMode("RUN_WITHOUT_ENCODER", LBdrive, "RUN_WITHOUT_ENCODER");
    LBdrive.setDualPower(-0.5, RBdrive, 0.5);
    LFdrive.setDualPower(-0.5, RFdrive, 0.5);
    linearOpMode.sleep(250);
    while (!(linearOpMode.isStopRequested() || GyroSensor.getHeading() >= 43)) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    linearOpMode.sleep(3000);
    RFdrive.setDualMode("RUN_WITHOUT_ENCODER", RBdrive, "RUN_WITHOUT_ENCODER");
    LFdrive.setDualMode("RUN_WITHOUT_ENCODER", LBdrive, "RUN_WITHOUT_ENCODER");
    RFdrive.setDualPower(-0.05, RBdrive, -0.05);
    LFdrive.setDualPower(-0.05, LBdrive, -0.05);
    Placement = 1;
    while (!linearOpMode.isStopRequested()) {
      blue = ColorSensor.getBlue();
      green = ColorSensor.getGreen();
      red = ColorSensor.getRed();
      telemetry.addNumericData('Placement', Placement);
      telemetry.addNumericData('Red', ColorSensor.getRed());
      telemetry.addNumericData('Blue', ColorSensor.getBlue());
      telemetry.addNumericData('Green', ColorSensor.getGreen());
      telemetry.update();
      if (ColorSensor.getRed() >= 1) {
        break;
      }
    }
    if (blue >= 1 || green >= 1 || blue >= 1 && green >= 1) {
      Placement = 2;
    }
    if (Placement == 2) {
      while (!(linearOpMode.isStopRequested() || ColorSensor.getRed() >= 1)) {
        blue = ColorSensor.getBlue();
        green = ColorSensor.getGreen();
        red = ColorSensor.getRed();
        telemetry.addNumericData('Placement', Placement);
        telemetry.addNumericData('Red', ColorSensor.getRed());
        telemetry.addNumericData('Blue', ColorSensor.getBlue());
        telemetry.addNumericData('Green', ColorSensor.getGreen());
        telemetry.update();
      }
      if (blue >= 1 || green >= 1 || blue >= 1 && green >= 1) {
        Placement = 3;
      }
    }
    if (Placement == 3) {
      while (!(linearOpMode.isStopRequested() || ColorSensor.getRed() >= 1)) {
        telemetry.addNumericData('Placement', Placement);
        telemetry.addNumericData('Red', ColorSensor.getRed());
        telemetry.addNumericData('Blue', ColorSensor.getBlue());
        telemetry.addNumericData('Green', ColorSensor.getGreen());
        telemetry.update();
      }
    }
    RFdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, LBdrive, 0);
    telemetry.addNumericData('blue', blue);
    telemetry.addNumericData('green', green);
    telemetry.addNumericData('red', red);
    telemetry.update();
    linearOpMode.sleep(7000);
  }
}
