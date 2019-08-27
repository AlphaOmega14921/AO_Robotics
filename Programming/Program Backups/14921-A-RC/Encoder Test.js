/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  LFdrive.setDualMode("STOP_AND_RESET_ENCODER", LBdrive, "STOP_AND_RESET_ENCODER");
  RFdrive.setDualMode("STOP_AND_RESET_ENCODER", RBdrive, "STOP_AND_RESET_ENCODER");
  LFdrive.setDualMode("RUN_TO_POSITION", LBdrive, "RUN_TO_POSITION");
  RFdrive.setDualMode("RUN_TO_POSITION", RBdrive, "RUN_TO_POSITION");
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      telemetry.addNumericData('Left Front', LFdrive.getCurrentPosition());
      telemetry.addNumericData('Left Back', LBdrive.getCurrentPosition());
      telemetry.addNumericData('Right Front', RFdrive.getCurrentPosition());
      telemetry.addNumericData('Right Back', RBdrive.getCurrentPosition());
      telemetry.update();
    }
  }
}
