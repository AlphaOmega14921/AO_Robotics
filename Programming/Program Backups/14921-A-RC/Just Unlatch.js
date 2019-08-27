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
  ColorSensorservo.scaleRange(0, 1);
  HookLock.setPosition(0.9125);
  Servo1.setPosition(1);
  HookServo.setPosition(0.725);
  ColorSensorservo.setPosition(0.325);
  GyroSensor.calibrate();
  MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
  MainArmRight.setDualMode("RUN_TO_POSITION", MainArmLeft, "RUN_TO_POSITION");
  MainArmRight.setDualTargetPosition(-3746, MainArmLeft, -3746);
  MainArmLeft.setDualPower(-1, MainArmRight, -1);
  while (!(linearOpMode.isStopRequested() || !MainArmLeft.isBusy() || !MainArmRight.isBusy())) {
    telemetry.update();
  }
  MainArmLeft.setDualPower(0, MainArmRight, 0);
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
    HookServo.setPosition(0.9);
    linearOpMode.sleep(250);
    LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
    LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
    LBdrive.setDualTargetPosition(373, RBdrive, 373);
    LFdrive.setDualTargetPosition(373, RFdrive, 373);
    LBdrive.setDualPower(0.5, RBdrive, 0.5);
    LFdrive.setDualPower(0.5, RFdrive, 0.5);
    while (!(linearOpMode.isStopRequested() || !LBdrive.isBusy() || !RBdrive.isBusy() || !LFdrive.isBusy() || !RFdrive.isBusy())) {
      telemetry.update();
    }
    LBdrive.setDualPower(0, RBdrive, 0);
    LFdrive.setDualPower(0, RFdrive, 0);
  }
}
