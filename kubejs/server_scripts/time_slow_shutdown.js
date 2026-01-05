const TimeAccelerationCore = Java.loadClass('net.wzz.time_slow.event.TimeAccelerationCore');
ServerEvents.unloaded(event => {
  try {
    TimeAccelerationCore.shutdown();
    console.info('[time_slow] scheduler shut down on server unload');
  } catch (e) {
    console.error('[time_slow] shutdown error: ' + e);
  }
});

LevelEvents.unloaded(event => {
  try {
    TimeAccelerationCore.cleanupLevel(event.level);
    console.info('[time_slow] cleaned up level on unload');
  } catch (e) {
    console.error('[time_slow] cleanup error: ' + e);
  }
});
