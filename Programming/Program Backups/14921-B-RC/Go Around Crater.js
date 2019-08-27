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
  Servo1.setPosition(1);
  HookServo.setPosition(0.725);
  ColorSensorservo.setPosition(0.325);
  HookLock.setPosition(0.775);
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(390, RBdrive, 390);
    LFdrive.setDualTargetPosition(390, RFdrive, 390);
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
    MainArmLeft.setDualPower(-0.75, MainArmRight, -0.75);
    while (!(linearOpMode.isStopRequested() || !MainArmLeft.isBusy() || !MainArmRight.isBusy())) {
      telemetry.update();
    }
    MainArmLeft.setDualPower(0, MainArmRight, 0);
    RFdrive.setDualMode("RUN_WITHOUT_ENCODER", RBdrive, "RUN_WITHOUT_ENCODER");
    LFdrive.setDualMode("RUN_WITHOUT_ENCODER", LBdrive, "RUN_WITHOUT_ENCODER");
    LBdrive.setDualPower(-0.75, RBdrive, 0.75);
    LFdrive.setDualPower(-0.75, RFdrive, 0.75);
    linearOpMode.sleep(250);
    while (!(linearOpMode.isStopRequested() || GyroSensor.getHeading() >= 43)) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(1435, RBdrive, 1435);
    LFdrive.setDualTargetPosition(1435, RFdrive, 1435);
    LBdrive.setDualPower(0.5, RBdrive, 0.5);
    LFdrive.setDualPower(0.5, RFdrive, 0.5);
    while (!(linearOpMode.isStopRequested() || !LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    RFdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    RFdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    RFdrive.setDualTargetPosition(4868, RBdrive, 2476);
    RBdrive.setDualPower(1, RFdrive, 1);
    while (!(linearOpMode.isStopRequested() || !RBdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    RFdrive.setDualPower(0, RBdrive, 0);
    LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(-3200, RBdrive, -3200);
    LFdrive.setDualTargetPosition(-3200, RFdrive, -3200);
    LBdrive.setDualPower(-1, RBdrive, -1);
    LFdrive.setDualPower(-1, RFdrive, -1);
    while (!(linearOpMode.isStopRequested() || !LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
  }
}
