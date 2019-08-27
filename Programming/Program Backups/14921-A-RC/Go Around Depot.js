var StartTime, Placement, blue, red, green;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  RFdrive.setDualZeroPowerBehavior("BRAKE", RBdrive, "BRAKE");
  LFdrive.setDualZeroPowerBehavior("BRAKE", LBdrive, "BRAKE");
  LFdrive.setDirection("REVERSE");
  LBdrive.setDirection("REVERSE");
  RFdrive.setDirection("FORWARD");
  RBdrive.setDirection("FORWARD");
  MainArmRight.setDirection("REVERSE");
  LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
  MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
  Servo1.scaleRange(0, 1);
  HookServo.scaleRange(0, 1);
  HookLock.scaleRange(0, 1);
  Servo1.setPosition(1);
  HookServo.setPosition(0.725);
  HookLock.setPosition(0.775);
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
    MainArmRight.setDualMode("RUN_WITHOUT_ENCODER", MainArmLeft, "RUN_WITHOUT_ENCODER");
    MainArmRight.setDualPower(-0.5, MainArmLeft, -0.5);
    HookLock.setPosition(0.9125);
    linearOpMode.sleep(500);
    MainArmRight.setDualPower(0, MainArmLeft, 0);
    MainArmRight.setDualMode("RUN_TO_POSITION", MainArmLeft, "RUN_TO_POSITION");
    MainArmRight.setDualTargetPosition(3584, MainArmLeft, 3584);
    MainArmLeft.setDualPower(0.5, MainArmRight, 0.5);
    while (!(linearOpMode.isStopRequested() || !MainArmLeft.isBusy() || !MainArmRight.isBusy())) {
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
    while (!(linearOpMode.isStopRequested() || !LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
    GyroSensor.calibrate();
    linearOpMode.sleep(250);
    HookServo.setPosition(1);
    linearOpMode.sleep(250);
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
    RFdrive.setDualTargetPosition(5355, RBdrive, 2724);
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
    Servo1.setPosition(0.5);
    linearOpMode.sleep(250);
    LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(746, RBdrive, -746);
    LFdrive.setDualTargetPosition(746, RFdrive, -746);
    LBdrive.setDualPower(0.5, RBdrive, -0.5);
    LFdrive.setDualPower(0.5, RFdrive, -0.5);
    while (!(linearOpMode.isStopRequested() || !LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
    LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
    LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(3550, RBdrive, 3550);
    LFdrive.setDualTargetPosition(3550, RFdrive, 3550);
    LBdrive.setDualPower(1, RBdrive, 0.9);
    LFdrive.setDualPower(1, RFdrive, 0.9);
    while (!(linearOpMode.isStopRequested() || !LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
  }
}
