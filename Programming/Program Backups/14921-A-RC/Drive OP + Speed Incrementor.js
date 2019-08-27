var Reverse, Servo_Disable, Wheel_Speed_Increment, Arm_Speed_Increment;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  Servo1.scaleRange(0, 1);
  HookServo.scaleRange(0, 1);
  HookLock.scaleRange(0, 1);
  Servo1.setPosition(1);
  HookServo.setPosition(0.725);
  HookLock.setPosition(0.775);
  Reverse = 0;
  Servo_Disable = 0;
  Wheel_Speed_Increment = 0;
  Arm_Speed_Increment = 1;
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      if (gamepad1.getDpadDown()) {
        Wheel_Speed_Increment = (typeof Wheel_Speed_Increment == 'number' ? Wheel_Speed_Increment : 0) + -0.1;
      }
      if (gamepad1.getDpadLeft()) {
        Arm_Speed_Increment = (typeof Arm_Speed_Increment == 'number' ? Arm_Speed_Increment : 0) + -0.1;
      }
      if (gamepad1.getDpadRight()) {
        Arm_Speed_Increment = (typeof Arm_Speed_Increment == 'number' ? Arm_Speed_Increment : 0) + 0.1;
      }
      if (gamepad1.getDpadUp()) {
        Wheel_Speed_Increment = (typeof Wheel_Speed_Increment == 'number' ? Wheel_Speed_Increment : 0) + 0.1;
      }
      if (gamepad1.getBack()) {
        Reverse = 1;
      }
      if (gamepad1.getStart()) {
        Reverse = 0;
      }
      if (gamepad1.getA()) {
        Servo1.setPosition(0.5);
        linearOpMode.sleep(2000);
        Servo1.setPosition(1);
      }
      if (gamepad1.getX()) {
        if (HookServo.getPosition() == 0.9) {
          HookServo.setPosition(0.725);
          linearOpMode.sleep(1000);
        } else if (HookServo.getPosition() == 0.725) {
          HookServo.setPosition(0.9);
          linearOpMode.sleep(1000);
        }
      }
      if (gamepad1.getY()) {
        if (HookLock.getPosition() == 0.9125) {
          HookLock.setPosition(0.775);
          linearOpMode.sleep(1000);
        } else if (HookLock.getPosition() == 0.775) {
          HookLock.setPosition(0.9125);
          linearOpMode.sleep(1000);
        }
      }
      if (gamepad1.getRightTrigger() == 0 && gamepad1.getRightBumper() == false) {
        MainArmRight.setDualPower(0, MainArmLeft, 0);
      }
      if (gamepad1.getRightTrigger() > 0) {
        MainArmRight.setDualPower(Arm_Speed_Increment, MainArmLeft, -Arm_Speed_Increment);
      }
      if (gamepad1.getRightBumper() == true) {
        MainArmRight.setDualPower(-Arm_Speed_Increment, MainArmLeft, Arm_Speed_Increment);
      }
      if (Reverse == 0) {
        LFdrive.setDualPower(gamepad1.getLeftStickY() + Wheel_Speed_Increment, LBdrive, gamepad1.getLeftStickY() + Wheel_Speed_Increment);
        RFdrive.setDualPower(-(gamepad1.getRightStickY() + Wheel_Speed_Increment), RBdrive, -(gamepad1.getRightStickY() + Wheel_Speed_Increment));
      }
      if (Reverse == 1) {
        LFdrive.setDualPower(-(gamepad1.getRightStickY() + Wheel_Speed_Increment), LBdrive, -(gamepad1.getRightStickY() + Wheel_Speed_Increment));
        RFdrive.setDualPower(gamepad1.getLeftStickY() + Wheel_Speed_Increment, RBdrive, gamepad1.getLeftStickY() + Wheel_Speed_Increment);
      }
      telemetry.update();
    }
  }
}
