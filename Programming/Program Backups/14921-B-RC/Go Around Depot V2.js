var StartTime, Placement, blue, red, green;

/**
 * Describe this function...
 */
function initialize_motors() {
  RFdrive.setDualZeroPowerBehavior("BRAKE", RBdrive, "BRAKE");
  LFdrive.setDualZeroPowerBehavior("BRAKE", LBdrive, "BRAKE");
  MainArmRight.setDualZeroPowerBehavior("BRAKE", MainArmLeft, "BRAKE");
  LFdrive.setDirection("REVERSE");
  LBdrive.setDirection("REVERSE");
  RFdrive.setDirection("FORWARD");
  RBdrive.setDirection("FORWARD");
  MainArmRight.setDirection("REVERSE");
  MainArmLeft.setDirection("FORWARD");
  LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
  MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
  MainArmRight.setDualMode("RUN_WITHOUT_ENCODER", MainArmLeft, "RUN_WITHOUT_ENCODER");
}

/**
 * Describe this function...
 */
function Initialize_servos() {
  Servo1.scaleRange(0, 1);
  HookServo.scaleRange(0, 1);
  HookLock.scaleRange(0, 1);
  ColorSensorservo.scaleRange(0, 1);
  Servo1.setPosition(1);
  HookServo.setPosition(0.725);
  HookLock.setPosition(0.775);
}

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  initialize_motors();
  Initialize_servos();
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    my_01_Lift_down_on_lander();
    my_02_push_backwards_towards_lander();
    my_03_calibrate___unlatch();
    my_04_move_forward_from_lander();
    my_05_move_arm_down();
    my_06_gyro_turn_left();
    my_07_move_forward_towards_wall();
    my_08b_gyro_turn_left_near_wall();
    my_09_move_backwards_towards_depot();
    my_10_drop_marker();
    my_11_move_forward_towards_enemy_crater();
  }
}

/**
 * Describe this function...
 */
function my_01_Lift_down_on_lander() {
  MainArmRight.setDualPower(-0.8, MainArmLeft, -0.8);
  linearOpMode.sleep(500);
  HookLock.setPosition(0.9125);
  linearOpMode.sleep(500);
  MainArmRight.setDualPower(0, MainArmLeft, 0);
  MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
  MainArmRight.setDualMode("RUN_TO_POSITION", MainArmLeft, "RUN_TO_POSITION");
  MainArmRight.setDualTargetPosition(4084, MainArmLeft, 4084);
  MainArmLeft.setDualPower(0.5, MainArmRight, 0.5);
  while (MainArmLeft.isBusy() && MainArmRight.isBusy() && linearOpMode.opModeIsActive()) {
    telemetryAddTextData('Status:', 'Moving Arm Up');
    telemetry.update();
  }
  MainArmLeft.setDualPower(0, MainArmRight, 0);
  MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
  linearOpMode.sleep(500);
}

/**
 * Describe this function...
 */
function my_02_push_backwards_towards_lander() {
  LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
  LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
  LBdrive.setDualTargetPosition(-373, RBdrive, -373);
  LFdrive.setDualTargetPosition(-373, RFdrive, -373);
  LBdrive.setDualPower(0.5, RBdrive, 0.5);
  LFdrive.setDualPower(0.5, RFdrive, 0.5);
  while (LBdrive.isBusy() && RBdrive.isBusy() && linearOpMode.opModeIsActive()) {
    telemetryAddTextData('Status:', 'Pushing towards lander');
    telemetry.update();
  }
  LBdrive.setDualPower(0, RBdrive, 0);
  LFdrive.setDualPower(0, RFdrive, 0);
  LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
}

/**
 * Describe this function...
 */
function my_03_calibrate___unlatch() {
  linearOpMode.sleep(500);
  GyroSensor.calibrate();
  while (GyroSensor.isCalibrating() && linearOpMode.opModeIsActive()) {
    telemetryAddTextData('Status:', 'Calibrating gyro');
    telemetry.update();
  }
  HookServo.setPosition(0.9);
  linearOpMode.sleep(500);
}

/**
 * Describe this function...
 */
function my_04_move_forward_from_lander() {
  LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
  LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
  LBdrive.setDualTargetPosition(500, RBdrive, 500);
  LFdrive.setDualTargetPosition(500, RFdrive, 500);
  LBdrive.setDualPower(0.5, RBdrive, 0.5);
  LFdrive.setDualPower(0.5, RFdrive, 0.5);
  while (LBdrive.isBusy() && RBdrive.isBusy() && linearOpMode.opModeIsActive()) {
    telemetryAddTextData('Status', 'Moving forward from lander');
    telemetry.update();
  }
  LBdrive.setDualPower(0, RBdrive, 0);
  LFdrive.setDualPower(0, RFdrive, 0);
  LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
}

/**
 * Describe this function...
 */
function my_05_move_arm_down() {
  MainArmRight.setDualMode("RUN_TO_POSITION", MainArmLeft, "RUN_TO_POSITION");
  MainArmRight.setDualTargetPosition(-1873, MainArmLeft, -1873);
  MainArmLeft.setDualPower(0.5, MainArmRight, 0.5);
  while (MainArmLeft.isBusy() && MainArmRight.isBusy() && linearOpMode.opModeIsActive()) {
    telemetryAddTextData('Status', 'Moving arm down');
    telemetry.update();
  }
  MainArmLeft.setDualPower(0, MainArmRight, 0);
  MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
}

/**
 * Describe this function...
 */
function my_07_move_forward_towards_wall() {
  LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
  LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
  LBdrive.setDualTargetPosition(2500, RBdrive, 2500);
  LFdrive.setDualTargetPosition(2500, RFdrive, 2500);
  LBdrive.setDualPower(0.5, RBdrive, 0.5);
  LFdrive.setDualPower(0.5, RFdrive, 0.5);
  while (LBdrive.isBusy() && RBdrive.isBusy() && linearOpMode.opModeIsActive()) {
    telemetryAddTextData('Status', 'Moving towards wall');
    telemetry.update();
  }
  LBdrive.setDualPower(0, RBdrive, 0);
  LFdrive.setDualPower(0, RFdrive, 0);
  LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
}

/**
 * Describe this function...
 */
function my_08b_gyro_turn_left_near_wall() {
  RFdrive.setDualMode("RUN_WITHOUT_ENCODER", RBdrive, "RUN_WITHOUT_ENCODER");
  LFdrive.setDualMode("RUN_WITHOUT_ENCODER", LBdrive, "RUN_WITHOUT_ENCODER");
  LBdrive.setDualPower(-0.6, RBdrive, 0.6);
  LFdrive.setDualPower(-0.6, RFdrive, 0.6);
  linearOpMode.sleep(250);
  while (!(linearOpMode.isStopRequested() || GyroSensor.getHeading() >= 145)) {
    telemetryAddTextData('Status:', 'Performing gyro turn');
    telemetry.addNumericData('Current Heading', miscAccess.roundDecimal(GyroSensor.getHeading(), 2));
    telemetry.update();
  }
  LBdrive.setDualPower(0, RBdrive, 0);
  LFdrive.setDualPower(0, RFdrive, 0);
  RFdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", LBdrive, "STOP_AND_RESET_ENCODER");
}

/**
 * Describe this function...
 */
function my_08_pivot_turn_left() {
  RFdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
  RFdrive.setDualTargetPosition(4868, RBdrive, 2476);
  RBdrive.setDualPower(0.8, RFdrive, 0.8);
  while (RBdrive.isBusy() && RFdrive.isBusy() && linearOpMode.opModeIsActive()) {
    telemetryAddTextData('Status', 'Pivot turn');
    telemetry.update();
  }
  RFdrive.setDualPower(0, RBdrive, 0);
  RFdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
}

/**
 * Describe this function...
 */
function my_09_move_backwards_towards_depot() {
  LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
  LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
  LBdrive.setDualTargetPosition(-3000, RBdrive, -3000);
  LFdrive.setDualTargetPosition(-3000, RFdrive, -3000);
  LBdrive.setDualPower(0.7, RBdrive, 0.7);
  LFdrive.setDualPower(0.7, RFdrive, 0.7);
  while (LBdrive.isBusy() && RBdrive.isBusy() && linearOpMode.opModeIsActive()) {
    telemetry.update();
  }
  LBdrive.setDualPower(0, RBdrive, 0);
  LFdrive.setDualPower(0, RFdrive, 0);
  LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
}

/**
 * Describe this function...
 */
function my_10_drop_marker() {
  Servo1.setPosition(0.5);
  linearOpMode.sleep(500);
}

/**
 * Describe this function...
 */
function my_11_move_forward_towards_enemy_crater() {
  LBdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
  LFdrive.setDualMode("RUN_TO_POSITION", RFdrive, "RUN_TO_POSITION");
  LBdrive.setDualTargetPosition(4200, RBdrive, 4200);
  LFdrive.setDualTargetPosition(4200, RFdrive, 4200);
  LBdrive.setDualPower(0.8, RBdrive, 0.6);
  LFdrive.setDualPower(0.8, RFdrive, 0.6);
  while (LBdrive.isBusy() && RBdrive.isBusy() && linearOpMode.opModeIsActive()) {
    telemetryAddTextData('Status', 'Moving towards enemy crater');
    telemetry.update();
  }
  LBdrive.setDualPower(0, RBdrive, 0);
  LFdrive.setDualPower(0, RFdrive, 0);
  LBdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", RFdrive, "STOP_AND_RESET_ENCODER");
}

/**
 * Describe this function...
 */
function my_06_gyro_turn_left() {
  RFdrive.setDualMode("RUN_WITHOUT_ENCODER", RBdrive, "RUN_WITHOUT_ENCODER");
  LFdrive.setDualMode("RUN_WITHOUT_ENCODER", LBdrive, "RUN_WITHOUT_ENCODER");
  LBdrive.setDualPower(-0.6, RBdrive, 0.6);
  LFdrive.setDualPower(-0.6, RFdrive, 0.6);
  linearOpMode.sleep(250);
  while (!(linearOpMode.isStopRequested() || GyroSensor.getHeading() >= 50)) {
    telemetryAddTextData('Status:', 'Performing gyro turn');
    telemetry.addNumericData('Current Heading', miscAccess.roundDecimal(GyroSensor.getHeading(), 2));
    telemetry.update();
  }
  LBdrive.setDualPower(0, RBdrive, 0);
  LFdrive.setDualPower(0, RFdrive, 0);
  RFdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", LBdrive, "STOP_AND_RESET_ENCODER");
}
