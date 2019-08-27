var StartTime;

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
  GroundMover.scaleRange(0, 1);
  claw.scaleRange(0, 1);
  HookLock.setPosition(0.775);
  Servo1.setPosition(1);
  HookServo.setPosition(0.725);
  GroundMover.setPosition(1);
  claw.setPosition(1);
  GyroSensor.calibrate();
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    MainArmRight.setDualMode("RUN_WITHOUT_ENCODER", MainArmLeft, "RUN_WITHOUT_ENCODER");
    MainArmRight.setDualPower(-0.5, MainArmLeft, -0.5);
    HookLock.setPosition(0.9125);
    linearOpMode.sleep(500);
    MainArmRight.setDualPower(0, MainArmLeft, 0);
    MainArmRight.setDualMode("RUN_TO_POSITION", MainArmLeft, "RUN_TO_POSITION");
    MainArmRight.setDualTargetPosition(3398, MainArmLeft, 3398);
    MainArmLeft.setDualPower(0.5, MainArmRight, 0.5);
    while (!(!MainArmLeft.isBusy() || !MainArmRight.isBusy())) {
      telemetry.update();
    }
    MainArmLeft.setDualPower(0, MainArmRight, 0);
    linearOpMode.sleep(500);
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(-746, RBdrive, -746);
    LFdrive.setDualTargetPosition(-746, RFdrive, -746);
    LBdrive.setDualPower(-0.5, RBdrive, -0.5);
    LFdrive.setDualPower(-0.5, RFdrive, -0.5);
    while (!(!LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
    GyroSensor.calibrate();
    linearOpMode.sleep(1500);
    HookServo.setPosition(0.9);
    linearOpMode.sleep(500);
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(746, RBdrive, 746);
    LFdrive.setDualTargetPosition(746, RFdrive, 746);
    LBdrive.setDualPower(0.75, RBdrive, 0.75);
    LFdrive.setDualPower(0.75, RFdrive, 0.75);
    while (!(!LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    LBdrive.setDualMode("RUN_WITHOUT_ENCODER", RBdrive, "RUN_WITHOUT_ENCODER");
    LFdrive.setDualMode("RUN_WITHOUT_ENCODER", RFdrive, "RUN_WITHOUT_ENCODER");
    LBdrive.setDualPower(-0.75, RBdrive, 0.75);
    LFdrive.setDualPower(-0.75, RFdrive, 0.75);
    linearOpMode.sleep(1500);
    while (!(GyroSensor.getHeading() >= 180)) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(-2611, RBdrive, -2611);
    LFdrive.setDualTargetPosition(-2611, RFdrive, -2611);
    LBdrive.setDualPower(-1, RBdrive, -1);
    LFdrive.setDualPower(-1, RFdrive, -1);
    while (!(!LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    Servo1.setPosition(1);
    linearOpMode.sleep(500);
    Servo1.setPosition(0);
    LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(2611, RBdrive, 2611);
    LFdrive.setDualTargetPosition(2611, RFdrive, 2611);
    LBdrive.setDualPower(1, RBdrive, 1);
    LFdrive.setDualPower(1, RFdrive, 1);
    StartTime = linearOpMode.getRuntime();
    while (!(!LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
  }
}
