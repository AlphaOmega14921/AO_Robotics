/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
  MainArmRight.setDualMode("RUN_USING_ENCODER", MainArmLeft, "RUN_USING_ENCODER");
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      if (gamepad1.getA()) {
        MainArmRight.setDualMode("STOP_AND_RESET_ENCODER", MainArmLeft, "STOP_AND_RESET_ENCODER");
        MainArmRight.setDualMode("RUN_USING_ENCODER", MainArmLeft, "RUN_USING_ENCODER");
      }
      MainArmRight.setDualPower(gamepad1.getLeftStickY(), MainArmLeft, -gamepad1.getLeftStickY());
      telemetry.addNumericData('Left Motor', MainArmLeft.getCurrentPosition());
      telemetry.addNumericData('Right Motor', MainArmRight.getCurrentPosition());
      telemetry.update();
    }
  }
}
